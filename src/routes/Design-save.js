import React, { useState, useEffect } from "react";
import Goods from "../components/Goods";
import { dbService } from "../fbase";

const Design = ({ userObj }) => {
    const [designs, setdesigns] = useState([]);
    const [UID, setUID]=useState("");
    useEffect(() => {
        if(userObj){
            setUID(userObj.uid)
        }  

      dbService
        .collection("Design")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
          const DesignArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setdesigns(DesignArray);
        });
    }, []);
    return (
      <div className="MAIN">
        <div className="MAIN_container">
          {designs.map((goods) => (
            <Goods
              key={goods.id}
              GoodsObj={goods}
              isOwner={goods.creatorId === UID}
            />
          ))}
        </div>
      </div>
    );
  };
export default Design;