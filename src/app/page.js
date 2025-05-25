import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingPage/LandingPage";

export default function Home() {
  return (
    <div className="p-4 sm:p-6">
      <LandingPage />
    </div>
  );
}
