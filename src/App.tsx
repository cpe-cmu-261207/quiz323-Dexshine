import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import Comments from './components/Comments';
import {comments} from './data/comments'

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <Post/>

        {/* comments section */}
        <div className="">

          {/* normal comment */}
          {/*นำข้อมูลจาก comments.ts มา map โดยส่งแต่ละข้อมูลให้ Comments component */}
          {comments.map(comment => {
            return (
              <Comments
                username={comment.username}
                userImagePath={comment.userImagePath}
                commentText={comment.commentText}
                likeNum={comment.likeNum}
                /* replies : ส่ง array ของ replies เข้าไป */
                replies={comment.replies}
              />
            )
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
