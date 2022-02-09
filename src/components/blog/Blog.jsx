import React from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";

const Blog = ({ data }) => {
  let { blog } = data;
  return (
    <section className="blog">
      <div className="blog__header _container">
        <h2 className="blog__maintitle">Latest from blog</h2>
        <Link className="blog__mainlink" to={`/`}>
          See all
        </Link>
      </div>
      <div className="blog__body _container">
        <div className="blog__content">
          {blog.map(({ id, image, title, text }) => {
            return (
              <div className="blog__column" key={id}>
                <div className="blog__item blog-item">
                  <div className="blog-item__image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="blog-item__content">
                    <div className="blog-item__title">{title}</div>
                    <div className="blog-item__text">{text}</div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="blog__column">
            <div className="blog__item blog-item">
              <div className="blog-item__image">
                <img src="img" alt="" />
              </div>
              <div className="blog-item__content">
                <div className="blog-item__title"></div>
                <div className="blog-item__text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
