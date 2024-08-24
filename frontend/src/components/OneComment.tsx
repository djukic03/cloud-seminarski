import React from 'react'
import { Comment } from '../models/comment'

interface OneCommentProps {
    comment: Comment;
}

const OneComment: React.FC<OneCommentProps> = ({comment}) => {
  return (
    <div className="comment-list">
        <div className="single-comment justify-content-between d-flex">
            <div className="user justify-content-between d-flex">
                <div className="thumb">
                    <img src={comment.img} alt=""/>
                </div>
                <div className="desc">
                    <p className="comment">
                        {comment.comment}
                    </p>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <h5>
                                <a>{comment.name}</a>
                            </h5>
                            <p className="date">{comment.date} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OneComment