
import React, {useState} from "react";

export const CreateThread = () =>{
  const [message, setMessage] = useState("初期");
  const [threadTitle,setThreadTitle] = useState("初期タイトル");

  let submitMakeThread = async (e)=>{
    e.preventDefault();
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
      setMessage("error");
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => submitMakeThread(e)}>
        <input type="text" placeholder="スレッド名" onChange={(e)=>setThreadTitle(e.target.value)}></input> 
        <button type="submit">スレッド作成</button>
      </form>
      <p>スレッド作成結果：{message}</p>
    </div>
  )
}

export default CreateThread;