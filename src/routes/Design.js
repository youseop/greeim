import React, { useState, useEffect } from "react";
import Goods from "../components/Goods";
import { dbService } from "../fbase";

const Design = ({ userObj }) => {
    const [designs, setdesigns] = useState([]);
    useEffect(() => {
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
      <div>
        <div style={{ marginTop: 30 }}>
          {designs.map((goods) => (
            <Goods
              key={goods.id}
              GoodsObj={goods}
              isOwner={goods.creatorId === userObj.uid}
            />
          ))}
        </div>
      </div>
    );
  };
export default Design;