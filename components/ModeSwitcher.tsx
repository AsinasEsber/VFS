import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { ViewMode } from "@/lib/types";

interface ModeSwitcherProps {
  viewMode: ViewMode;
  setViewMode: (viewMode: ViewMode) => void;
}

export default function ModeSwitcher({
  viewMode,
  setViewMode,
}: ModeSwitcherProps) {
  return (
    <ButtonGroup variant="outlined">
      <Button
        variant={viewMode === "day" ? "contained" : "outlined"}
        startIcon={<AccessTimeIcon />}
        onClick={() => setViewMode("day")}
      >
        Day
      </Button>
      <Button
        variant={viewMode === "week" ? "contained" : "outlined"}
        startIcon={<CalendarTodayIcon />}
        onClick={() => setViewMode("week")}
      >
        Week
      </Button>
      <Button
        variant={viewMode === "month" ? "contained" : "outlined"}
        startIcon={<FormatListBulletedIcon />}
        onClick={() => setViewMode("month")}
      >
        Month
      </Button>
    </ButtonGroup>
  );
}
