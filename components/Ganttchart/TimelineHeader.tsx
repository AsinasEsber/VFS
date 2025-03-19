import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { format } from "date-fns";
import { ViewMode } from "@/lib/types";

// Constants
const HEADER_HEIGHT = 40;

interface TimelineHeaderProps {
  timeSlots: Date[];
  viewMode: ViewMode;
}

export default function TimelineHeader({ timeSlots, viewMode }: TimelineHeaderProps) {
  // Format time slot labels
  function formatTimeSlot(date: Date) {
    if (viewMode === "day") {
      return format(date, "HH:mm");
    } else if (viewMode === "week") {
      return format(date, "EEE d");
    } else {
      return (
        <>
          {format(date, "EEE")}
          <br />
          {format(date, "d")}
        </>
      );
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        height: `${HEADER_HEIGHT}px`,
        borderBottom: `1px solid ${grey[300]}`,
        backgroundColor: grey[200],
        boxSizing: "border-box",
      }}
    >
      {timeSlots.map((slot, index) => (
        <Box
          key={index}
          sx={{
            flex: 1,
            borderRight:
              index < timeSlots.length - 1
                ? `1px solid ${grey[300]}`
                : "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="caption">{formatTimeSlot(slot)}</Typography>
        </Box>
      ))}
    </Box>
  );
} 