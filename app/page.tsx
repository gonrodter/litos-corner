import Hero from "@/components/home/Hero";
import BadgeRow from "@/components/home/BadgeRow";
import Identity from "@/components/home/Identity";
import MenuHighlights from "@/components/home/MenuHighlights";
import OrderOnline from "@/components/home/OrderOnline";
import HighwayBreak from "@/components/home/HighwayBreak";
import Ambience from "@/components/home/Ambience";
import Locations from "@/components/home/Locations";
import Reviews from "@/components/home/Reviews";
import Social from "@/components/home/Social";
import FinalCta from "@/components/home/FinalCta";
import Wave from "@/components/ui/Wave";
import { locations } from "@/lib/content";
import { JsonLdScript, restaurantJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={locations.map(restaurantJsonLd)} />
      <Hero />
      <BadgeRow />
      <div className="pattern-diamond"><Wave fill="#f3daa2" /></div>
      <Identity />
      <div className="bg-butter"><Wave fill="#68171c" /></div>
      <MenuHighlights />
      <div className="pattern-diamond"><Wave fill="#f3daa2" /></div>
      <OrderOnline />
      <HighwayBreak />
      <Ambience />
      <div className="bg-night"><Wave fill="#f3daa2" /></div>
      <Locations />
      <Reviews />
      <div className="bg-butter"><Wave fill="#68171c" /></div>
      <Social />
      <div className="pattern-diamond"><Wave fill="#e28c22" /></div>
      <FinalCta />
      <div className="bg-orange"><Wave fill="#68171c" /></div>
    </>
  );
}
