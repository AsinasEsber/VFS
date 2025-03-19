import { BookingStatus } from "@/lib/types";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const bookingStatusOptions = ["All", "Confirmed", "Pending", "Completed"];

interface BookingFilterProps {
  bookingStatus: BookingStatus;
  setBookingStatus: (bookingStatus: BookingStatus) => void;
}

export default function BookingFilter({
  bookingStatus,
  setBookingStatus,
}: BookingFilterProps) {
  return (
    <TextField
      select
      label="Booking Status"
      sx={{
        width: "100%",
      }}
      onChange={(e) => setBookingStatus(e.target.value as BookingStatus)}
      value={bookingStatus}
    >
      {bookingStatusOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
