import React from 'react'
import IPostDetailCardProps from './IPostDetailCardProps'
import './PostDetail.css'

const PostDetailCard: React.FC<IPostDetailCardProps> = props => {
    return (
        <div className="postsDetailCardContainer">
            <ul className="postsDetailCard">
                {props.posts.map(posts => (
                    <li className="posts">
                        <h1><i className="far fa-circle"></i>{posts.title}</h1>
                        <h3>{posts.subposts.subtitle}</h3>
                        <span>{posts.subposts.text.map(subPost => (
                            <div>
                                <h5><i className="fas fa-caret-right"></i>Post: {subPost.textTitle}</h5>
                                <h5><i className="far fa-circle"></i>Content: {subPost.textContent}</h5>
                                
                            </div>
                        ))}
                        </span>
                    </li>)
                )}
            </ul>
        </div>
    )
}

export default PostDetailCard