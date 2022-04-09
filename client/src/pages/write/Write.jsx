import axios from "axios";
import React from "react";

import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import "./write.css";
function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  

  return (
    <div className="write">
    {file &&(
      <img
        src={URL.createObjectURL(file)}
        alt=""
        className="writeImg"
      />)
    }

      <form action="submit" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="fas fa-plus"></i>
          </label>
          <input onChange={e=>setFile(e.target.files[0])} type="file" id="fileInput" style={{ display: "none" }} />
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="writeInput"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            className="writeInput writeText"
            type="text"
            placeholder="Tell ypur story ..."
          ></textarea>
        </div>
        <button type="submit" className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
