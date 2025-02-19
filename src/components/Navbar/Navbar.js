
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EventIcon from "@mui/icons-material/Event";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import IdealabLogo from "../../assets/IdealabLogo.png";
import MECLogo from "../../assets/MECLogo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      href: "#home"
    },
    {
      text: "About",
      icon: <InfoIcon />,
      href: "#about"
    },
    {
      text: "Events",
      icon: <EventIcon />,
      href: "#events"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      href: "#contact"
    }
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={IdealabLogo} alt="IDEALab Logo" className="nav-logo" />
        <h1>IDEALab</h1>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <a key={item.text} href={item.href}>{item.text}</a>
        ))}
        <button className="primary-button">Book Facility</button>
        <img src={MECLogo} alt="MEC Logo" className="nav-logo" />
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton href={item.href}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;