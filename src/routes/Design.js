import React, { useState, useEffect } from "react";
import Goods from "../components/Goods";
import { dbService } from "../fbase";

const Design = ({ userObj, match }) => {
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
    var myVar;
    
    function myFunction() {
      myVar = setTimeout(showPage, 2000);
    }
    function showPage() {
      if (document.getElementById("myDiv")){
        document.getElementById("myDiv").style.display = "block";
        document.getElementById("loading").style.display = "none";
      }
    }
    return (
      <div>
      <div id="loading" className="loadingCOMPONENT">
        <img src="https://i.imgur.com/j68N2V9.png" alt="" className="load_img"/>
        {/* <div className="loadingTEXT">loading</div> */}
      </div>
      <div style={{display: 'none'}} id="myDiv" className="animate-bottom">
      <div className="MAIN">
        <div className="MAIN_container">
          <div className="column_container">
            {designs1.map((goods) => (
            <Goods
              id={goods.createdAt}
              match={match}
              key={goods.id}
              GoodsObj={goods}
              isOwner={goods.creatorId === UID}
              />
            ))}
          </div>
          <div className="column_container">
            {designs2.map((goods) => (
            <Goods
              id={goods.createdAt}
              match={match}
              key={goods.id}
              GoodsObj={goods}
              isOwner={goods.creatorId === UID}
              />
            ))}
          </div>
          <div className="column_container">
            {designs3.map((goods) => (
            <Goods
              id={goods.createdAt}
              match={match}
              key={goods.id}
              GoodsObj={goods}
              isOwner={goods.creatorId === UID}
              />
            ))}
          </div>
        </div>
        <div  onLoad={myFunction()} style={{margin:0}}></div>
      </div>
      </div>
      </div>
    );
  };
export default Design;