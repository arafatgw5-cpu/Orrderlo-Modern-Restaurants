"use client";
// import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { TrustedBy } from "@/components/landing/trusted-by";
// import { ProductsServices } from "@/components/landing/products-services";
import ProductsServices from "@/components/landing/products-services";
import { Features } from "@/components/landing/features";
// import { HowItWorks } from "@/components/landing/how-it-works";
import { WhyChoose } from "@/components/landing/why-choose";
import { DashboardPreview } from "@/components/landing/dashboard-preview";
import { Statistics } from "@/components/landing/statistics";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
// import { Footer } from "@/components/landing/footer";
// import Restaurant from "@/components/shared/restaurant";
// import AlloLanding from "@/components/shared/allO-Landing";
import OrderloLanding from "@/components/shared/OrderloLanding";
import AboutUsPage from "./about-us/page";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* <Navbar /> */}

      <main className="flex-1">
        <Hero />
        
        {/* <OrderloLanding /> */}
        {/* <AlloLanding /> */}
        <TrustedBy />
        <ProductsServices />
        <Features />
        {/* <Restaurant /> */}
        <AboutUsPage />
        <WhyChoose />
        <DashboardPreview />
        <Statistics />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
