import React from "react";
import styles from "../style";
import { useBlogs } from "../hooks";
import { PageHeading, BlogCards, CTA } from "../components";
const Blog = () => {
  const blogs = useBlogs();
  return (
    <>
      <PageHeading bgImage="bg_team" heading="Our Team" />
      <div
        className={`${styles.boxWidth} ${styles.padding} ${styles.flexCenter} flex-col`}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-8 mt-12">
          {blogs.map((blog) => (
            <BlogCards key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <CTA />
    </>
  );
};
export default Blog;
