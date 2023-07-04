// DO NOT DELETE

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Thread from "./Thread";

export const ThreadListContainer = () =>{

  const [threadLists,setThreadLists] = useState([]);
 
  useEffect(() =>{
    fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads")
      .then(res => res.json())
      .then(
        (result) =>{
          setThreadLists(result);
        }
      )
  },[]);

  return (
    <div>
      <ul>
        {threadLists.map((thread) => {
          return <li key={thread.id}><Link to={'/thread/' + thread.id +'/' + thread.title}>{thread.title}</Link></li>
        })}
      </ul>
      <Link to='/thread/new'>スレッド作成画面へ</Link>
    </div>
  );
}



export default ThreadListContainer;