import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import VehicleFilter from "./VehicleFilter";
import BookingFilter from "./BookingFilter";
import { BookingStatus, VehicleType } from "@/lib/types";

interface FilterProps {
  vehicleType: VehicleType;
  setVehicleType: (vehicleType: VehicleType) => void;
  bookingStatus: BookingStatus;
  setBookingStatus: (bookingStatus: BookingStatus) => void;
}

export default function Filter({
  vehicleType,
  setVehicleType,
  bookingStatus,
  setBookingStatus,
}: FilterProps) {
  return (
    <Card variant="outlined" sx={{ my: 5 }}>
      <CardContent>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <VehicleFilter
            vehicleType={vehicleType}
            setVehicleType={setVehicleType}
          ></VehicleFilter>
          <BookingFilter
            bookingStatus={bookingStatus}
            setBookingStatus={setBookingStatus}
          ></BookingFilter>
        </Container>
      </CardContent>
    </Card>
  );
}
