import FirstSection from "../components/FirstSection";
import NavbarMobile from "../components/mobile/NavbarMobile";
import Navbar from "../components/Navbar";

const LayoutDefault = () => {
  return (
    <div className="layout-default mb-4">
      <Navbar />
      <NavbarMobile />

      {/* FirstSection */}
      <FirstSection />
      
      </div>
      
  );
};

export default LayoutDefault;
