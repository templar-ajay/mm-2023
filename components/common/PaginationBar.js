import Button from "./Button";
import Image from "next/image";
import leftArrow from "../../public/icons/orange_left_arrow.png";
import rightArrow from "../../public/icons/orange_right_arrow.png";

export default function PaginationBar({ totalPage, activePage, pageSize }) {
  const isFirstPage = activePage === 1;
  const isLastPage = activePage === totalPage;
  const isButtonActive = (index) => index == activePage;

  return (
    <div className="flex items-center gap-4">
      <Button
        backgroundVariant={isFirstPage ? "orange" : ""}
        borderVariant={isFirstPage ? "" : "neon"}
        className="flex items-center gap-2 rounded-full"
        disabled={isFirstPage}
        href={`blog/?blog_count=${pageSize}&page_number=${activePage - 1}`}
      >
        <Image width={40} height={40} src={leftArrow} className="h-4 w-4" />
      </Button>
      <div className="flex items-center gap-2">
        <Button
          backgroundVariant={isButtonActive(1) ? "orange" : ""}
          borderVariant={isButtonActive(1) ? "" : "neon"}
          color="gray"
          className="rounded-full"
          disabled={isButtonActive(1)}
          href={`blog/?blog_count=${pageSize}&page_number=${1}`}
        >
          1
        </Button>

        {totalPage > 2 && !isLastPage ? (
          <Button
            backgroundVariant={
              isButtonActive(isFirstPage ? 2 : activePage) ? "orange" : ""
            }
            borderVariant={
              isButtonActive(isFirstPage ? 2 : activePage) ? "" : "neon"
            }
            color="gray"
            className="rounded-full"
            disabled={isButtonActive(isFirstPage ? 2 : activePage)}
            href={`blog/?blog_count=${pageSize}&page_number=${
              isFirstPage ? 2 : activePage
            }`}
          >
            {isFirstPage ? 2 : activePage}
          </Button>
        ) : (
          <>
            {isLastPage ? (
              <></>
            ) : (
              <Button
                backgroundVariant={isButtonActive(activePage) ? "orange" : ""}
                borderVariant={isButtonActive(activePage) ? "" : "neon"}
                color="gray"
                className="rounded-full"
                disabled={isButtonActive(activePage)}
                href={`blog/?blog_count=${pageSize}&page_number=${activePage}`}
              >
                {activePage}
              </Button>
            )}
          </>
        )}

        {totalPage <= 2 ? (
          <></>
        ) : (
          <Button
            backgroundVariant={isButtonActive(totalPage) ? "orange" : ""}
            borderVariant={isButtonActive(totalPage) ? "" : "neon"}
            color="gray"
            className="rounded-full"
            disabled={isButtonActive(totalPage)}
            href={`blog/?blog_count=${pageSize}&page_number=${totalPage}`}
          >
            {totalPage}
          </Button>
        )}
      </div>
      <Button
        backgroundVariant={isLastPage ? "orange" : ""}
        borderVariant={isLastPage ? "" : "neon"}
        className="flex items-center gap-2 rounded-full"
        disabled={isLastPage}
        href={`blog/?blog_count=${pageSize}&page_number=${activePage + 1}`}
      >
        <Image width={40} height={40} src={rightArrow} className="h-4 w-4" />
      </Button>
    </div>
  );
}
