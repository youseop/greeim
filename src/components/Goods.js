import React, { useState } from "react";
import { dbService, storageService } from "../fbase";

const Goods = ({ GoodsObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newGoods, setNewGoods] = useState(GoodsObj.text);
    const onDeleteClick = async () => {
      const ok = window.confirm("Are you sure you want to delete?");
      if (ok) {
        await dbService.doc(`Design/${GoodsObj.id}`).delete();
        await storageService.refFromURL(GoodsObj.attachmentUrl).delete();
      }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
      event.preventDefault();
      await dbService.doc(`Design/${GoodsObj.id}`).update({
        text: newGoods,
      });
      setEditing(false);
    };
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      setNewGoods(value);
    };
    return (
      <div>
        {editing ? (
          <>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Edit"
                value={newGoods}
                required
                autoFocus
                onChange={onChange}
              />
              <input type="submit" value="Update explanation"/>
            </form>
            <span onClick={toggleEditing}>
              Cancel
            </span>
          </>
        ) : (
          <>
            <h4>{GoodsObj.text}</h4>
            {GoodsObj.GoodsattachmentUrl && <img src={GoodsObj.GoodsattachmentUrl} alt=""/>}
            {isOwner && (
              <div>
                <span onClick={onDeleteClick}>
                    Delete
                </span>
                <span onClick={toggleEditing}>
                    Edit
                </span>
              </div>
            )}
          </>
        )}
      </div>
    );
  };
  
export default Goods;
