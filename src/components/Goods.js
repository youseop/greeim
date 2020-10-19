import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <div className="edit_draw">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Edit"
                value={newGoods}
                required
                autoFocus
                onChange={onChange}
              />
              <input type="submit" value="Update" className="editbtn_draw"/>
            </form>
            <span onClick={toggleEditing} className="editbtn_draw">
              Cancel
            </span>
          </div>
        ) : (
          <div className="Goods_controller">
          <div className="imgbox_draw">
            {GoodsObj.GoodsattachmentUrl && 
            <div>
            <img src={GoodsObj.GoodsattachmentUrl} alt="" className="img_draw"/>
            <div className="darkness_draw">
                <FontAwesomeIcon icon={faPlus} /></div>
            </div>
            }
            {isOwner && (
              <div className="DeleteEdit_img">
                <span onClick={onDeleteClick} className="btn_draw">
                    Delete
                </span>
                <span onClick={toggleEditing} className="btn_draw">
                    Edit
                </span>
              </div>
            )}
          </div>
          <div className="Goods_text">{GoodsObj.text}</div>
          </div>
        )}
      </div>
    );
  };
  
export default Goods;
