import Link from "next/link";
import { RichText } from "prismic-reactjs";
import SectionWrapper from "../common/layout/SectionWrapper";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Dropdown from "../common/Dropdown";
import Image from "next/image";
import { getLanguageName, getURLPrefix } from "@/utils/stringUtils";
import { linkFromDocument } from "@/utils/LinkUtils";
import { PersistQueryParamsLink } from "../CustomLink/PersistQueryParams";

const Footer = (props) => {
  // const origin = window?.location?.origin ? window.location.origin + "/" : "";
  // const origin = "https://medicalmarketing.digital/";
  const { currentLang, alternateLang, footer: footerData } = props.footerData;
  const menuItems = [];

  if (currentLang && alternateLang) {
    const allLanguages = [currentLang];
    if (alternateLang) {
      alternateLang?.forEach((x) => allLanguages.push(x));
    }
    allLanguages.forEach(({ lang, uid }) => {
      menuItems.push({
        path: linkFromDocument(lang, uid),
        title: getLanguageName(lang)
      });
    });
    // console.log("menuItems", menuItems);
    // console.log("currentLang", currentLang);
    // console.log("alternateLang", alternateLang);
  }

  const path = usePathname();
  const footerItems = footerData || {};
  const bgColor = "bg-footerBG";

  return (
    <footer className={`w-full min-h-[200px] ${bgColor} pb-10`}>
      <SectionWrapper pbs={0}>
        <div className="flex justify-between w-full pt-10 pb-16 largeTablet:pt-12 ">
          <div className="w-[140px] h-6">
            <Image
              alt={"Brand logo"}
              src={"/medicosLogo/medicos-logo-trans-wt.png"}
              width={140}
              height={53.23}
            />
          </div>
          <div className="w-[140px] tablet:w-auto h-6">
            {Boolean(menuItems.length) && (
              <Dropdown name="Language" menuItems={menuItems} />
            )}
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center tablet:items-start flex-col tablet:flex-row tablet:text-left text-center">
          {footerItems.body?.map(({ primary, items, slice_type }, i) => {
            const { title_of_this_block } = primary;
            return (
              <>
                {slice_type === "call_to_action" ? (
                  <div key={slice_type + i + Math.random().toString()}></div>
                ) : (
                  <div
                    key={slice_type + i + Math.random().toString()}
                    className="sm:w-1/2 my-3 tablet:my-10 largeTablet:w-[20%] tablet:w-[20%] w-full largeTablet:my-0"
                  >
                    <LocalTypography className="!pb-4" variant="title">
                      {RichText.render(title_of_this_block)}
                    </LocalTypography>
                    <div className="w-full flex flex-col">
                      {items.map(
                        ({ link: { url, uid }, name_of_this_block }, i) => (
                          <div
                            key={i + Math.random().toString()}
                            className="cursor-pointer"
                          >
                            {!name_of_this_block?.length ? (
                              <></>
                            ) : (
                              <PersistQueryParamsLink
                                rel="noopener noreferrer"
                                key={i + Math.random().toString()}
                                href={
                                  url ||
                                  (uid &&
                                    (path.includes("/es") ? "/es/" : "") +
                                      uid) ||
                                  "/#"
                                }
                                passHref
                              >
                                <LocalTypography variant="item1">
                                  {RichText.render(name_of_this_block)}
                                </LocalTypography>
                              </PersistQueryParamsLink>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>

        <div className="w-full pt-9 mt-7 flex flex-col-reverse border-t-[0.5px] border-gray-700 largeTablet:flex-row largeTablet:mt-12">
          <div className="flex-grow">
            <LocalTypography variant="item2">
              {RichText.render(footerItems.disclaimer)}
            </LocalTypography>
          </div>
          <div className="flex mb-5 largeTablet:mb-0 ">
            {footerItems.legal?.map(({ link, text_for_legal_link }, i) => (
              <div key={i + Math.random().toString()} className="flex">
                <a href={link.url} rel="noreferrer">
                  <LocalTypography variant="item2">
                    {RichText.render(text_for_legal_link)}
                  </LocalTypography>
                </a>
                {i < footerItems.length - 1 && (
                  <div className=" mx-2">
                    <LocalTypography variant="item2">•</LocalTypography>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
};

const LocalTypography = ({ variant = "item1", children, className }) => {
  const titleStyle =
    "font-bold text-textPrimary opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8";
  const item1Style =
    "font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3";
  const item2Style =
    "font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.35]";

  const appliedStyle =
    variant === "title"
      ? titleStyle
      : variant === "item1"
      ? item1Style
      : item2Style;
  return <div className={clsx(appliedStyle, className)}>{children}</div>;
};

export default Footer;
