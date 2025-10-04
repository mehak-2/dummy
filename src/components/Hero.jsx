import { Box, Typography, Container, Button } from "@mui/material";
import {
  HeroLeft as HeroLeftSvg,
  HeroRight as HeroRightSvg,
  MobileHeroLeft,
  MobileHeroRight,
} from "../../public/assets/VectorImages";
import MobileImage from "../../public/assets/MobileImage.png";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "100vh", md: "1024px" },
        background: "linear-gradient(180deg, #149542 0%, #1B7BC6 100%)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        margin: "0 auto",
        position: "relative",
        py: { xs: 4, md: 8, lg: 12, xl: 16 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: { xs: "100%", md: "100%", lg: "100%" },
          height: "110%",
          left: { xs: 0, md: "-20%", lg: "-25%", xl: "-25%" },
          zIndex: 1,
          scale: { xs: 1, md: 0, lg: 1, xl: 1 },
          "& > div > svg": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
        }}
      >
        <Box
          component={HeroLeftSvg}
          sx={{
            display: { xs: "none", md: "block" },
            width: "100%",
            height: "100%",
          }}
        />
        <Box
          component={MobileHeroLeft}
          sx={{
            display: { xs: "block", md: "none" },
            width: "100%",
            height: "100%",
            zIndex: 1,
            position: "relative",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: 0,
          transformOrigin: "right top",
          height: "100%",
          top: { xs: 0, md: 0, lg: -20, xl: -40 },
          scale: { xs: 0, md: 0, lg: 1.1, xl: 1.4 },
          zIndex: 0,
          overflow: "hidden",
          display: { xs: "none", md: "block" },
          "& > div": {
            width: "100%",
            height: "100%",
            "& > svg": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          },
        }}
      >
        <Box component={HeroRightSvg} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          transformOrigin: "right top",
          height: "100%",
          top: 10,
          scale: 1,
          zIndex: 0,

          display: { xs: "block", md: "none" },
          "& > div": {
            width: "100%",
            height: "100%",
            "& > svg": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          },
        }}
      >
        <Box component={MobileHeroRight} />
      </Box>
      <Container
        maxWidth={false}
        sx={{
          minHeight: { xs: "calc(100vh - 32px)", md: "100%" },
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row" },
          alignItems: { xs: "center", md: "center", lg: "center" },
          justifyContent: {
            xs: "space-between",
            md: "space-between",
            lg: "space-between",
          },
          py: { xs: 2, md: 8, lg: 12 },
          pt: { xs: 20 },
          px: { xs: 2, sm: 3, lg: 6, xl: 8 },
          maxWidth: { xl: "1920px" },
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            maxWidth: { lg: "700px" },
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: { xs: "center", md: "center", lg: "flex-start" },
            textAlign: { xs: "center", md: "left", lg: "left" },
            pr: { lg: 4, xl: 8, md: 0 },
            order: { xs: 1, lg: 1, md: 1 },
            position: "relative",
            zIndex: 2,
            pt: { xs: 0, lg: 0 },
            mt: { xs: 0, lg: 0 },
          }}
        >
          <Typography
            component="h1"
            sx={{
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "2.5rem", sm: "2.125rem", md: "2.5625rem" },
              fontWeight: 900,
              lineHeight: "130%",
              mb: 2,
              zIndex: 120,
              maxWidth: { xs: "100%", md: "780px" },
              "& span": {
                display: "block",
                fontSize: { xs: "1.875rem", sm: "2.5rem", md: "1.875rem" },
                maxWidth: "260px",
                "@media (min-width:600px)": {
                  maxWidth: "100%",
                },
              },
            }}
          >
            Trade and Earn.
            <br /> Without Committing Time.
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#DEFFEB",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
              fontWeight: 500,
              lineHeight: "150%",
              mb: 4,
              maxWidth: { xs: "289px", sm: "500px", md: "601px" },
              mx: { xs: "auto", md: 0 },
              textAlign: { xs: "center", md: "left" },
              opacity: 0.9,
            }}
          >
            Just you & your advisor. Zero noise! Place your trades, let us track
            them, you book profits or losses. We enable, you trade. Simple!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#1E8A4E",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
              borderRadius: "10px",
              px: 4,
              py: 1.5,
              fontSize: "1.125rem",
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Get Early Access
          </Button>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: { xs: "center", md: "center", lg: "flex-end" },
            alignItems: { xs: "end", md: "end", lg: "center" },
            order: { xs: 2, lg: 2 },
            position: "relative",
            mt: { xs: 4, lg: 0 },
            zIndex: 1,
            px: { lg: 4 },
          }}
        >
          <Box
            component="img"
            src={MobileImage}
            alt="Mobile App Preview"
            sx={{
              width: "100%",
              maxWidth: { xs: "300px", sm: "350px", lg: "500px", xl: "600px" },
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0px 20px 50px rgba(0, 0, 0, 0.2))",
              position: "relative",
              display: { xs: "block", md: "block" },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
