import React, { useState } from "react";


const Create = () => {

    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [id,setId] = useState("")
    const [date,setDate] = useState("")

    const getThestore = (content) => {
        const inSideStore = localStorage.getItem("dataStord");
        console.log(inSideStore);
        if (!inSideStore || inSideStore.length === 0) {
          let contentPost = [];
          contentPost.push(content);
          localStorage.setItem("dataStord", JSON.stringify(contentPost));
        } else {
          const parseData = JSON.parse(inSideStore);
          let arr = parseData;
          arr.push(content);
          localStorage.setItem("dataStord", JSON.stringify(arr));
        }
      };
          
  const handleSubmit = (e) => {
    e.preventDefault();
    getThestore({ id, title, body , date});
  };

        

  return (
    <div className="w-full h-full p-0 text-center mt-2 grid">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="p-10 w-full">
          <label className="text-2xl lg:text-4xl">
            Create A Blog and Post For Free
          </label>
        </div>

        {/* <div className="p-4 w-full mb-8 grid place-content-center">
          <label className="text-2xl lg:text-4xl mb-2 text-start">
            Upload a picture:
          </label>
          <input
            type="file"
            className="w-[300px] h-full lg:w-[500px] lg:h-[105px]  text-black rounded-lg shadow-lg p-2"
          />
           <img src={blogImg} alt="" style={{width:"100%"}}   className="w-full h-full  rounded-lg mt-4"/> 
        </div> */}

        <div className="p-4 grid place-content-center w-full mb-8 ">
          <label className="text-2xl lg:text-4xl mb-2 text-start">Title:</label>
          <input
            type="text"
            placeholder=""
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" w-[300px] h-full lg:w-[500px] lg:h-[35px] border border-black text-black rounded-lg shadow-lg p-2"
          />
        </div>

        <div className="p-4 grid place-content-center w-full mb-8">
          <label className="text-2xl lg:text-4xl mb-2 text-start">Date:</label>
          <input
            type="text"
            placeholder=""
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-[300px] h-full lg:w-[500px] lg:h-[35px] border  text-black border-black rounded-lg shadow-lg p-2"
          />
        </div>

        <div className="p-4  grid place-content-center w-full mb-8">
          <label className="text-2xl lg:text-4xl mb-2 text-start">Body:</label>
          <textarea
            className="w-[300px] h-full lg:w-[500px]  border border-black text-black rounded-lg shadow-lg p-10"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <div className="p-4  grid place-content-center w-full mb-8">
          <label className="text-2xl lg:text-4xl mb-2 text-start">
            Number of Blog:
          </label>
          <input
            className="w-full h-full lg:w-[500px] h-full border border-black text-black rounded-lg shadow-lg p-2"
            required
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <button className="w-[100px] h-[45px] bg-black text-white p-2 rounded-lg mb-8">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
