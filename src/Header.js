import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
 import { Link } from "react-router-dom/cjs/react-router-dom";
import { useStateValue} from "./StateProvider";

function Header() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className="header">
      <Link to ="/">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>

      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <div className="header_optionBasket">
      <ShoppingBasketIcon/>
          <span className="header_optionLineTwo header_basketCount" >
            {basket?.length}
          </span>
        </div>

        



      </div>
    </div>
  );
}

export default Header;
