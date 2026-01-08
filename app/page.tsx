import { CampaignModels } from "@/components/home/CampaignModels";
import { BookingWidget } from "@/components/BookingWidget";
import { Features } from "@/components/home/Features";
import { FounderCredibility } from "@/components/home/FounderCredibility";
import { EarlyStageBanner } from "@/components/EarlyStageBanner";
import { EmailPopup } from "@/components/EmailPopup";
import { HeroSection } from "@/components/home/Hero";
import HowMovrrWorks from "@/components/home/HowMovrrWorks";
import { MovingHeadline } from "@/components/home/MovingHeadline";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* <Hero /> */}
      <HeroSection />

      {/* Early Stage Banner */}
      <EarlyStageBanner />

      {/* Features Section */}
      <Features />

      {/* Campaign Models Section */}
      <CampaignModels />

      {/* How Movrr Works */}
      <HowMovrrWorks />

      {/* Moving Headline Section */}
      <MovingHeadline />

      <FounderCredibility />

      {/* Booking Widget */}
      <BookingWidget />

      {/* Email Popup */}
      <EmailPopup />
    </div>
  );
}
