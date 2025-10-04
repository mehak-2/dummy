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

const Disclosure = () => {
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
            sx={{ mb: 6 }}
          >
            Disclosure
          </Typography>

          <Box
            sx={{
              "& > section": { mb: 6 },
              "& > section:last-of-type": { mb: 0 },
            }}
          >
            <section>
              <Typography variant="body1" paragraph lineHeight="1.6">
                The site, including any content or information contained with it
                or any site-related service, or any product or service licensed
                or purchased through the site, is provided on an "as is" basis
                and without warranties of any kind, either express or implied,
                including, but not limited to warranties of title or
                non-infringement or implied or warranties of merchantability and
                fitness for a particular purpose, other than those warranties
                which are implied by and incapable of exclusion, restriction or
                modification under the laws applicable to this agreement. You
                acknowledge that any warranty that is provided in connection
                with any of the products or services described herein is
                provided solely by the owner, advertiser, manufacturer or
                supplier of that product and/or service, and not by Investzen
                Ventures Private Limited.
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Investzen Ventures Private Limited does not warrant that your
                access to the site and/or related services will be uninterrupted
                or error-free, that defects will be corrected, or that this site
                or the server that makes it available are free of viruses or
                other harmful components. Access to and use of this site and the
                information is at your risk and Investzen Ventures Private
                Limited does not undertake any accountability for any
                irregularities, viruses or damage to any computer that results
                from accessing, availing or downloading of any information from
                this site.
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Investzen Ventures Private Limited does not warrant or make any
                representations regarding the use or the results of the use of
                any product and/or service purchased in terms of its
                compatibility, correctness, accuracy, reliability or otherwise.
                You assume total responsibility and risk for your use of this
                site and site-related services. You agree that Investzen
                Ventures Private Limited and its directors, officers, employees,
                agents, sponsors, consultants or other representatives ('service
                providers') shall not be responsible or liable for any direct,
                indirect, incidental, consequential, special, exemplary,
                punitive or any other damages (including without limitation loss
                of profits, loss or corruption of data, loss of goodwill, work
                stoppage, computer failure or malfunction or interruption of
                business) under any contract, negligence, strict liability or
                other theory arising out of or relating in any way with the use
                of the site or in reliance of the information available on the
                site, site-related services, or any products or services offered
                or sold or displayed on the Investzen Ventures Private Limited
                site.
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                If the foregoing limitation is held to be unenforceable, the
                maximum liability of Investzen Ventures Private Limited and its
                service providers to you shall not exceed the amount of fee paid
                by you for the products or services that you have ordered
                through the site. Some jurisdictions do not allow the limitation
                or exclusion of liability for certain damages, so the above
                limitations and exclusions may not apply to you to the extent
                such jurisdiction's law is applicable to this agreement.
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                The price and availability of products and services offered on
                the site are subject to change without prior notice. To the
                extent we provide information on the availability of products or
                services, you should not rely on such information. Investzen
                Ventures Private Limited will not be liable for any lack of
                availability of products and services you may order through the
                site.
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
                Title Transfer
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Investzen Ventures Private Limited retains title to the items
                purchased until the said purchaser pays for items at which time
                the title passes to the purchaser.
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
                Purchase for Export
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Although the Site is accessible worldwide, not all products or
                services discussed or referenced in or on the Site are available
                to all persons or in all geographic locations or jurisdictions.
                Investzen Ventures Private Limited reserves the right to limit
                the availability of the Site and/or the provision of any product
                or service to any person, geographic area or jurisdiction it so
                desires, in its sole discretion, and to limit the quantities of
                any such product or service that it provides. Any offer for any
                product or service made in the Site is void where prohibited.
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                This site is controlled and operated by Investzen Ventures
                Private Limited from its offices within the state of Karnataka.
                Those who choose to access this Site from other locations do so
                on their own initiative and are responsible for compliance with
                laws governing the export of products and services and other
                applicable laws, including local laws, if and to the extent
                local laws are applicable. If you purchase items for the purpose
                of export, you must obtain appropriate export documentation, and
                that responsibility is solely yours.
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
                Governing Law
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Transactions between you and Investzen Ventures Private Limited
                shall be governed by and construed in accordance with the laws
                of India, without regard to the laws regarding conflicts of law.
                Any litigation regarding this agreement or any transaction
                between customer and{" "}
                <MuiLink
                  href="http://foxtox.in/"
                  color="primary"
                  underline="hover"
                >
                  http://foxtox.in/
                </MuiLink>{" "}
                or any action at law or in equity arising out of or relating to
                this agreement or transaction shall be filed only in the
                Competent Courts of Karnataka and the customer hereby agrees,
                consents and submits to the jurisdiction of such courts for the
                purpose of litigating any such action.
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
                Stocks Disclaimer
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Investment in the securities market are subject to market risks,
                read all the related documents carefully before investing.
                Please read the Risk Disclosure Documents carefully before
                investing in Equity Shares, Derivatives, Mutual fund, and/or
                other instruments traded on the Stock Exchanges. As investments
                are subject to market risks and price fluctuation risk, there is
                no assurance or guarantee that the investment objectives shall
                be achieved. Investzen Ventures Private Limited does not
                guarantee any assured returns on any investments. Past
                performance of securities/ instruments is not indicative of
                their future performance.
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Investzen Ventures Private Limited is a registered company under
                Ministry of Corporate Affairs, Government of India having CIN:
                U66190KA2023PTC177535, and Registered office at 1102, DSR Eden
                Greens, Carmelaram Station Road, Off. Sarjapur Road, Bangalore -
                560035. For any grievances, please write to{" "}
                <MuiLink
                  href="mailto:foxtox.grievance@gmail.com"
                  color="primary"
                  underline="hover"
                >
                  foxtox.grievance@gmail.com
                </MuiLink>
                .
              </Typography>
              <Typography variant="body1" paragraph lineHeight="1.6">
                Please ensure you carefully read the Risk Disclosure Document as
                prescribed by SEBI.
              </Typography>
            </section>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Disclosure;
