import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import blogImage from "../../assets/blogpics/blogHeroImg.png";
// import words from "../../assets/blogpics/fewWords.png";
// import ghost from "../../assets/blogpics/ghost.png";

const ViewBlog = () => {
  const param = useParams();

  function removeSnakeCase(title){
    let myStr = title.split("_");
    let mainTitle = myStr.join(' ').toLowerCase();
    return mainTitle}

// const url = snakeToCamel('snake_case_yes')

// console.log(url)

  const [currentBlog, setCurrentBlog] = useState({});
  // const [loading, setIsLoading] = useState(true);
/// https://newsapi.org/v2/everything?apiKey=e2bc78adb3c94ceeb6341e4cc0193c61&id=4&qInTitle=%22Xiaomi%20SU7%20:%20la%20voiture%20%C3%A9lectrique%20d%C3%A9marre%20ses%20ventes%20en%20trombe%22
  const getBlog = () => {
    fetch(
      `https://newsapi.org/v2/everything?apiKey=e2bc78adb3c94ceeb6341e4cc0193c61&id=4&qInTitle=${removeSnakeCase(param.title)}` 
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentBlog(data.articles[0]);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div className="w-full h-full mt-8">
       {/* {loading && <div>Please wait...</div>} */}
      <div className="p-20  flex justify-center">
        <div className="blogCard w-full bg-white text-center">
          <div className="flex justify-center">
            <div className="blogImg p-3 mt-2">
              <img
                src={currentBlog.urlToImage}
                alt=""
                srcset=""
                className="mb-4"
              />

              <div className="mt-2 border border-black w-full "></div>
            </div>
          </div>
          <h2 className="mb-4 text-3xl lg:text-7xl font-bolder">
            {currentBlog?.title}
          </h2>
          <p className="text-xl">{currentBlog?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
