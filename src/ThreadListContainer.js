// DO NOT DELETE

import React, { useEffect, useState } from "react";

export const ThreadListContainer = () =>{

  const [threadLists,setThreadLists] = useState([]);
  const [message, setMessage] = useState("初期");
  const [threadTitle,setThreadTitle] = useState("初期タイトル");
  
  useEffect(() =>{
    console.log("effect")
    fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads")
      .then(res => res.json())
      .then(
        (result) =>{
          setThreadLists(result);
        }
      )
  },[]);

  let submitMakeThread = async (e)=>{
    console.log(e)
    alert("test");
    try{
      var res = await fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",{
        method : "POST",
        body: JSON.stringify({
          title : threadTitle
        }),
      });
      let resJSON = await res.JSON();
      if (res.status == 200){
        setThreadTitle("");
        setMessage("OK")
      } else {
        setMessage(res.status)
      }

    } catch (err){
      console.log(err);
      setMessage("error");
    }
  };



  return (
    <div>
      <ul>
        {threadLists.map((thread) => {
          return <li><a href={thread.id} >{thread.title}</a></li>
        })}
      </ul>
      <form onSubmit={(e) => submitMakeThread(e)}>
        <input type="text" placeholder="スレッド名" onChange={(e)=>setThreadTitle(e.target.value)}></input> 
        <button type="submit">スレッド作成</button>
      </form>
      <p>{message}</p>
      <p>{threadTitle}</p>
    </div>
  );
}



export default ThreadListContainer;