import { Box, Tooltip } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import { Booking, BookingStatus } from "@/lib/types";

interface BookingItemProps {
  booking: Booking;
  style: {
    left: string;
    width: string;
  };
  rowHeight: number;
}

export default function BookingItem({ booking, style, rowHeight }: BookingItemProps) {
  function getStatusColor(status: BookingStatus) {
    switch (status) {
      case "Confirmed":
        return blue[700];
      case "Pending":
        return grey[500];
      case "Completed":
        return blue[300];
      default:
        return grey[300];
    }
  }

  return (
    <Tooltip title={`${booking.title} (${booking.status})`} arrow>
      <Box
        sx={{
          position: "absolute",
          top: "8px",
          height: `${rowHeight - 16}px`,
          backgroundColor: getStatusColor(booking.status),
          borderRadius: "4px",
          padding: "4px",
          color: "white",
          fontSize: "12px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          ...style,
        }}
      >
        {booking.title}
      </Box>
    </Tooltip>
  );
} 