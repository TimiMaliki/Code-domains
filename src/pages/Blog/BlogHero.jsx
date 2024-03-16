import React from "react";
import CreateBlog from "./CreateBlog";
import BlogArticle from "./BlogArticle";
import blogImage from "../../assets/blogpics/blogHeroImg.png";
import words from "../../assets/blogpics/fewWords.png"
import ghost from "../../assets/blogpics/ghost.png"

const BlogHero = () => {
    return (
        <div className="lg:w-full lg:h-full">
            <div className=" flex justify-center">
                <div className="blogImg p-3 mt-2">
                    <img src={blogImage} alt="" srcset="" />
                    <img src={words} alt="" style={{ marginTop: '2rem' }} />
                    <img src={ghost} alt="" className="lg:ml-14 flex justify-center p-6" />

                    <div className="mt-2 border border-black w-full"></div>
                </div>
            </div>

            <BlogArticle />
            <CreateBlog />
        </div>
    );
};

export default BlogHero