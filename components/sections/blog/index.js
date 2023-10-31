import PaginationBar from "@/components/common/PaginationBar";
import Blogs from "./Blogs";

export default function BlogListing({ blogs, totalPageCount }) {
  return (
    <>
      <Blogs data={blogs} />
      <div className="w-100 flex justify-center pb-12">
        <PaginationBar totalPage={totalPageCount} activePage={1} />
      </div>
    </>
  );
}
