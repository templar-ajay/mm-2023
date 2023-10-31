import SectionWrapper from "../../common/layout/SectionWrapper";
import TopBar from "./TopBar";
import DropdownMenu from "./DropdownMenu";

const Header = ({ navigationData }) => {
  const navigationItems = navigationData || {};

  return (
    <SectionWrapper direction="row" pbs={0}>
      <header className="flex flex-grow py-9 font-inter justify-between items-center">
        <TopBar navigationItems={navigationItems} />
        {/* menu template */}
        <div className="flex w-auto">
          <div className="flex justify-between items-center w-full">
            <DropdownMenu menuItems={navigationItems.menu_items} />
          </div>
        </div>
      </header>
    </SectionWrapper>
  );
};

export default Header;
