import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { storageService, dbService } from "../fbase";

const AddGoods = ({ userObj }) => {
  const [DRAW, setDRAW] = useState("");
  const [Goodsattachment, setGoodsAttachment] = useState("");
  const [Goodsattachment_main, setGoodsAttachment_main] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    if (DRAW === "") {
      alert('Text input invalid');
      return;
    }
    else if (Goodsattachment === "") {
      alert('Thumbnail img input invalid');
        return;
    }
    else if (Goodsattachment_main === "") {
      alert('Main img input invalid');
        return;
    }
    let GoodsattachmentUrl = "";
    let GoodsattachmentUrl_main = "";
    if (Goodsattachment !== "") {
      const GoodsattachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await GoodsattachmentRef.putString(Goodsattachment, "data_url");
      GoodsattachmentUrl = await response.ref.getDownloadURL();
    }
    if (Goodsattachment_main !== "") {
      const GoodsattachmentRef_main = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await GoodsattachmentRef_main.putString(Goodsattachment_main, "data_url");
      GoodsattachmentUrl_main = await response.ref.getDownloadURL();
    }
    const DRAWObj = {
      text: DRAW,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      GoodsattachmentUrl,
      GoodsattachmentUrl_main,
    };
    await dbService.collection("Design").add(DRAWObj);
    setDRAW("");
    setGoodsAttachment("");
    setGoodsAttachment_main("");
    alert("Updated");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setDRAW(value);
  };
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setGoodsAttachment(result);
    };
    if (Boolean(theFile)) {
      reader.readAsDataURL(theFile);
    }
  };
  const onFileChange_main = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setGoodsAttachment_main(result);
    };
    if (Boolean(theFile)) {
      reader.readAsDataURL(theFile);
    }
  };
  const onClearGoodsAttachment = () => setGoodsAttachment("");
  const onClearGoodsAttachment_main = () => setGoodsAttachment_main("");
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          value={DRAW}
          onChange={onChange}
          type="text"
          placeholder="info - Design"
          maxLength={120}
          className="adddraw_textinput"
        />
        <input type="submit" value="Update"
          className="adddraw_submit"/>
      </div>
      <label htmlFor="attach-file-design">
        <span
          className="adddraw_imginput">Add Display Img</span>
      </label>
      <label htmlFor="attach-file-design_main">
        <span
          className="adddraw_imginput">Add Main Img</span>
      </label>
      <input
        id="attach-file-design"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{
          opacity: 0,
        }}
      />
      <input
        id="attach-file-design_main"
        type="file"
        accept="image/*"
        onChange={onFileChange_main}
        style={{
          opacity: 0,
        }}
      />
      {Goodsattachment && (
        <div>
          <img
            src={Goodsattachment}
            alt=""
            style={{
              backgroundImage: Goodsattachment,
            }}
            className="adddraw_attachment"
          />
          <div onClick={onClearGoodsAttachment}>
            <span className="adddraw_imginput">Remove</span>
          </div>
        </div>
      )}
      {Goodsattachment_main && (
        <div>
          <img
            src={Goodsattachment_main}
            alt=""
            style={{
              backgroundImage: Goodsattachment_main,
            }}
            className="adddraw_attachment"
          />
          <div onClick={onClearGoodsAttachment_main}>
            <span className="adddraw_imginput">Remove</span>
          </div>
        </div>
      )}
    </form>
  );
};
export default AddGoods;
