import React from "react";
import { useBlogs } from "../hooks";
import { SectionHeading, Button, BlogCards } from "../components";
import styles from "../style";
const News = () => {
  const blogs = useBlogs();
  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <div
        className={`flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-8`}
      >
        <SectionHeading
          title="We Offer Organic For You"
          subtitle="Offer"
          align={true}
        />
        <Button label="more news" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-8 my-12">
        {blogs.slice(0, 2).map((blog) => (
          <BlogCards key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};
export default News;
