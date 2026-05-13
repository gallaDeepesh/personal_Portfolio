import "./Navbar.css";
import { Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {

  const [open,setOpen] = useState(false);

  return (

    <nav className="navbar">

      <h2>Deepesh</h2>

      <div className={`nav-links ${open ? "active" : ""}`}>

        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

      </div>

      <div className="nav-right">

        <ThemeToggle />

        <Menu
          className="menu"
          onClick={()=>setOpen(!open)}
        />

      </div>

    </nav>
  );
}

export default Navbar;