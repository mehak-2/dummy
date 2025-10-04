import { Box, Container, Typography } from "@mui/material";

const GoalSection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        position: "relative",
        backgroundColor: "#1D80B945",
        width: "100%",
        margin: 0,
        padding: 0,
        zIndex: 1,
        mt: { xs: 4, md: 4 },
        "&.MuiContainer-root": {
          maxWidth: "none",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "1200px" },
          margin: "0 auto",
          textAlign: "center",
          padding: { xs: 2, md: 8 },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: "center",
            mb: { xs: 2, md: 4 },
            mt: { xs: 2, md: 0 },
            fontFamily: "Inter , sans-serif",
            color: "#1C6096",
            fontStyle: "normal",
            fontWeight: 900,
            fontSize: { xs: "25px", sm: "28px", md: "50px" },
          }}
        >
          Our Goal
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#898CA9",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "150%",

            mb: { xs: 2, md: 4 },
          }}
        >
          We want to help you generate returns from trading in the stock market
          which only people with complete time commitment, knowledge, trading
          skills, and years of experience are able to.
          <Box sx={{ my: 2 }}>
            How? - By getting the best of those few traders advise you what,
            when and how to trade.
          </Box>
          And we at Foxtox will hold your hand through every step of this
          journey because we care about your hard earned money.
        </Typography>
      </Box>
    </Container>
  );
};

export default GoalSection;
