// VehicleSidebar.tsx
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Vehicle } from "@/lib/types";

// Constants
const HEADER_HEIGHT = 40;
const ROW_HEIGHT = 60;

interface VehicleSidebarProps {
  vehicles: Vehicle[];
}

export default function VehicleSidebar({ vehicles }: VehicleSidebarProps) {
  return (
    <Box
      sx={{
        width: "200px",
        borderRight: `1px solid ${grey[300]}`,
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          height: `${HEADER_HEIGHT}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: grey[200],
          borderBottom: `1px solid ${grey[300]}`,
          boxSizing: "border-box",
        }}
      >
        <Typography variant="subtitle2">Vehicles</Typography>
      </Box>
      <Box>
        {vehicles.map((vehicle) => (
          <Box
            key={vehicle.id}
            sx={{
              height: `${ROW_HEIGHT}px`,
              display: "flex",
              alignItems: "center",
              padding: 1,
              borderBottom: `1px solid ${grey[200]}`,
              boxSizing: "border-box",
            }}
          >
            <Typography variant="body2" noWrap>
              {vehicle.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
