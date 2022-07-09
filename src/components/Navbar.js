import { menuItems } from "../assets/data/menu"

const NavItem = (props) => {
    const {name, link} = props

    return <a className="navItem decoration-none" href={link}>
        <div className="menuName text-yellow-300 text-xl font-bold hover:text-white hover:underline hover:animate-bounce">{name}</div>
    </a>
}

const RenderNavItems = () => {
    return <div className="nav-items-container flex gap-3 justify-center items-center py-5">
        { menuItems.map((item, idx) => <NavItem name={item.name} link={item.link} key={idx} />) }
    </div>    
}

const Navbar = () => {
    return <>
        <div className="navbar w-screen h-16 outline outline-4 bg-sky-500 outline-yellow-500 hidden md:block">
            {RenderNavItems()}
        </div>
    </>
}

export default Navbar