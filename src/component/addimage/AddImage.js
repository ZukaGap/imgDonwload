import React, { useState, useRef } from "react";
import { style } from "./style.js";

export default function AddImage() {
  const [profileImg, setProfileImg] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const [fileName, setFileName] = useState("");
  const refIMG = useRef();

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(refIMG.current.files[0]);
    setFileName(refIMG.current.files[0].name);
  };

  return (
    <div style={style.card}>
      <h1 style={style.heading}>Add Image</h1>
      <div style={style.imgHolder}>
        <img src={profileImg} alt="" id="img" style={style.img} />
      </div>
      <input
        ref={refIMG}
        type="file"
        accept="image/*"
        name="image-upload"
        id="input"
        onChange={imageHandler}
      />
      <div style={style.label}>
        <label style={style.imageUpload} htmlFor="input">
          Choose Your Photo
        </label>
        <label style={style.imageUpload}>
          <a style={style.a} href={profileImg} download={fileName}>
            Download Your Photo
          </a>
        </label>
      </div>
    </div>
  );
}
