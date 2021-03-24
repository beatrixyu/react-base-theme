import React from 'react'
import IPostListProps from './IPostListProps'
import './PostList.css'

const PostList: React.FC<IPostListProps> = props => {
    return (
        <div className="postsCardListContainer">
            <ul className="postsListCard">
                {props.posts.map(posts => (
                    <li className="listCardPosts">
                        <span>{posts.title}</span>
                        <br/>
                        <span>{posts.subposts.map(subPost => (
                            <ul>
                                <li><i className="fas fa-caret-right"></i>{subPost.subtitle}</li>
                                {/* <li>{subPost.text}</li> */}

                            </ul>
                        ))}
                        </span>
                        <br/>
                        <br />
                        <span>Read More</span>
                    </li>)
                )}
            </ul>
        </div>
    )
}

export default PostList