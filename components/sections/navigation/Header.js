import React from "react";

// Components
import SectionWrapper from "../../common/layout/SectionWrapper";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Header = ({ navigationItems }) => {
  return (
    <SectionWrapper direction="row" pbs={0}>
      <header className="flex flex-grow py-9 font-inter justify-between items-center">
        {/* flex-col largeTablet:flex-row */}
        <DesktopNavigation
          logo={"./medicosLogo/medicos-logo-trans-wt.png"}
          navigationItems={navigationItems}
        />
        <div className="flex w-auto">
          {/* // w-full largeTablet:w-auto largeTablet:hidden */}
          <MobileNavigation
            logo={"./medicosLogo/medicos-logo-trans-wt.png"}
            navigationItems={navigationItems}
          />
        </div>
      </header>
    </SectionWrapper>
  );
};

export default Header;
