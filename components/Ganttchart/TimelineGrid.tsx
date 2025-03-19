// TimelineGrid.tsx
import { Box } from "@mui/material";
import { Vehicle, Booking, ViewMode } from "@/lib/types";
import TimelineHeader from "./TimelineHeader";
import VehicleRow from "./VehicleRow";
import { isBookingVisible, calculateBookingStyle } from "./TimeGridHelpers";

interface TimelineGridProps {
  viewMode: ViewMode;
  timeSlots: Date[];
  vehicles: Vehicle[];
  bookings: Booking[];
  currentDate: Date;
}

export default function TimelineGrid({
  viewMode,
  timeSlots,
  vehicles,
  bookings,
  currentDate,
}: TimelineGridProps) {
  // Calculate booking styles with closure to avoid repeating parameters
  const getBookingStyle = (booking: Booking) => {
    return calculateBookingStyle(booking, currentDate, viewMode);
  };

  return (
    <Box sx={{ flex: 1 }}>
      {/* Time slots header */}
      <TimelineHeader timeSlots={timeSlots} viewMode={viewMode} />

      {/* Rows for each vehicle */}
      {vehicles.map((vehicle) => {
        const vehicleBookings = bookings.filter(
          (booking) =>
            booking.vehicleId === vehicle.id && 
            isBookingVisible(booking, currentDate, viewMode)
        );

        return (
          <VehicleRow
            key={vehicle.id}
            vehicle={vehicle}
            bookings={vehicleBookings}
            timeSlots={timeSlots}
            calculateBookingStyle={getBookingStyle}
          />
        );
      })}
    </Box>
  );
}
