import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { storageService, dbService } from "../fbase";

const AddDraw = ({ userObj }) => {
  const [DRAW, setDRAW] = useState("");
  const [attachment, setAttachment] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    if (DRAW === "") {
        alert('Submit after write explanation');
      return;
    }
    else if (attachment === "") {
        alert('Submit after attach your Photo');
        return;
      }
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const DRAWObj = {
      text: DRAW,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("DRAW").add(DRAWObj);
    setDRAW("");
    setAttachment("");
    alert("Updated");
  };


  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setDRAW(value);
  };
  const onFileChange = (event) => {
      console.log('drawchange!')

    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    if (Boolean(theFile)) {
      reader.readAsDataURL(theFile);
    }
  };
  const onClearAttachment = () => setAttachment("");
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          value={DRAW}
          onChange={onChange}
          type="text"
          placeholder="info - Illustration"
          maxLength={120}
        />
        <input type="submit" value="&rarr;"/>
      </div>
      <label htmlFor="attach-file-illustration">
        <span>Add Illustration</span>
      </label>
      <input
        id="attach-file-illustration"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{
          opacity: 0,
        }}
      />
      {attachment && (
        <div>
          <img
            src={attachment}
            style={{
              backgroundImage: attachment,
            }}
          />
          <div onClick={onClearAttachment}>
            <span>Remove</span>
          </div>
        </div>
      )}
    </form>
  );
};
export default AddDraw;
