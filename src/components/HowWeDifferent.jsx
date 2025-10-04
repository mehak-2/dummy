import React from "react";
import { Box, Typography, Container, Grid, styled } from "@mui/material";
import {
  Psychology,
  AttachMoney,
  TrendingUp,
  SupportAgent,
  School,
  Speed,
  VerifiedUser,
  Assessment,
  GppGood,
  WhatsApp,
} from "@mui/icons-material";

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(26, 27, 35, 0.9)",
  borderRadius: "16px",
  padding: theme.spacing(4),
  height: "100%",
  transition: "all 0.3s ease",
  border: "1px solid rgba(23, 183, 69, 0.2)",
  backdropFilter: "blur(10px)",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 30px rgba(23, 183, 69, 0.2)",
    borderColor: "rgba(23, 183, 69, 0.4)",
  },
}));

const FeatureItem = ({ icon: Icon, children }) => (
  <Box sx={{ display: "flex", mb: 3, alignItems: "flex-start" }}>
    <Box
      sx={{
        color: "#17B745",
        mr: 2,
        mt: 0.5,
        minWidth: "24px",
      }}
    >
      {Icon}
    </Box>
    <Typography variant="body1" sx={{ color: "#E0E0E0", lineHeight: 1.6 }}>
      {children}
    </Typography>
  </Box>
);

const HowWeDifferent = () => {
  const sections = [
    {
      title: "We will train you to trade the right way",
      icon: <School fontSize="large" />,
      items: [
        {
          icon: <Psychology fontSize="small" />,
          text: "Patience & Discipline => Sustainability",
        },
        {
          icon: <AttachMoney fontSize="small" />,
          text: "Start with small capital. Don't scale it up quickly.",
        },
        { icon: <TrendingUp fontSize="small" />, text: "Invest your profits" },
        {
          icon: <GppGood fontSize="small" />,
          text: "No Greed, Cut Losses timely",
        },
        { icon: <Speed fontSize="small" />, text: "Doing Less is More" },
      ],
    },
    {
      title: "We Care about your money & your emotions",
      icon: <SupportAgent fontSize="large" />,
      items: [
        {
          icon: <VerifiedUser fontSize="small" />,
          text: "We'll hold your hand if you're new to stock markets",
        },
        {
          icon: <WhatsApp fontSize="small" />,
          text: "Always available for support on WhatsApp",
        },
      ],
    },
    {
      title: "We ensure Quality of Advisory",
      icon: <Assessment fontSize="large" />,
      items: [
        {
          icon: <School fontSize="small" />,
          text: "Limited advisors with consistent performance",
        },
        {
          icon: <GppGood fontSize="small" />,
          text: "Accountability - they answer if a trade goes wrong",
        },
        {
          icon: <TrendingUp fontSize="small" />,
          text: "Transparency - monthly performance metrics to compare",
        },
      ],
    },
  ];

  return (
    <Box
      component="section"
      id="how-we-different"
      sx={{
        py: { xs: 20, md: 12 },
        background: "#E9F4FF",
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(23, 183, 69, 0.5), transparent)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8} data-aos="fade-up">
          <Typography
            variant="h2"
            sx={{
              color: "#17B745",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 600,
              letterSpacing: "3px",
              mb: 2,
              textTransform: "uppercase",
            }}
          >
            How are we different?
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontSize: { xs: "28px", md: "42px" },
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 3,
              background:
                "linear-gradient(90deg,rgb(63, 61, 61) 0%,rgb(53, 62, 122) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 15px rgba(0,0,0,0.3)",
              maxWidth: "800px",
              mx: "auto",
              px: 2,
            }}
          >
            We will train you to trade the right way
          </Typography>
          <Box
            sx={{
              width: "100px",
              height: "4px",
              background: "linear-gradient(90deg, #17B745, #0d6e2c)",
              margin: "0 auto",
              borderRadius: "2px",
              mb: 2,
            }}
          />
        </Box>

        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {sections.map((section, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <FeatureCard>
                <Box sx={{ textAlign: "center", mb: 3 }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "rgba(23, 183, 69, 0.1)",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {React.cloneElement(section.icon, {
                      sx: { color: "#17B745", fontSize: "32px" },
                    })}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: 700,
                      mb: 3,
                      textAlign: "center",
                    }}
                  >
                    {section.title}
                  </Typography>
                </Box>
                {section.items.map((item, itemIndex) => (
                  <FeatureItem key={itemIndex} icon={item.icon}>
                    {item.text}
                  </FeatureItem>
                ))}
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowWeDifferent;
