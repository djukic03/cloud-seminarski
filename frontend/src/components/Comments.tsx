import React from 'react'
import OneComment from './OneComment';
import { Comment } from '../models/comment';

interface CommentsProps {
    comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({comments}) => {
  return (
    <div className="container" style={{paddingBottom: '8%'}}>
        <div className="row justify-content-center" style={{width: '100%'}}>
            <div className="col-lg-10 posts-list">
                <div className="comments-area">
                    <h4>03 Comments</h4>
                    <OneComment comment={comments[0]}></OneComment>
                    <OneComment comment={comments[1]}></OneComment>
                    <OneComment comment={comments[2]}></OneComment>
                </div>
                <div className="comment-form">
                    <h4 style={{color: '#2c234d'}}>Leave a Comment</h4>
                    <form className="form-contact comment_form" action="#" id="commentForm">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <textarea className="form-control w-100" name="comment" id="comment" placeholder="Write Comment" rows={9}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="button button-contactForm btn_1 boxed-btn">Post Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Comments