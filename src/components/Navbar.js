import { menuItems } from "../assets/data/menu"

const NavItem = (props) => {
    const {name, link} = props

    return <a className="navItem decoration-none" href={link}>
        <div className="menuName text-[#F2CF8D] text-sm font-bold hover:text-white hover:underline hover:animate-bounce">{name}</div>
    </a>
}

const RenderNavItems = () => {
    return <div className="nav-items-container flex gap-7 justify-center items-center py-7">
        { menuItems.map((item, idx) => <NavItem name={item.name} link={item.link} key={idx} />) }
    </div>    
}

const Navbar = () => {
    return <>
        <div className="navbar mb-5 w-screen h-16 outline outline-4 bg-[#292759] outline-[#F2CF8D] hidden md:block">
            {RenderNavItems()}
        </div>
    </>
}

export default Navbar