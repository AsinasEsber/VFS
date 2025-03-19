import { VehicleType } from "@/lib/types";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const vehicleTypes = [
  "All",
  "Passenger car",
  "Truck",
  "Van",
  "Bus",
  "Special vehicle",
];

interface VehicleFilterProps {
  vehicleType: VehicleType;
  setVehicleType: (vehicleType: VehicleType) => void;
}

export default function VehicleFilter({
  vehicleType,
  setVehicleType,
}: VehicleFilterProps) {
  return (
    <TextField
      select
      label="Vehicle Type"
      sx={{
        width: "100%",
      }}
      onChange={(e) => setVehicleType(e.target.value as VehicleType)}
      value={vehicleType}
    >
      {vehicleTypes.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
