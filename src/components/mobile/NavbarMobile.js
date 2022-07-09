import { MdMenu } from "react-icons/md"
import { useState } from "react"
import { menuItems } from "../../assets/data/menu";

const MenuItem = (props) => {
  const {name, link, icon} = props
  return <a className="menu-item" href={link}>
    <div className="menu-detail text-yellow-300 text-lg px-2 py-3 flex items-center gap-3">
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
        className="navbar-mobile md:hidden w-sceen h-16 bg-sky-500 
        outline outline-5 outline-yellow-500 flex py-4 px-1
        justify-between
        ">
        <div className="logo text-yellow-300 text-2xl font-bold">AdaBrain</div>
        <div 
          className="menu-icon cursor-pointer"
          onClick={() => setIsShow(!isShow)}
        >
            <MdMenu className="text-4xl text-yellow-300" />
        </div>      
      </div>

      <div className={
        `menuMobile absolute outline outline-sky-300 w-screen h-64 bg-sky-700
        ${isShow ? "absolute" : "hidden"}`
        }>

          {RenderMenuItems()}

        </div>
    </>
  );
};

export default NavbarMobile;
