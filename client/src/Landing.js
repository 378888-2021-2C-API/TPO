import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import LandingCategories from "./modules/views/LandingCategories";
import LandingSmokingHero from "./modules/views/LandingSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import LandingHero from "./modules/views/LandingHero";
import LandingValues from "./modules/views/LandingValues";
import LandingHowItWorks from "./modules/views/LandingHowItWorks";
import LandingCTA from "./modules/views/LandingCTA";
import AppAppBar from "./modules/views/AppAppBar";

function Landing() {
  return (
    <React.Fragment>
      <AppAppBar />
      <LandingHero />
      <LandingValues />
      <LandingCategories />
      <LandingHowItWorks />
      <LandingCTA />
      <LandingSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Landing);
