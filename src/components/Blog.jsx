import React from "react";

// Import images directly
import blogImg1 from "../assets/img/blog-1.jpg";
import blogImg2 from "../assets/img/blog-2.jpg";
import blogImg3 from "../assets/img/blog-3.jpg";

const blogPosts = [
  {
    image: blogImg1,
    date: "30 Dec 2025",
    author: "Martin.C",
    comments: 6,
    title: "Rental Cars: How to Check Driving Fines?",
    excerpt:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
  {
    image: blogImg2,
    date: "25 Dec 2025",
    author: "Martin.C",
    comments: 6,
    title: "Rental Cost of Sports and Other Cars",
    excerpt:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
  {
    image: blogImg3,
    date: "27 Dec 2025",
    author: "Martin.C",
    comments: 6,
    title: "Documents Required for Car Rental",
    excerpt:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.",
  },
];

const Blog = () => {
  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            Cental<span className="text-primary"> Blog & News</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
            nemo expedita asperiores commodi accusantium at cum harum,
            excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
            quia distinctio.
          </p>
        </div>
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.2}s`}
              key={index}
            >
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src={post.image}
                    className="img-fluid rounded-top w-100"
                    alt="Blog Post"
                  />
                </div>
                <div className="blog-content rounded-bottom p-4">
                  <div className="blog-date">{post.date}</div>
                  <div className="blog-comment my-3 d-flex justify-content-between">
                    <div className="small">
                      <span className="fa fa-user text-primary"></span>
                      <span className="ms-2">{post.author}</span>
                    </div>
                    <div className="small">
                      <span className="fa fa-comment-alt text-primary"></span>
                      <span className="ms-2">{post.comments} Comments</span>
                    </div>
                  </div>
                  <a href="#" className="h4 d-block mb-3">
                    {post.title}
                  </a>
                  <p className="mb-3">{post.excerpt}</p>
                  <a href="#">
                    Read More <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
