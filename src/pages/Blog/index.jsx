import React, { useState , useEffect } from "react";
import blogImage from "../../assets/blogpics/blogHeroImg.png";
import words from "../../assets/blogpics/fewWords.png";
import ghost from "../../assets/blogpics/ghost.png";
import { Link } from "react-router-dom";


const Blogs = () => {
  const [blogs, setBlogs] =useState([])

  const getData = () => {
    const get = localStorage.getItem("dataStord");
    const parse = JSON.parse(get);
    console.log(parse);
    setBlogs(parse);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="lg:w-full lg:h-full">
      <div className="flex justify-center">
        <div className="blogImg p-3 mt-2">
          <img src={blogImage} alt="" srcset="" />
          <img src={words} alt="" style={{ marginTop: "2rem" }} />
          <img
            src={ghost}
            alt=""
            className="lg:ml-14 flex justify-center p-6"
          />

          <div className="mt-2 border border-black w-full"></div>
        </div>
      </div>

      <div className="lg:w-full lg:h-full grid grid-cols-1 md:grid-cols-3  pl mb-2 ">
        {blogs.map((blog) => (
          <div className="blogGrid grid place-content-center p-4" key={blog.id}>
            <div className="blogCard w-96 bg-white border border-gray-200 rounded-lg shadow bg-gray-100 dark:border-gray-700">
              {/* <a href="#">
              <img
                class="rounded-t-lg"
                src={blog.icon}
                alt=""
                style={{ width: "100%" }}
              />
            </a> */}
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    {blog?.title}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <p>{blog?.body}</p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <Link to={`/blog/${blog.id}`}>Read more</Link>
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
