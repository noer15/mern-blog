import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { api_url } from "../../../api";
import { Button, Gap, Input, Textarea } from "../../../components";
import Upload from "../../../components/atoms/Upload";
import "./create.scss";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState(null);

  const handleSubmit = () => {
    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("image", image);
    axios
      .post(`${api_url}/api/v1/blog/post`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res:", res);
      })
      .catch((err) => console.log("err:", err));
  };
  const onImagePrev = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePrev(URL.createObjectURL(file));
  };
  const history = useHistory();
  return (
    <div className="blog-create">
      <p className="back" onClick={() => history.push("/")}>
        Kembali
      </p>
      <p className="title">Create Blog</p>
      <Input
        type="text"
        label="input judul"
        placeholder="isi judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Upload onChange={(e) => onImagePrev(e)} img={imagePrev} />
      <Textarea
        placeholder="isi body"
        label="Isi pesan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Gap height={20} />
      <div className="button-actions">
        <Button title="Simpan Post" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;
