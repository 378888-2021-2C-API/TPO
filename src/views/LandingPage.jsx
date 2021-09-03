import React from "react";
import ProductCategories from './ProductCategories';
import ProductSmokingHero from './ProductSmokingHero';
import AppFooter from './AppFooter';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import ProductCTA from './ProductCTA';
import AppAppBar from './AppAppBar';

export default function LandingPage() {
  return (
    <div>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </div>
  );
}
