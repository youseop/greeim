import React, { useState, useEffect } from "react";
import Goods from "../components/Goods";
import { dbService } from "../fbase";

const Design = ({ userObj }) => {
  const [designs1, setdesigns1] = useState([]);
  const [designs2, setdesigns2] = useState([]);
  const [designs3, setdesigns3] = useState([]);
    const [UID, setUID]=useState("");
    useEffect(() => {
        if(userObj){
            setUID(userObj.uid)
        }  

      dbService
        .collection("Design")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
          const tempDesignArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          const DesignArray1 = tempDesignArray.filter((design) => {
            const bool =tempDesignArray.indexOf(design)%3 ===0;
            return bool;
          });
          const DesignArray2 = tempDesignArray.filter((design) => {
            const bool =tempDesignArray.indexOf(design)%3 ===1;
            return bool;
          });
          const DesignArray3 = tempDesignArray.filter((design) => {
            const bool =tempDesignArray.indexOf(design)%3 ===2;
            return bool;
          });
          setdesigns1(DesignArray1);
          setdesigns2(DesignArray2);
          setdesigns3(DesignArray3);
        });
    }, []);
    return (
      <div className="MAIN">
        <div className="MAIN_container">
          <div className="column_container">
            {designs1.map((goods) => (
            <Goods
              key={goods.id}
              GoodsObj={goods}
              isOwner={goods.creatorId === UID}
              />
            ))}
          </div>
          <div className="column_container">
            {designs2.map((goods) => (
            <Goods
              key={goods.id}
              GoodsObj={goods}
              isOwner={goods.creatorId === UID}
              />
            ))}
          </div>
          <div className="column_container">
            {designs3.map((goods) => (
            <Goods
              key={goods.id}
              GoodsObj={goods}
              isOwner={goods.creatorId === UID}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
export default Design;