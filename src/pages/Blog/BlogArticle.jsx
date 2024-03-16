import React from "react";
import article from "../../assets/blogpics/All-Articles.png"

const BlogArticle = () => {
    return (
        <div className="lg:w-full lg:h-full  flex justify-center">
            <img src={article} alt="" className="p-6" />
        </div>
    );
};

export default BlogArticle