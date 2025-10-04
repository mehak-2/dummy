import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
} from "@mui/material";
import { styled } from "@mui/system";

const LogoLink = styled(Link)({
  display: "inline-block",
  "&:hover": {
    opacity: 0.8,
    transition: "opacity 0.3s ease-in-out",
  },
});

const CustomListItem = styled(ListItem)({
  display: "flex",
  alignItems: "flex-start",
  "&::before": {
    content: '"\\2022"',
    color: "#6366F1",
    fontWeight: "bold",
    display: "inline-block",
    width: "1em",
    marginLeft: "-1em",
    marginTop: "0.2em",
  },
});

const Policy = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f8fafc, #e0e7ff)",
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="xl">
        <Paper
          elevation={3}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            p: { xs: 4, sm: 6, md: 8 },
            border: "1px solid #e0e0e0",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
            <LogoLink to="/">
              <img
                src="/assets/foxtoxlogo.png"
                alt="Foxtox Logo"
                style={{ height: "60px", width: "auto" }}
              />
            </LogoLink>
          </Box>

          <Typography
            variant="h3"
            component="h1"
            align="center"
            fontWeight="fontWeightExtraBold"
            color="text.primary"
            sx={{ mb: 2 }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            {/* Last updated: 22/05/2024 */}
          </Typography>

          <Box
            sx={{
              "& > section": { mb: 6 },
              "& > section:last-of-type": { mb: 0 },
            }}
          >
            <section>
              <Typography variant="body1" paragraph lineHeight="1.6">
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                We use Your data to provide and improve the Service. By using
                the Service, You agree to the collection and use of information
                in accordance with this Privacy Policy.
              </Typography>
              <Divider sx={{ my: 4 }} />
            </section>

            <section>
              <Typography
                variant="h5"
                component="h2"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 3 }}
              >
                Interpretation and Definitions
              </Typography>

              <Typography
                variant="h6"
                component="h3"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 2 }}
              >
                Interpretation
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                The words of which the initial letter is capitalised have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or plural.
              </Typography>

              <Typography
                variant="h6"
                component="h3"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 2 }}
              >
                Definitions
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                For the purposes of this Privacy Policy:
              </Typography>
              <List sx={{ pl: 2, "& .MuiListItem-root": { py: 0.5 } }}>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>Account</strong> means a unique account created for
                    You to access our Service or parts of our Service.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>Company</strong> (referred to as either "the
                    Company", "We", "Us" or "Our" in this Agreement) refers to
                    Investzen Ventures Private Limited, registered address -
                    1102, DSR Eden Greens, Carmelaram Station Road, Off.
                    Sarjapur Road, Bengaluru - 560035.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>Cookies</strong> are small files that are placed on
                    Your computer, mobile device or any other device by a
                    website, containing the details of Your browsing history on
                    that website among its many uses.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>Country</strong> refers to: India
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>Device</strong> means any device that can access the
                    Service such as a computer, a cell phone or a digital
                    tablet.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>Personal Data</strong> is any information that
                    relates to an identified or identifiable individual.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>Service</strong> refers to the Website.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>Service Provider</strong> means any natural or legal
                    person who processes the data on behalf of the Company.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>Usage Data</strong> refers to data collected
                    automatically, either generated by the use of the Service or
                    from the Service infrastructure itself.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>Website</strong> refers to Foxtox, accessible from{" "}
                    <MuiLink
                      href="http://foxtox.in/"
                      color="primary"
                      underline="hover"
                    >
                      http://foxtox.in/
                    </MuiLink>
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>You</strong> means the individual accessing or using
                    the Service.
                  </ListItemText>
                </CustomListItem>
              </List>
              <Divider sx={{ my: 4 }} />
            </section>

            <section>
              <Typography
                variant="h5"
                component="h2"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 3 }}
              >
                Collecting and Using Your Personal Data
              </Typography>

              <Typography
                variant="h6"
                component="h3"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 2 }}
              >
                Types of Data Collected
              </Typography>

              <Typography
                variant="h6"
                component="h4"
                fontWeight="fontWeightMedium"
                color="text.primary"
                sx={{ mb: 1.5 }}
              >
                Personal Data
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </Typography>
              <List sx={{ pl: 2, "& .MuiListItem-root": { py: 0.5 } }}>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    Email address
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    First name and last name
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    Phone number
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    Address, State, Province, ZIP/Postal code, City
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    Date of Birth
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    Gender
                  </ListItemText>
                </CustomListItem>
              </List>

              <Typography
                variant="h6"
                component="h4"
                fontWeight="fontWeightMedium" // text-lg font-semibold
                color="text.primary"
                sx={{ mt: 3, mb: 1.5 }}
              >
                Usage Data
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Usage Data is collected automatically when using the Service.
                This may include information such as Your Device's Internet
                Protocol address (e.g., IP address), browser type, browser
                version, the pages of our Service that You visit, the time and
                date of Your visit, the time spent on those pages, unique device
                identifiers and other diagnostic data.
              </Typography>
              <Divider sx={{ my: 4 }} />
            </section>

            <section>
              <Typography
                variant="h5"
                component="h2"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 3 }}
              >
                Tracking Technologies and Cookies
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                We use Cookies and similar tracking technologies to track
                activity on Our Service and store certain information. The
                technologies We use may include:
              </Typography>
              <List sx={{ pl: 2, "& .MuiListItem-root": { py: 0.5 } }}>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>Cookies or Browser Cookies.</strong> A cookie is a
                    small file placed on Your Device.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>Web Beacons.</strong> Certain sections of our
                    Service and our emails may contain small electronic files
                    known as web beacons.
                  </ListItemText>
                </CustomListItem>
              </List>
              <Divider sx={{ my: 4 }} />
            </section>

            <section>
              <Typography
                variant="h5"
                component="h2"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 3 }}
              >
                Use of Your Personal Data
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                The Company may use Personal Data for the following purposes:
              </Typography>
              <List sx={{ pl: 2, "& .MuiListItem-root": { py: 0.5 } }}>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    To provide and maintain our Service
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    To manage Your Account
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    For the performance of a contract
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    To contact You
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    To provide You with news, special offers and general
                    information
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    To manage Your requests
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    For business transfers
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    For other purposes
                  </ListItemText>
                </CustomListItem>
              </List>
              <Divider sx={{ my: 4 }} />
            </section>

            <section>
              <Typography
                variant="h5"
                component="h2"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 3 }}
              >
                Sharing Your Personal Data
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                We may share Your personal information in the following
                situations:
              </Typography>
              <List sx={{ pl: 2, "& .MuiListItem-root": { py: 0.5 } }}>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>With Service Providers:</strong> To monitor and
                    analyze the use of our Service.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>For business transfers:</strong> In connection with
                    any merger, sale of Company assets, or acquisition.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>With Affiliates:</strong> With our parent company
                    and any other subsidiaries.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>With business partners:</strong> To offer You
                    certain products, services or promotions.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    <strong>With Your consent:</strong> We may disclose Your
                    personal information for any other purpose with Your
                    consent.
                  </ListItemText>
                </CustomListItem>
              </List>
              <Divider sx={{ my: 4 }} />
            </section>

            <section>
              <Typography
                variant="h5"
                component="h2"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 3 }}
              >
                Security of Your Personal Data
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While We strive to
                use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
              </Typography>
              <Divider sx={{ my: 4 }} />
            </section>

            <section>
              <Typography
                variant="h5"
                component="h2"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 3 }}
              >
                Children's Privacy
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us.
              </Typography>
              <Divider sx={{ my: 4 }} />
            </section>

            <section>
              <Typography
                variant="h5"
                component="h2"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 3 }}
              >
                Links to Other Websites
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Our Service may contain links to other websites that are not
                operated by Us. We strongly advise You to review the Privacy
                Policy of every site You visit.
              </Typography>
              <Divider sx={{ my: 4 }} />
            </section>

            <section>
              <Typography
                variant="h5"
                component="h2"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 3 }}
              >
                Changes to this Privacy Policy
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date at the top of
                this Privacy Policy.
              </Typography>
              <Divider sx={{ my: 4 }} />
            </section>

            <section>
              <Typography
                variant="h5"
                component="h2"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 3 }}
              >
                Contact Us
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                If you have any questions about this Privacy Policy, You can
                contact us:
              </Typography>
              <List sx={{ pl: 2, "& .MuiListItem-root": { py: 0.5 } }}>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    By email:{" "}
                    <MuiLink
                      href="mailto:foxtox.care@gmail.com"
                      color="primary"
                      underline="hover"
                    >
                      foxtox.care@gmail.com
                    </MuiLink>
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    By phone:{" "}
                    <MuiLink
                      href="tel:+919398319624"
                      color="primary"
                      underline="hover"
                    >
                      +91-9398319624
                    </MuiLink>
                  </ListItemText>
                </CustomListItem>
              </List>
            </section>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Policy;
