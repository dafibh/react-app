import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";

// MD React examples
import PageLayout from "components/MDComponents/LayoutContainers/PageLayout";

// Pricing page components
import Header from "layouts/MD/pages/pricing-page/components/Header";
import Footer from "layouts/MD/pages/pricing-page/components/Footer";
import PricingCards from "layouts/MD/pages/pricing-page/components/PricingCards";
import TrustedBrands from "layouts/MD/pages/pricing-page/components/TrustedBrands";
import Faq from "layouts/MD/pages/pricing-page/components/Faq";

function PricingPage() {
  const [tabValue, setTabValue] = useState(0);
  const [prices, setPrices] = useState(["59", "89", "99"]);

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);

    if (event.currentTarget.id === "annual") {
      setPrices(["119", "159", "399"]);
    } else {
      setPrices(["59", "89", "99"]);
    }
  };

  return (
    <PageLayout>
      <Header tabValue={tabValue} tabHandler={handleSetTabValue}>
        <Container>
          <PricingCards prices={prices} />
          <TrustedBrands />
          <Faq />
        </Container>
      </Header>
      <Footer />
    </PageLayout>
  );
}

export default PricingPage;
