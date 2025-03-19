import Logo from "@/components/Logo";
import ModeSwitcher from "@/components/ModeSwitcher";
import { ViewMode } from "@/lib/types";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface HeaderProps {
  viewMode: ViewMode;
  setViewMode: (viewMode: ViewMode) => void;
}

export default function Header({ viewMode, setViewMode }: HeaderProps) {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Logo></Logo>
            <ModeSwitcher
              viewMode={viewMode}
              setViewMode={setViewMode}
            ></ModeSwitcher>
          </Container>
        </CardContent>
      </Card>
    </>
  );
}
