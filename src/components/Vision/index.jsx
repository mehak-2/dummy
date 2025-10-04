import { Box } from "@mui/material";
import EtheriumImage from "../../../public/assets/EtheriumImage.png";
import GoalSection from "./components/GoalSection";
import OfferingsSection from "./components/OfferingsSection";

const Vision = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        mb: { xs: 2, md: 8 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          width: "140px",
          height: "140px",
        }}
      >
        <img
          src={EtheriumImage}
          alt="Ethereum"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <GoalSection />
      <OfferingsSection />
    </Box>
  );
};

export default Vision;
