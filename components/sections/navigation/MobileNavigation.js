import React from "react";
import Link from "next/link";

import DropdownMenu from "./DropdownMenu";

const MobileNavigation = ({ navigationItems, logo }) => {
  return (
    <div className="flex justify-between items-center w-full">
      {/* <div className="h-[26px] w-[150px] largeTablet:hidden  cursor-pointer">
        <Link href="/" passHref>
          <img src={logo} alt="Brand Logo" />
        </Link>
      </div> */}

      <DropdownMenu
        menuItems={navigationItems.menu_items}
        label={navigationItems.logo_header?.alt}
      />
    </div>
  );
};

export default MobileNavigation;
