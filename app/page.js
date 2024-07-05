import About from "../components/home/About";
import SponsorAChild from "../components/home/SponsorAChild";
import KinWings from "../components/home/KinWings";
import KinAchive from "../components/home/KinAchive";
import Achievement from "../components/home/Achievement";
import BecomeAVolunteer from "../components/home/BecomeAVolunteer";
import TouchWithUs from "../components/home/TouchWithUs";
import Slider from "../components/home/slider/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <SponsorAChild />
      <KinWings />
      <KinAchive />
      <Achievement />
      <BecomeAVolunteer />
      <TouchWithUs />
    </>
  );
}
