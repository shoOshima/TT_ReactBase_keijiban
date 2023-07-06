
import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";

export const Thread = () =>{
  const {thread_id,title} = useParams();

  const [posts,setPosts] = useState([]);
  const [postMes,setPostMes] = useState("");

  let apiUrl = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/" + thread_id + '/posts' 
 
  useEffect(() =>{
    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) =>{
          setPosts(result.posts);
        }
      )
  },[postMes]);

  let submitPost = async (e)=>{
    e.preventDefault();
    fetch(apiUrl, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post : postMes
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setPostMes("");
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

  return (
    <div>
      <h1>スレッド名:{title}</h1>
      <form onSubmit={(e) => submitPost(e)}>
        <textarea rows="3" cols="60" placeholder="投稿する内容を書く" onChange={(e) => setPostMes(e.target.value)} value={postMes}></textarea>
        <button type="submit">投稿する</button>
      </form>
      <h2>▼投稿一覧</h2>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.post}</li>
        })}
      </ul>
    </div>
  )
}

export default Thread;