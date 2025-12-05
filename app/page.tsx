import HomeHeder from "@/components/hero-section";
import TradeSection from "@/components/trade-section";
import HowToBuy from "@/components/how-to-buy";
import FaqSection from "@/components/faq-section";

export default function Home() {
  return (
    <div className="bg-background">
      <HomeHeder />
      <TradeSection />
      <HowToBuy />
      <FaqSection />
    </div>
  );
}
