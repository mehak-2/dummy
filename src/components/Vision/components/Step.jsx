import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Step = ({ number, title, children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        mb: { xs: 10, md: 14 },
        pt: number > 1 ? { xs: 4, md: 6 } : 0,
        "&:not(:first-of-type):before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: { xs: "42px", md: "42px" },
          right: "0",
          height: "1px",
          background:
            "linear-gradient(to right, rgba(255,255,255,0.1), transparent)",
          display: { xs: "block", md: "none" },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          mb: 3,
          pl: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #17B745, #0d6e2c)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "22px",
            mr: 3,
            flexShrink: 0,
            boxShadow: "0 4px 15px rgba(23, 183, 69, 0.3)",
            position: "relative",
            zIndex: 2,
            border: "2px solid rgba(255,255,255,0.1)",
          }}
        >
          {number}
        </Box>
        <Box sx={{ flex: 1, pt: "6px" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#FFF",
              fontSize: { xs: "22px", md: "28px" },
              fontWeight: 800,
              lineHeight: 1.3,
              mb: 2,
              background: "linear-gradient(90deg, #FFFFFF 0%, #E0E0E0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#E0E0E0",
              fontSize: { xs: "15px", md: "17px" },
              lineHeight: 1.7,
              maxWidth: "800px",
              pl: { md: "12px" },
              position: "relative",
              "&:before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: "10px",
                width: "4px",
                height: "calc(100% - 20px)",
                background:
                  "linear-gradient(to bottom, #17B745, rgba(23, 183, 69, 0.3))",
                borderRadius: "2px",
                display: { xs: "block", md: "none" },
              },
            }}
          >
            <Box
              component="span"
              sx={{ pl: { xs: 3, md: 0 }, display: "block" }}
            >
              {children}
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

Step.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isLast: PropTypes.bool,
};

export default Step;
