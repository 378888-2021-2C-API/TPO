import React from "react";
import ArticulesSummary from '../Landing/ArticulesSummary';
import ProductSmokingHero from '../Landing/ProductSmokingHero';
import AppFooter from '../AppFooter';
import ProductHero from '../Landing/ProductHero';
import ProductValues from '../Landing/ProductValues';
import ProductHowItWorks from '../Landing/ProductHowItWorks';
import ProductCTA from '../Landing/ProductCTA';
import AppAppBar from '../AppAppBar';

export default function LandingPage() {
  return (
    <div>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      {/* <ArticulesSummary /> */}
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </div>
  );
}
