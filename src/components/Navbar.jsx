import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Rocket } from "../../public/assets/VectorImages";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      component="nav"
      sx={{
        border: "1.8px solid #FFF",
        background:
          "linear-gradient(111deg, rgba(255, 255, 255, 0.82) -4.87%, rgba(255, 255, 255, 0.00) 103.95%)",
        backdropFilter: "blur(25px)",
        height: "88px",
        display: "flex",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          padding: { xs: "0 16px", md: "0 24px" },
          "@media (min-width: 1920px)": {
            maxWidth: "1920px",
          },
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            padding: 0,
            "& img": {
              height: { xs: "40px", md: "50px" },
              width: "auto",
              objectFit: "contain",
              display: "block",
            },
          }}
        >
          <img src="/src/assets/foxtoxlogo.png" alt="Foxtox Logo" />
        </Typography>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", md: "none" },
              color: "#1B7EBA",
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: { xs: 1, md: 3 } }}>
            <Button
              color="inherit"
              sx={{
                color: "#1B7EBA",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: { xs: "0.75rem", md: "0.875rem" },
                padding: { xs: "0.25rem 0.75rem", md: "0.5rem 1.5rem" },
                whiteSpace: "nowrap",
                minWidth: "auto",
              }}
              variant="contained"
            >
              Advisors Login
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "#fff",
                backgroundColor: "#1B7EBA",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: { xs: "0.75rem", md: "0.875rem" },
                padding: { xs: "0.25rem 0.75rem", md: "0.5rem 1.5rem" },
                whiteSpace: "nowrap",
                minWidth: "auto",
              }}
              variant="contained"
            >
              <Box
                component="span"
                sx={{ display: { xs: "none", sm: "inline-block" } }}
              >
                {Rocket()}
              </Box>
              Customer Login
            </Button>
          </Box>
        )}

        {/* Mobile UI */}
        {mobileOpen && (
          <Box
            sx={{
              position: "absolute",
              top: "100%",
              right: 0,
              left: 0,
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              zIndex: 1100,
            }}
          >
            <Button
              fullWidth
              sx={{
                color: "#1B7EBA",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                border: "1px solid #1B7EBA",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
              variant="outlined"
            >
              Advisors Login
            </Button>
            <Button
              fullWidth
              sx={{
                color: "#fff",
                backgroundColor: "#1B7EBA",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
              variant="contained"
            >
              {Rocket()} Customer Login
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
