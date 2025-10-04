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

const Terms = () => {
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
                src="/src/assets/foxtoxlogo.png"
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
            Terms and Conditions
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
              <Typography
                variant="h5"
                component="h2"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 3 }}
              >
                Introduction
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                These Terms of Use ("Terms and Conditions") mandate the terms on
                which the users ("You" or "Your" or "User") access and register
                on the website{" "}
                <MuiLink
                  href="http://foxtox.in/"
                  color="primary"
                  underline="hover"
                >
                  http://foxtox.in/
                </MuiLink>{" "}
                and/or mobile application 'Foxtox' referred to as, "the
                Platform" owned and operated by Investzen Ventures Private
                Limited (Investzen). Investzen shall also allow its associates,
                group and subsidiary companies, together referred to as
                "Company" or "We" or "Us" to use the Platform as per their
                requirements.
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Please read the Terms of Use and Privacy Policy carefully before
                registering on the Platform or accessing any material,
                information through the Platform. The Company retains an
                unconditional right to modify or amend this Terms of Use without
                any requirement to notify You of the same. You can determine
                when this Terms of Use was last modified by referring to the
                "Last Updated" legend above. It shall be Your responsibility to
                check these Terms of Use periodically for changes. Accordingly,
                please continue to review the Terms whenever accessing or using
                the Platform. Your use of the Platform as defined above, after
                the posting of modifications to the Terms will constitute your
                acceptance of the Terms, as modified. Your use of the Platform
                on a continuous basis shall signify Your confirmation to the
                changes and the agreement to be legally bound by the same.
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
                Platform Services
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                You acknowledge that the Platform allows You to avail the
                services directly from the Company including their products and
                services and facilitate communication with them for such
                services, and other related information. The Company hereby
                grants You, a limited, non-exclusive, non-transferable, royalty
                free license to use the Platform for the purposes of availing
                the services from the Company, collectively hereinafter referred
                to as Platform Services.
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                You agree and give Your consent that We may share Your Personal
                Information with our associates and/or statutory/regulatory
                authorities to comply with regulatory requirements or
                restrictions applicable to Us.
              </Typography>
              <Divider sx={{ my: 4 }} />
            </section>

            <section>
              <Typography
                variant="h6"
                component="h3"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 2 }}
              >
                Investzen Ventures Private Limited (Investzen):
              </Typography>
              <List
                sx={{
                  pl: 2,
                  "& .MuiListItem-root": { py: 0.5, alignItems: "flex-start" },
                }}
              >
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    It is hereby clarified that the Company does not provide
                    and/or influence/intervene direct securities advisory in any
                    form, and it is merely providing a digital marketplace
                    platform, Foxtox to its users, to facilitate equity
                    investment / derivatives trading advisory services, which in
                    turn is provided by the licensed SEBI registered Research
                    Analysts / Investment Advisors (hereon collectively referred
                    as "The Advisors") registered on the Platform, as it is.
                    Hence Investzen does not possess any license from SEBI as of
                    date.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    You acknowledge that any text/video form content shared by
                    the Company and/or Foxtox to its users, other than
                    communication of the trading/investment advice related
                    information published by The Advisors, will only be for
                    educational purposes.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    No content shared by the Company and/or Foxtox to users
                    shall mislead / promise / guarantee any fixed returns from
                    trading/investment activities, and shall be solely for
                    educational purposes.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    Foxtox will only act as the channel to publish the
                    trade/investment advice/recommendations given by The
                    Advisors on the Platform as it is, which shall be the source
                    of truth of actual advice for the users at any given time.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    Foxtox shall timely communicate/notify/alert its users
                    regarding the details of the trade recommendations
                    explicitly opted by the user to be notified about on the
                    Platform, through WhatsApp Direct Messages, in a convenient
                    format/language which is easy to understand for the users,
                    which however shall be Your sole responsibility to verify
                    from the actual trade recommendation/advice details
                    published by the Advisor on the Platform, and that the
                    Company shall not be held responsible for any
                    misinterpretation of the communicated message via WhatsApp.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    Trading in Derivative instruments / investments in stocks or
                    any other financial products are subject to market risks
                    (including possible loss of the principal amount invested),
                    and You shall read all investment/scheme-related documents
                    carefully, and/or gather independent financial advice and
                    make Your own assessment before making any
                    trading/investment/disinvestment decision.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    You shall be solely responsible for all the
                    trading/investment orders executed by You on Your Broker
                    Platform after carefully validating the trade/investment
                    advice details as published by the Advisor on the Platform.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    In case of any dissatisfaction with the Platform Services,
                    You shall first file a formal complaint with the customer
                    service of the Company and/or Investzen, as may be
                    applicable, prior to pursuing any other recourse. The
                    complaints can be lodged at{" "}
                    <MuiLink
                      href="mailto:foxtox.care@gmail.com"
                      color="primary"
                      underline="hover"
                    >
                      foxtox.care@gmail.com
                    </MuiLink>{" "}
                    or
                    <MuiLink
                      href="mailto:foxtox.grievance@gmail.com"
                      color="primary"
                      underline="hover"
                    >
                      {" "}
                      foxtox.grievance@gmail.com
                    </MuiLink>{" "}
                    and upon lodging a complaint, You agree to provide complete
                    support to the customer service team with such reasonable
                    information as may be sought by them from You along with
                    necessary documents, emails, screenshots as available with
                    You forming part of the said complaint. The decision of the
                    Company and/or Investzen, as may be applicable, on the
                    complaints shall be final and You agree to be bound by the
                    same.
                  </ListItemText>
                </CustomListItem>
              </List>
              <Divider sx={{ my: 4 }} />
            </section>

            <section>
              <Typography
                variant="h6"
                component="h3"
                fontWeight="fontWeightBold"
                color="text.primary"
                sx={{ mb: 2 }}
              >
                The Advisors:
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                It is hereby clarified that The Company has separate agreements
                with each Advisor registered and listed on the Platform, with
                detailed terms of their contract which allows them to provide
                advisory services through the Platform. The Company shall
                intimate its users in advance in case of any changes wrt
                validity of advisor's contract which affects the concerned
                users.
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                You understand that:
              </Typography>
              <List
                sx={{
                  pl: 2,
                  "& .MuiListItem-root": { py: 0.5, alignItems: "flex-start" },
                }}
              >
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    The Advisors possess an advisory license from Securities and
                    Exchange Board of India (SEBI) which permits them to provide
                    trade/investment advice to customers under certain
                    limitations
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    The Advisor shall publish trade recommendations on the
                    Platform whenever they find good trading/investment
                    opportunities based on a certain analysis and their
                    understanding of market conditions, but is not bound in any
                    way to mandatorily publish a fixed/minimum number of trade
                    recommendations or at a fixed/maximum interval period.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    The Advisor is expected to always publish trade/investment
                    recommendation/advice keeping the best interests of its
                    subscribers in mind and with good risk management, which
                    however does not guarantee/promise making any profits and/or
                    fixed returns.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    The Advisor is not liable for any losses incurred by the
                    customer, notional or otherwise while placing trade orders
                    on their respective broker platform.
                  </ListItemText>
                </CustomListItem>
                <CustomListItem disableGutters>
                  <ListItemText primaryTypographyProps={{ lineHeight: "1.6" }}>
                    The Advisor has made available a Disclosure Document
                    separately on their profile page within the Platform which
                    can be accessed by users at any point to understand/check
                    further details about the Advisor and the advisory services
                    provided by them.
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
                Use of the Platform
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Subject to compliance with the Terms of Use, the Company hereby
                grants You a non-exclusive, limited privilege to access and use
                this Platform. You agree to use the Platform only: (a) for
                purposes that are permitted by the Terms of Use; and (b) in
                accordance with any applicable law, regulation or generally
                accepted practices or guidelines.
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                You agree that You shall not copy, reproduce, sell,
                redistribute, publish, enter into a database, display, perform,
                modify, alter, transmit, license, create derivatives from,
                transfer or in any way exploit any part of any information,
                content, materials, services available from or through the
                Platform, except that You may download the Platform for Your own
                personal, internal use and non-commercial use.
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                You agree that You will not use the Platform in any manner or
                engage in any activity that may damage, disable or impair or
                adversely affect the use of the Platform or interfere with any
                other users' use, legal rights, or enjoyment of the Platform.
                Further, You agree not to remove any text, copyright or other
                proprietary notices contained in the content downloaded from the
                Platform.
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
                SEBI Caution
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Investment in the securities market (including mutual fund
                investments) are subject to market risks, please read all
                investments, offer and scheme-related documents carefully,
                before investing.
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
                Report Abuse
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                In the event You come across any abuse or violation of these
                Terms of Use or if You become aware of any objectionable content
                on the Platform, please report the same to the following e-mail
                id:{" "}
                <MuiLink
                  href="mailto:foxtox.care@gmail.com"
                  color="primary"
                  underline="hover"
                >
                  foxtox.care@gmail.com
                </MuiLink>{" "}
                or
                <MuiLink
                  href="mailto:foxtox.grievance@gmail.com"
                  color="primary"
                  underline="hover"
                >
                  {" "}
                  foxtox.grievance@gmail.com
                </MuiLink>
                .
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
                Governing Laws
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                The Terms of Use shall be governed and construed in accordance
                with the laws of India without reference to conflict of laws
                principles. All disputes arising in relation to shall be subject
                to the exclusive jurisdiction of court at Bangalore.
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
                If you have any questions about these Terms and Conditions,
                please contact us at{" "}
                <MuiLink
                  href="mailto:foxtox.care@gmail.com"
                  color="primary"
                  underline="hover"
                >
                  foxtox.care@gmail.com
                </MuiLink>
              </Typography>
            </section>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Terms;
