import React, { useState, useEffect } from "react";
import DRAW from "../components/Draw";
import { dbService } from "../fbase";

const Main = ({ userObj }) => {
    const [designs1, setdesigns1] = useState([]);
    const [designs2, setdesigns2] = useState([]);
    const [designs3, setdesigns3] = useState([]);

    const [UID, setUID]=useState("");
    useEffect(() => {
      if(userObj){
          setUID(userObj.uid)
      }  
      dbService
        .collection("DRAW")
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
      myVar = setTimeout(showPage, 700);
    }
    
    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("myDiv").style.display = "block";
    }
    return (
      <div  onLoad={myFunction()} style={{margin:0}}>
      <div style={{display: 'none'}} id="myDiv" className="animate-bottom">
      <div className="MAIN">
        <div className="MAIN_container">
          <div className="column_container">
            {designs1.map((goods) => (
            <DRAW
              key={goods.id}
              DrawObj={goods}
              isOwner={goods.creatorId === UID}
              />
            ))}
          </div>
          <div className="column_container">
            {designs2.map((goods) => (
            <DRAW
              key={goods.id}
              DrawObj={goods}
              isOwner={goods.creatorId === UID}
              />
            ))}
          </div>
          <div className="column_container">
            {designs3.map((goods) => (
            <DRAW
              key={goods.id}
              DrawObj={goods}
              isOwner={goods.creatorId === UID}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
      </div> 
    );
  };
export default Main;