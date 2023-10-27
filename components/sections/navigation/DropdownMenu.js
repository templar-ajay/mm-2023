import { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

import SocialLinks from "../../common/SocialLinks";
import MobileMenu from "../../../public/mobile_menu.svg";
import MobileCloseMenu from "../../../public/close_btn.svg";

const DropdownMenu = ({ menuItems = [] }) => {
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
                {menuItems.map(({ label, small_label, the_link }) => (
                  <Menu.Item key={label[0].text}>
                    <Link
                      href={new URL(the_link.url).pathname}
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
              <div>
                <p className="font-bold text-textPrimary text-xs opacity-70 tracking-[0.2em] pb-10">
                  SOCIALS
                </p>
                <SocialLinks />
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default DropdownMenu;
