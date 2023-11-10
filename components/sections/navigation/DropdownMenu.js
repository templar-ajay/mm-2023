import { Fragment } from "react";
import { arrangeLinks } from "@/utils/queryParamUtils";
import { linkFromDocument } from "@/utils/LinkUtils";
import { RichText } from "prismic-reactjs";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../../../public/icons/mobile_menu.svg";
import MobileCloseMenu from "../../../public/icons/close_btn.svg";
import { usePathname } from "next/navigation";

const DropdownMenu = ({ menuItems = [] }) => {
  const currentPath = usePathname();
  console.log("menu items", menuItems);

  return (
    <Menu as="div" className="inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button className="text-white" aria-label="menu button">
            <Image
              width="auto"
              src={open ? MobileCloseMenu : MobileMenu}
              alt="Menu"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-50 h-fit min-h-[470px] right-6 left-6 mt-6 bg-gradient-to-r from-[#000] to-[#4d1a6d] py-9 px-7 rounded-lg">
              <p className="font-bold text-textPrimary text-xs opacity-70 tracking-[0.2em] pb-8">
                MENU
              </p>
              <div className="flex flex-col gap-y-2 pb-14 ">
                {menuItems
                  // .filter(({ the_link }) => the_link.link_type == "Web")
                  .map(({ label, small_label, the_link }, i) => (
                    <Menu.Item key={label[0]?.text + i}>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={
                          the_link.url
                            ? the_link.url
                            : linkFromDocument(the_link.lang, the_link.uid)
                        }
                        className="text-textPrimary hover:text-mm_primary transition-colors duration-200 ease-in-out"
                        passHref
                      >
                        <span className="font-bold text-2xl tablet:text-3xl ">
                          {RichText.render(label)}
                        </span>
                        <span className="text-sm tablet:text-md">
                          {RichText.render(small_label)}
                        </span>
                      </Link>
                    </Menu.Item>
                  ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default DropdownMenu;
