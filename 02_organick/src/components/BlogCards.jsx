import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import styles from "../style";
import Button from "./Button";
const BlogCards = ({ blog }) => {
  return (
    <article className="w-full max-w-[600px] mx-auto">
      <img
        src={blog.imgUrl}
        alt={blog.title}
        className="w-full h-auto object-contain rounded-[30px]"
      />
      <div
        className={`w-full max-w-[90%] sm:max-w-[80%] mx-auto ${styles.flexStart} flex-col gap-2 sm:py-6 sm:px-8 p-4 bg-white shadow-md rounded-[30px] -mt-48 relative`}
      >
        <p
          className={`${styles.flexCenter} text-sm text-primary font-normal gap-2`}
        >
          <FaUser color="#EFD372" />
          <span>By&nbsp;{blog.author}</span>
        </p>
        <h3
          className="text-base sm:text-lg font-bold text-primary"
          title={blog.title}
        >
          {blog.title.length > 30
            ? `${blog.title.substring(0, 30)} ...`
            : `${blog.title}`}
        </h3>
        <p className={styles.paragraph}>
          {blog.content.length > 120
            ? `${blog.content.substring(0, 120)} ...`
            : `${blog.content}`}
        </p>
        <Link to={`/blog/${blog.id}`}>
          <Button label="read more" customStyle={true} />
        </Link>
      </div>
    </article>
  );
};
export default BlogCards;
