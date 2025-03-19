// ChartHeader.tsx
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { grey } from "@mui/material/colors";

interface ChartHeaderProps {
  title: string;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ChartHeader({
  title,
  onPrevious,
  onNext,
}: ChartHeaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,
        backgroundColor: grey[100],
      }}
    >
      <IconButton onClick={onPrevious}>
        <ArrowBackIosIcon />
      </IconButton>
      <Typography variant="h6">{title}</Typography>
      <IconButton onClick={onNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
