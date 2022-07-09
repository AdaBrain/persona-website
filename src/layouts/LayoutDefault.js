import NavbarMobile from "../components/mobile/NavbarMobile";
import Navbar from "../components/Navbar";

const LayoutDefault = () => {
  return (
    <div className="layout-default mb-4">
      <Navbar />
      <NavbarMobile />

      {/* <div className="first-section w-screen h-96 mt-4 ">Image cover</div>
      
      <div className="second-section w-screen h-96 mt-4 ">Education</div> */}
      
      </div>
      
  );
};

export default LayoutDefault;
