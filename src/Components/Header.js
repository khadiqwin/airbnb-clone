import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt="logo"
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchOutlinedIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageOutlinedIcon />
        <ExpandMoreOutlinedIcon />
        <PersonOutlineOutlinedIcon />
      </div>
    </div>
  );
};

export default Header;
