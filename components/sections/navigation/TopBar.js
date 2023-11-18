import Link from "next/link";
import { RichText } from "prismic-reactjs";
import { usePathname } from "next/navigation";
import Button from "../../common/Button";
import Image from "next/image";

const TopBar = ({ navigationItems }) => {
  const currentPath = usePathname();

  return (
    <div
      style={{ alignItems: "center" }}
      className="items-center w-full justify-between flex mr-1 mb-0 "
    >
      <div className="block mm-logo-div cursor-pointer">
        <Link
          href={
            currentPath.startsWith("/es/") || currentPath === "/es"
              ? "/es"
              : "/"
          }
          passHref
        >
          <Image
            className="mm-logo-img"
            src={navigationItems.logo_header?.url}
            alt={navigationItems.logo_header?.alt}
            width={navigationItems.logo_header.dimensions.width}
            height={navigationItems.logo_header.dimensions.height}
          />
        </Link>
      </div>

      <Button
        fullWidth={false}
        contactNumber={"tel:" + navigationItems.call_us_now_phone[0]?.text}
        href="https://medicalmarketing.es/"
        minWidth="120px"
      >
        <span className="items-center justify-evenly w-full font-bold text-sm leading-[1] text-[#FEF8F4] flex transition-all ease-in-out duration-400">
          <svg
            style={{
              width: "16px",
              height: "28px",
              fill: "#fff",
              marginRight: "0.5rem"
            }}
          >
            <path d="M13.68 0H2.32A1.965 1.965 0 00.355 1.967v23.068C.355 26.12 1.233 27 2.32 27h11.36c1.085 0 1.965-.88 1.965-1.965V1.967C15.645.882 14.765 0 13.68 0zM8 25.059a1.254 1.254 0 110-2.509 1.254 1.254 0 010 2.509zm6.173-4.299H1.828V3.32h12.345V20.76z"></path>
          </svg>
          {RichText.render(navigationItems.call_us_now_text)}
        </span>
      </Button>
    </div>
  );
};

export default TopBar;
