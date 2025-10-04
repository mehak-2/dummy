import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Twitter, Facebook, Instagram } from "@mui/icons-material";
import {
  Group,
  Phone,
  Send,
  Copyright,
} from "../../public/assets/VectorImages";

const StyledFooter = styled(Box)({
  background: "linear-gradient(180deg, #149542 0%, #043B18 100%)",
  color: "#FFFFFF",
  padding: "100px 0 20px 0",
  position: "relative",
  fontFamily: '"Josefin Sans", sans-serif',
  "& *": {
    fontFamily: '"Josefin Sans", sans-serif !important',
  },
  "& a": {
    color: "#FFFFFF",
    textDecoration: "none",
    "&:hover": {
      color: "#FFD700",
    },
  },
  "& p, & h1, & h2, & h3, & h4, & h5, & h6, & span, & div, & input, & textarea, & button, & label":
    {
      fontFamily: '"Josefin Sans", sans-serif !important',
    },
  "& .MuiTypography-root, & .MuiButton-root, & .MuiInputBase-input, & .MuiFormLabel-root":
    {
      fontFamily: '"Josefin Sans", sans-serif !important',
    },
});

const TopContactCard = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#FFFFFF",
        borderRadius: "15px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        padding: { xs: "16px", sm: "20px 30px" },
        display: { xs: "block", sm: "flex" },
        justifyContent: "space-around",
        alignItems: "center",
        width: { xs: "90%", sm: "80%" },
        maxWidth: "900px",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          mb: { xs: 2, sm: 0 },
          pb: { xs: 2, sm: 0 },
          borderBottom: { xs: "1px solid #6C6C72", sm: "none" },
          width: { xs: "100%", sm: "auto" },
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#1B7DBE",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: { xs: "0 auto 12px", sm: "0 15px 0 0" },
          }}
        >
          <Group />
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "#006837",
              fontWeight: 600,
              fontSize: "1.1rem",
              wordBreak: "break-word",
            }}
          >
            foxtox.care@gmail.com
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 1,
              color: "#666",
            }}
          >
            Available: 8:00 am - 6:00 pm (Mon - Fri)
          </Typography>
        </Box>
      </Box>

      <Divider
        orientation="vertical"
        flexItem
        sx={{
          mx: 3,
          display: { xs: "none", sm: "block" },
          height: "48px",
          backgroundColor: "#6C6C72",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          width: { xs: "100%", sm: "auto" },
          textAlign: "center",
          pt: { xs: 2, sm: 0 },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#1B7DBE",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: { xs: "0 auto 12px", sm: "0 15px 0 0" },
          }}
        >
          <Phone sx={{ color: "#fff", fontSize: 24 }} />
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: "#006837",
            fontWeight: 600,
            fontSize: "1.1rem",
          }}
        >
          +91-9398319624
        </Typography>
      </Box>
    </Box>
  );
};

const ContactItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  "& .MuiSvgIcon-root": {
    fontSize: "30px",
    marginRight: "15px",
    color: "#1976D2",
  },
  "& p": {
    color: "#333333",
    fontSize: "16px",
    fontWeight: "600",
  },
});

const Divider = styled(Box)({
  width: "1px",
  backgroundColor: "#6C6C72",
  height: "60px",
  "@media (max-width: 600px)": {
    display: "none",
  },
});

const FooterTitle = styled(Typography)({
  fontSize: "25px",
  fontWeight: "bold",
  fontFamily: "Josefin Sans",
  marginBottom: "20px",
  color: "#FFFFFF",
});

const FooterLink = styled(Link)({
  display: "block",
  marginBottom: "10px",
  fontFamily: "Josefin Sans",
  fontSize: "16px",
  color: "#FFFFFF",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#FFD700",
  },
});

const SocialIcon = styled(IconButton)({
  color: "#FFFFFF",
  marginRight: "10px",
  width: "35px",
  height: "35px",
  "& .MuiSvgIcon-root": {
    fontSize: "18px",
  },
  "&:hover": {
    color: "#FFD700",
    backgroundColor: "transparent",
  },
});

const NewsletterInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    paddingRight: "5px",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiInputBase-input": {
    padding: "10px 15px",
  },
});

const SubscribeButton = styled(Button)({
  borderRadius: "4px",
  minWidth: "40px",
  width: "40px",
  height: "40px",
  backgroundColor: "#1976D2",
  "&:hover": {
    backgroundColor: "#1565C0",
  },
});

const Footer = () => {
  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <TopContactCard>
          <ContactItem>
            <Box
              sx={{
                backgroundColor: "#1B7DBE",
                borderRadius: "50%",
                padding: "8px",
                display: "inline-flex",
                mr: 2,
              }}
            >
              <Group />
            </Box>
            <Box>
              <Typography variant="body1">foxtox.care@gmail.com</Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 1,
                  color: "black",
                }}
              >
                Available: 8:00 am - 6:00 pm (Mon - Fri)
              </Typography>
            </Box>
          </ContactItem>
          <Divider />
          <ContactItem>
            <Box
              sx={{
                backgroundColor: "#1B7DBE",
                borderRadius: "50%",
                padding: "8px",
                display: "inline-flex",
              }}
            >
              <Phone />
            </Box>
            <Typography variant="body1" sx={{ ml: 2 }}>
              +91-9398319624
            </Typography>
          </ContactItem>
        </TopContactCard>

        <Grid container spacing={4} sx={{ paddingTop: "80px" }}>
          <Grid item xs={12} md={4}>
            <Box mb={3}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  marginBottom: "15px",
                  fontFamily: "Josefin Sans",
                }}
              >
                <img
                  src="../../public/assets/foxtoxlogo.png"
                  style={{
                    height: "50px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  mb: 3,
                  maxWidth: "500px",
                  lineHeight: "1.8",
                  fontSize: "15px",
                  fontFamily: "Josefin Sans",
                }}
              >
                Disclaimer: Investment in securities are subject to market
                risks. Read all the documents and product details carefully
                before investing. Foxtox platform facilitates offering of
                trading advisory by SEBI registered entities. Investing or
                trading in the stock market involves significant risk, and
                studies indicate that most traders incur losses. Foxtox does not
                provide any recommendations or investment advice, directly or
                indirectly, to our users. We do not guarantee any outcomes, and
                results will vary for each individual. Past performance is not
                indicative of future results. Always conduct your own research
                and consult with a professional before making any financial
                decisions.
              </Typography>
              <Box>
                {/* <SocialIcon aria-label="Facebook">
                  <Facebook />
                </SocialIcon>
                <SocialIcon aria-label="Instagram">
                  <Instagram />
                </SocialIcon>
                <SocialIcon aria-label="Twitter">
                  <Twitter />
                </SocialIcon> */}
              </Box>
            </Box>
          </Grid>

          <Grid item container xs={12} md={8} spacing={4}>
            <Grid item xs={6} sm={4}>
              <FooterTitle>QUICK LINK</FooterTitle>
              {/* <FooterLink href="#about">Our Advisors</FooterLink>
              <FooterLink href="#features">About Us</FooterLink> */}
              {/* <FooterLink href="#screenshot">FAQs</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink> */}
              <FooterLink
                component={Link}
                to="/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </FooterLink>
              <FooterLink
                component={Link}
                to="/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </FooterLink>
              <FooterLink
                component={Link}
                to="/disclosure"
                target="_blank"
                rel="noopener noreferrer"
              >
                Disclosure
              </FooterLink>
            </Grid>
            <Grid item xs={12} sm={8}>
              <FooterTitle>NEWS LETTER</FooterTitle>
              <Typography
                variant="body2"
                sx={{ mb: 2, lineHeight: 1.8 }}
                fontFamily={"Josefin Sans"}
                width={{ xs: "100%", md: "80%" }}
                fontSize={{ xs: "14px", md: "16px" }}
              >
                Subscribe our newsletter to get our latest update & news
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <NewsletterInput
                  placeholder="Your email address"
                  fontFamily="Josefin Sans"
                  color="#6C6C72"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SubscribeButton>
                          <Send sx={{ color: "#FFFFFF" }} />
                        </SubscribeButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Box mt={6} pt={3} borderTop="1px solid rgba(255, 255, 255, 0.3)">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontFamily={"Josefin Sans"}
          >
            <Copyright style={{ marginRight: "18px" }} />
            <Typography variant="body2" component="span">
              {new Date().getFullYear()} Investzen Ventures Pvt. Ltd. All Right
              Reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
