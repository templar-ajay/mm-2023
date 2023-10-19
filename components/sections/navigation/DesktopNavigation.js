import Link from "next/link";
// import { useRouter } from "next/router";

// Components
import Button from "../../common/Button";

const DesktopNavigation = ({ navigationItems, logo }) => {
  // const { pathname } = useRouter();
  // const defaultStyle = "font-bold text-textPrimary text-sm";
  // const activeLinkStyle =
  //   "after:absolute after:bg-gradient-to-r from-[#ED5432] to-[#EDA232] after:w-full after:h-[3px] after:bottom-[-8px] after:left-0";

  // const getProperStyle = (link) => {
  //   if (pathname.includes(link)) {
  //     return `${defaultStyle} ${activeLinkStyle}`;
  //   }
  //   return defaultStyle;
  // };

  return (
    <div
      style={{ alignItems: "center" }}
      className="items-center w-full justify-between flex mr-5 mb-0 "
    >
      <div className="block w-[110px] cursor-pointer">
        <Link href="/" passHref>
          <img className="sm:w-[110px]" src={logo} alt="Brand Logo" />
        </Link>
      </div>

      <Button
        fullWidth={false}
        contactNumber={"tel:+34678647490"}
        href="https://medicalmarketing.es/"
        gitHub
        minWidth="120px"
      >
        <span className="items-center justify-evenly w-full font-bold text-sm leading-[1] text-[#FEF8F4] flex transition-all ease-in-out duration-400">
          <svg style={{ width: "16px", height: "28px", fill: "#fff" }}>
            <path d="M13.68 0H2.32A1.965 1.965 0 00.355 1.967v23.068C.355 26.12 1.233 27 2.32 27h11.36c1.085 0 1.965-.88 1.965-1.965V1.967C15.645.882 14.765 0 13.68 0zM8 25.059a1.254 1.254 0 110-2.509 1.254 1.254 0 010 2.509zm6.173-4.299H1.828V3.32h12.345V20.76z"></path>
          </svg>
          Call Us
        </span>
      </Button>
    </div>
  );
};

export default DesktopNavigation;
