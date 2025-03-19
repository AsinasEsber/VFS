import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Vehicle, Booking } from "@/lib/types";
import BookingItem from "./BookingItem";

// Constants
const ROW_HEIGHT = 60;

interface VehicleRowProps {
  vehicle: Vehicle;
  bookings: Booking[];
  timeSlots: Date[];
  calculateBookingStyle: (booking: Booking) => { left: string; width: string };
}

export default function VehicleRow({
  vehicle,
  bookings,
  timeSlots,
  calculateBookingStyle,
}: VehicleRowProps) {
  return (
    <Box
      sx={{
        position: "relative",
        height: `${ROW_HEIGHT}px`,
        display: "flex",
        borderBottom: `1px solid ${grey[200]}`,
        boxSizing: "border-box",
      }}
    >
      {/* Grid lines */}
      {timeSlots.map((_, index) => (
        <Box
          key={index}
          sx={{
            flex: 1,
            height: "100%",
            borderRight:
              index < timeSlots.length - 1 ? `1px solid ${grey[100]}` : "none",
          }}
        />
      ))}

      {/* Bookings */}
      {bookings.map((booking) => (
        <BookingItem
          key={booking.id}
          booking={booking}
          style={calculateBookingStyle(booking)}
          rowHeight={ROW_HEIGHT}
        />
      ))}
    </Box>
  );
} 