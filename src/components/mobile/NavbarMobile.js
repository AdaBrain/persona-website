import { MdMenu } from "react-icons/md"
import { useState } from "react"
import { menuItems } from "../../assets/data/menu";

const MenuItem = (props) => {
  const {name, link, icon} = props
  return <a className="menu-item" href={link}>
    <div className="menu-detail text-[#F2CF8D] text-lg px-2 py-3 flex items-center gap-3">
      {icon}{name}
    </div>
  </a>
}

const RenderMenuItems = () => {
  return menuItems.map((item, idx) => <MenuItem name={item.name} link={item.link} icon={item.icon} key={idx} />)
}

const NavbarMobile = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <div 
        className="navbar-mobile md:hidden w-sceen h-16 bg-[#292759]
        outline outline-5 outline-yellow-500 flex py-4 px-1
        justify-between
        ">
        <div className="logo text-[#F2CF8D] text-xl font-bold">AdaBrain</div>
        <div 
          className="menu-icon cursor-pointer"
          onClick={() => setIsShow(!isShow)}
        >
            <MdMenu className="text-2xl text-[#F2CF8D]" />
        </div>      
      </div>

      <div className={
        `menuMobile absolute outline outline-[#F2CF8D] w-screen h-64 bg-[#292759]
        ${isShow ? "absolute" : "hidden"}`
        }>

          {RenderMenuItems()}

        </div>
    </>
  );
};

export default NavbarMobile;
