import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Gap, Input, Textarea } from "../../../components";
import Upload from "../../../components/atoms/Upload";
import "./create.scss";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-create">
      <p className="back" onClick={() => history.push("/")}>
        Kembali
      </p>
      <p className="title">Create Blog</p>
      <Input type="text" label="input judul" placeholder="isi judul" />
      <Upload />
      <Textarea placeholder="isi body" label="Isi pesan" />
      <Gap height={20} />
      <div className="button-actions">
        <Button title="Simpan Post" />
      </div>
    </div>
  );
};

export default CreateBlog;
