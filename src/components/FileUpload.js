import React, { useRef, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import axios from "axios";

function FileUpload() {
  const [file, setFile] = useState(""); // storing the uploaded file    // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" });
  const [progress, setProgess] = useState(0); // progess bar
  const el = useRef(); // accesing input element

  const handleChange = (e) => {
    setProgess(0);
    const file = e.target.files[0]; // accesing file
    setFile(file); // storing file
  };

  const uploadFile = () => {
    const formData = new FormData();
    formData.append("file", file); // appending file
    axios
      .post("/upload", formData, {
        onUploadProgress: (ProgressEvent) => {
          let progress = Math.round(
            (ProgressEvent.loaded / ProgressEvent.total) * 100
          );
          setProgess(progress);
        },
      })
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="mainBackModalProduct">
      <div>
        <input
          type="file"
          ref={el}
          onChange={handleChange}
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
      </div>
      <ProgressBar
        className="marginProgressBar"
        now={progress}
        label={`${progress} % completed`}
        animated
      />
      <div className="h1-title">
        <button
          onClick={uploadFile}
          className="button-color marginBtn formPadding "
        >
          Upload
        </button>
      </div>
    </div>
  );
}
export default FileUpload;
