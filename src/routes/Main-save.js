import React, { useState, useEffect } from "react";
import DRAW from "../components/Draw";
import { dbService } from "../fbase";

const Main = ({ userObj }) => {
    const [designs, setdesigns] = useState([]);
    const [UID, setUID]=useState("");
    useEffect(() => {
      if(userObj){
          setUID(userObj.uid)
      }  

      dbService
        .collection("DRAW")
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
            <DRAW
              key={goods.id}
              DrawObj={goods}
              isOwner={goods.creatorId === UID}
            />
          ))}
        </div>
      </div>
    );
  };
export default Main;