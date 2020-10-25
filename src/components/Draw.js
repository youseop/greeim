import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { dbService, storageService } from "../fbase";

const DRAW = ({ DrawObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newDraws, setNewDraws] = useState(DrawObj.text);
    const [imgShow, setimgShow] = useState(false);
    const onDeleteClick = async () => {
      const ok = window.confirm("Are you sure?");
      if (ok) {
        await dbService.doc(`DRAW/${DrawObj.id}`).delete();
        await storageService.refFromURL(DrawObj.attachmentUrl).delete();
      }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
      event.preventDefault();
      await dbService.doc(`DRAW/${DrawObj.id}`).update({
        text: newDraws,
      });
      setEditing(false);
      alert("Update")
    };
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      setNewDraws(value);
    };

    const imgOnclick = () => {
      setimgShow(!imgShow);
    };
    return (
      <div className={(imgShow ? "show_onclick": "show")}>
        {editing ? (
          <div className="edit_draw">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Edit"
                value={newDraws}
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
        ) : (<div className="Goods_controller">
        <div className="imgbox_draw">
          {DrawObj.attachmentUrl && 
          <div onClick={imgOnclick}>
            <img src={DrawObj.attachmentUrl} alt="" className="img_draw"/>
            <div className="darkness_draw">
                <FontAwesomeIcon icon={faPlus} />
            </div>
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
        <div className="Goods_text">{DrawObj.text}</div>
        </div>
        )}
      </div>
    );
  };
  
export default DRAW;
