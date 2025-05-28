import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingPage/LandingPage";
import Modal from "./components/modal/Modal";

export default function Home() {
  return (
    <div className="p-4 sm:p-6">
      <LandingPage />
      {/* <Modal /> */}
    </div>
  );
}
