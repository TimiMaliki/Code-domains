import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import blogImage from "../../assets/blogpics/blogHeroImg.png";
import words from "../../assets/blogpics/fewWords.png";
import ghost from "../../assets/blogpics/ghost.png";

const ViewBlog = () => {
  const param = useParams();

  const [currentBlog, setCurrentBlog] = useState({});

  const getBlog = (id) => {
    const currentBlog = localStorage.getItem("dataStord");
    const parse = JSON.parse(currentBlog);
    // const parse = currentBlog ? JSON.parse(currentBlog) : "";
    const findBlog = parse.find((item) => {
      return item.id === id;
    });
    setCurrentBlog(findBlog);
  };

  useEffect(() => {
    getBlog(param.id);
  }, [param.id]);

  return (
    <div className="w-full h-full mt-8">
      <div className="p-20  flex justify-center">
        <div className="blogCard w-full bg-white text-center">
          <div className="flex justify-center">
            <div className="blogImg p-3 mt-2">
              <img src={blogImage} alt="" srcset="" />
              <img src={words} alt="" style={{ marginTop: "2rem" }} />
              <img
                src={ghost}
                alt=""
                className="lg:ml-14 flex justify-center p-6"
              />

              <div className="mt-2 border border-black w-full mb-20"></div>
            </div>
          </div>
          <h2 className="mb-4 text-3xl lg:text-7xl font-bolder">
            {currentBlog?.title}
          </h2>
          <p className="text-xl">{currentBlog?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
