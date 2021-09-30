import React, {useState} from 'react'
import logo from './logo.svg'
import {comments, CommentType} from '../data/comments'
import Replies from './Replies'

const Comments = ({username, userImagePath, commentText, likeNum, replies}:CommentType) => {
    //ถ้า like > 0 ให้ส่ง html ที่แสดงโลโก้และจำนวนไลค์ออกไป ในทางตรงกันข้าม ไม่ต้องส่งอะไรเลย
    const checkLike = (likeNum: number) => {
        if(likeNum > 0){
            return (
                <div className='flex items-center'>
                    <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                    <p className='text-gray-500'>{likeNum}</p>
                </div>
            )
        }else{
            return null
        }
    }
    return (
        <div>   
            <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src={userImagePath}></img>
                <div className="bg-gray-200 rounded-lg p-2">
                    <p className="font-semibold">{username}</p>
                    <p>{commentText}</p>
                    {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                    {checkLike(likeNum)}
                </div>
            </div>
            {/*นำข้อมูลจาก replies มา map โดยส่งแต่ละข้อมูลให้ Replies component */}
            {/* components Comments และ Replies ส่วนใหญ่เหมือนกัน ต่างกันตรงที่ Replies มี padding มากกว่าเท่านั้น (pl-14) */}
            {replies.map(replie => {
                return (
                    <Replies
                        username={replie.username}
                        userImagePath={replie.userImagePath}
                        commentText={replie.commentText}
                        likeNum={replie.likeNum}
                        replies={replie.replies}
                    />
                )
            })}

        </div>
        
        
        
    )
}
export default Comments