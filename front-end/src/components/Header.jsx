import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  TextInput,
} from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname; //useLocation() ley obj dincha rah obj return garcha rah obj.pathname gareko ho

  return (
    <Navbar className="border-b-2 ">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white border border-zinc-900">
          Ashish
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch} // Pass the component, not JSX
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="red" pill>
        <AiOutlineSearch></AiOutlineSearch>
      </Button>
      {/* large screen and above mah hidden huncha */}
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline border border-black"
          color="grey"
          pill
        >
          {/* sm bhanda thulo screen haruma inline ley dekhaucha*/}
          <FaMoon />
        </Button>
        <Link to={"/sign-in"}>
          <Button to={"/"} gradientDuoTone="purpleToBlue" outline>
            SignIn
          </Button>
        </Link>
        <Navbar.Toggle></Navbar.Toggle>
      </div>
      {/* <Navbar.Collapse>
        <Navbar.Link to="./" active={path==='./'}>Home</Navbar.Link>
        <Navbar.Link to="./about" active={path==='./about'}>About</Navbar.Link>
        <Navbar.Link to="./projects" active={path==='./projects'} >Projects</Navbar.Link>
      </Navbar.Collapse> */}
      {/* <NavbarCollapse>
        <NavbarLink to="./" active={path==='./'}>Home</NavbarLink>
        <NavbarLink to="./about" active={path==='./about'}>About</NavbarLink>
        <NavbarLink to="./projects" active={path==='./projects'} >Projects</NavbarLink>
      </NavbarCollapse> */}
      <NavbarCollapse>
        <NavbarLink active={path === '/'} as={'div'} >
          <Link to='/' className="block lg:text-lg" >Home</Link>
        </NavbarLink>
        <NavbarLink active={path === '/about'} className=" block" as={'div'}>
          <Link className=" block lg:text-lg" to='/about'>About</Link>
        </NavbarLink>
        <NavbarLink active={path === "/projects"} as={'div'}>
          <Link to='/projects' className="block lg:text-lg">Projects</Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;




