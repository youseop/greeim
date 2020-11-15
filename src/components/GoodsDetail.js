import React, { useEffect, useState } from "react";
import { dbService } from "../fbase";

const GoodsDetail = ({match}) => {
    
    const [text, settext] = useState("");
    const [img, setimg] = useState("");

    useEffect(() => {
        var CreatedAt = match.params.id*1
        dbService.collection("Design").orderBy("createdAt").onSnapshot((snapshot) => {
        const tempDesignArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        }));
        
        const DetailObj = tempDesignArray.filter((design) => {
          if (design.createdAt === CreatedAt){
              settext(design.text)
              setimg(design.GoodsattachmentUrl_main)
          }
          return true;
        });

        })

    },[])
    return(
        <div className="detail_body">
            <div className="detail_text">{text}</div>
            <img src={img} alt="" className="detail_img_draw"/>
        </div>
    )
}

export default GoodsDetail;