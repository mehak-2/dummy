import { Box, Container, Typography } from "@mui/material";
import Step from "./Step";
import StepCard from "./StepCard";

const OfferingsSection = () => {
  return (
    <Container>
      <Box
        sx={{
          width: { xs: "100%", md: "100%", lg: "100%" },
          maxWidth: { md: "1800px" },
          minHeight: { xs: "auto", md: "1500px", lg: "100%" },
          borderRadius: "16px",
          background:
            "linear-gradient(180deg, rgba(27, 123, 198, 0.82) 0%, rgba(20, 149, 66, 0.82) 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: { xs: 3, md: 6 },
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 8 },
            fontFamily: "Inter, sans-serif",
            color: "#FFF",
            fontStyle: "normal",
            fontWeight: 900,
            lineHeight: "130%",
            fontSize: {
              xs: "25px",
              sm: "28px",
              md: "50px",
            },
            width: "100%",
          }}
        >
          What does a day with Foxtox look like?
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            "&:before": {
              position: "absolute",
              left: "20px",
              top: "40px",
              fontFamily: "Inter, sans-serif",
              bottom: "40px",
              width: "2px",
              background:
                "linear-gradient(to bottom, #17B745, rgba(23, 183, 69, 0.2))",
              zIndex: 1,
              display: { xs: "none", md: "block" },
            },
          }}
        >
          <Step number={1} title="WhatsApp Notification on new trade calls">
            Evaluate and choose which trade suits you. Click “Notify Me” and
            forget!
          </Step>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 4,
              mt: 5,
              pl: { xs: 0, md: "76px" },
              pr: { xs: 0, md: 4 },
            }}
          >
            <StepCard
              number={1}
              title="Advisor Trade"
              image="/src/assets/AdvisorTradeWhatsapp.png"
              imageAlt="Advisor added New trade"
              label="Trade Notification"
            />
            <StepCard
              number={2}
              title="Dashboard View"
              image="/src/assets/FoxtoxDashboard.png"
              imageAlt="Foxtox Dashboard"
            />
          </Box>

          <Step
            number={2}
            title="WhatsApp Notification when it's time to enter"
          >
            Place relevant order(s) on your Broker app. Back to work!
          </Step>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 4,
              mt: 5,
              pl: { xs: 0, md: "76px" },
              pr: { xs: 0, md: 4 },
            }}
          >
            <StepCard
              number={3}
              title="Time to Enter"
              image="/src/assets/TimeToEnterWhatsapp.png"
              imageAlt="Time to Enter"
              label="Entry Notification"
            />
            <StepCard
              number={4}
              title="Place Order"
              image="/src/assets/PlaceOrderZerodha.png"
              imageAlt="Place order screen (Zerodha app)"
              label="Broker App"
            />
          </Box>

          <Step
            number={3}
            title="WhatsApp Notification when it's time to book profits / losses"
          >
            Open Broker app, evaluate & exit trade. DONE!
          </Step>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 4,
              mt: 5,
              pl: { xs: 0, md: "76px" },
              pr: { xs: 0, md: 4 },
            }}
          >
            <StepCard
              number={4}
              title="Book Profits"
              image="/src/assets/BookProfitsWhatsapp.png"
              imageAlt="Book Profits"
              label="Exit Notification"
            />
            <StepCard
              number={5}
              title="Positions Overview"
              image="/src/assets/PositionsZerodha.png"
              imageAlt="Positions Zerodha"
              label="Positions Overview"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default OfferingsSection;
