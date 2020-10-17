import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { storageService, dbService } from "../fbase";

const AddGoods = ({ userObj }) => {
  const [DRAW, setDRAW] = useState("");
  const [Goodsattachment, setGoodsAttachment] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    if (DRAW === "") {
        alert('Submit after write explanation');
      return;
    }
    else if (Goodsattachment === "") {
        alert('Submit after attach your Photo');
        return;
      }
    let GoodsattachmentUrl = "";
    if (Goodsattachment !== "") {
      const GoodsattachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await GoodsattachmentRef.putString(Goodsattachment, "data_url");
      GoodsattachmentUrl = await response.ref.getDownloadURL();
    }
    const DRAWObj = {
      text: DRAW,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      GoodsattachmentUrl,
    };
    await dbService.collection("Design").add(DRAWObj);
    setDRAW("");
    setGoodsAttachment("");
    alert("Updated");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setDRAW(value);
  };
  const onFileChange = (event) => {
    console.log('designchange!')
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
  const onClearGoodsAttachment = () => setGoodsAttachment("");
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          value={DRAW}
          onChange={onChange}
          type="text"
          placeholder="info - Design"
          maxLength={120}
        />
        <input type="submit" value="&rarr;"/>
      </div>
      <label htmlFor="attach-file-design">
        <span>Add Design</span>
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
      {Goodsattachment && (
        <div>
          <img
            src={Goodsattachment}
            alt=""
            style={{
              backgroundImage: Goodsattachment,
            }}
          />
          <div onClick={onClearGoodsAttachment}>
            <span>Remove</span>
          </div>
        </div>
      )}
    </form>
  );
};
export default AddGoods;
