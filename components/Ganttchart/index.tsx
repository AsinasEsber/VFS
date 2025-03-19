// Main GanttChart.tsx
import { Box, Card, CardContent, Container } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
} from "date-fns";
import {
  BookingStatus,
  VehicleType,
  ViewMode,
  Vehicle,
  Booking,
} from "@/lib/types";
import ChartHeader from "./ChartHeader";
import VehicleSidebar from "./VehicleSidebar";
import TimelineGrid from "./TimelineGrid";
import { generateMockData } from "@/lib/fakeData";

interface GanttChartProps {
  viewMode: ViewMode;
  vehicleType: VehicleType;
  bookingStatus: BookingStatus;
}

export function GanttChart({
  viewMode,
  vehicleType,
  bookingStatus,
}: GanttChartProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState<Date[]>([]);
  const [data, setData] = useState<{
    vehicles: Vehicle[];
    bookings: Booking[];
  }>({
    vehicles: [],
    bookings: [],
  });

  // Load mock data
  useEffect(() => {
    setData(generateMockData());
  }, []);

  // Filter vehicles based on selected type
  const filteredVehicles = useMemo(() => {
    return vehicleType === "All"
      ? data.vehicles
      : data.vehicles.filter((vehicle) => vehicle.type === vehicleType);
  }, [data.vehicles, vehicleType]);

  // Filter bookings based on selected filters
  const filteredBookings = useMemo(() => {
    let bookings = data.bookings;

    if (bookingStatus !== "All") {
      bookings = bookings.filter((booking) => booking.status === bookingStatus);
    }

    if (vehicleType !== "All") {
      const vehicleIds = filteredVehicles.map((v) => v.id);
      bookings = bookings.filter((booking) =>
        vehicleIds.includes(booking.vehicleId)
      );
    }

    return bookings;
  }, [data.bookings, bookingStatus, filteredVehicles, vehicleType]);

  // Calculate time slots based on the view mode
  useEffect(() => {
    let slots: Date[] = [];

    if (viewMode === "day") {
      slots = Array.from({ length: 24 }, (_, i) => {
        const date = new Date(currentDate);
        date.setHours(i, 0, 0, 0);
        return date;
      });
    } else if (viewMode === "week") {
      const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
      const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
      slots = eachDayOfInterval({ start: weekStart, end: weekEnd });
    } else if (viewMode === "month") {
      const monthStart = startOfMonth(currentDate);
      const monthEnd = endOfMonth(currentDate);
      slots = eachDayOfInterval({ start: monthStart, end: monthEnd });
    }

    setTimeSlots(slots);
  }, [viewMode, currentDate]);

  // Format header text based on view mode
  function formatHeader() {
    if (viewMode === "day") {
      return format(currentDate, "EEEE, d. MMMM yyyy");
    } else if (viewMode === "week") {
      const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
      const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
      return `${format(weekStart, "d. MMMM")} - ${format(
        weekEnd,
        "d. MMMM yyyy"
      )}`;
    } else {
      return format(currentDate, "MMMM yyyy");
    }
  }

  // Navigation functions
  const handleNavigate = (direction: "prev" | "next") => {
    const amount = direction === "prev" ? -1 : 1;

    if (viewMode === "day") {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + amount);
      setCurrentDate(newDate);
    } else if (viewMode === "week") {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + 7 * amount);
      setCurrentDate(newDate);
    } else if (viewMode === "month") {
      const newDate = new Date(currentDate);
      newDate.setMonth(currentDate.getMonth() + amount);
      setCurrentDate(newDate);
    }
  };

  return (
    <Container>
      <Card variant="outlined" sx={{ my: 5 }}>
        <CardContent sx={{ padding: 0 }}>
          <ChartHeader
            title={formatHeader()}
            onPrevious={() => handleNavigate("prev")}
            onNext={() => handleNavigate("next")}
          />

          <Box sx={{ display: "flex", height: "100%" }}>
            <VehicleSidebar vehicles={filteredVehicles} />
            <TimelineGrid
              viewMode={viewMode}
              timeSlots={timeSlots}
              vehicles={filteredVehicles}
              bookings={filteredBookings}
              currentDate={currentDate}
            />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
