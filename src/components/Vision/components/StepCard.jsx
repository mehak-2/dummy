import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const StepCard = ({ number, image, imageAlt, label }) => {
  return (
    <Box
      sx={{
        flex: 1,
        perspective: "1000px",
        "&:hover .card-inner": {
          transform: `rotateY(${number % 2 === 0 ? "-" : ""}5deg)`,
        },
      }}
    >
      <Box
        className="card-inner"
        sx={{
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
          maxWidth: "340px",
          mx: "auto",
          mt: { xs: number > 1 ? 6 : 0, lg: 0 },
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          transform: "translateY(0)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(23, 183, 69, 0.1), rgba(23, 183, 69, 0.05))",
              zIndex: 1,
            },
          }}
        >
          <img
            src={image}
            alt={imageAlt}
            style={{
              width: "100%",
              display: "block",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        </Box>
        <Box
          sx={{
            p: 2.5,
            background: "rgba(0,0,0,0.25)",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              top: "-3px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "40%",
              height: "3px",
              background: "#17B745",
              borderRadius: "0 0 3px 3px",
              opacity: 0.7,
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#B0B3C7",
              fontWeight: 500,
              letterSpacing: "0.5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              "&:before": {
                display: "inline-block",
                mr: 1,
                fontSize: "16px",
              },
            }}
          >
            {label}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

StepCard.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,

  label: PropTypes.string.isRequired,
};

export default StepCard;
