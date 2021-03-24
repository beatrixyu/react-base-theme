import React from 'react'
import IPostDetailProps from './IPostDetailProps'
import PostDetailCard from './PostDetailCard'
import Footer from '../footer/Footer'
import SearchBar from '../searchBar/search'

import yellowLogoS from '../assets/yellowLogoS.png'
import yellowLogoL from '../assets/yellowLogoL.png'

import './PostDetail.css'
    
const PostDetail: React.FC<IPostDetailProps> = ({
    search, onSubmit
}) => {

    const posts = [
        { id: '1', title: 'Linux', subposts: {subtitle:'Command Cheat Sheet',text:[{textTitle:'How to run a command as `sudo`?', textContent:'textContent'},{textTitle:'Bash scripting', 
        textContent:'textContent'},{textTitle:'Background jobs using cron', textContent:'textContent'},{textTitle:'Python Installation', textContent:'textContent'}]} },
        { id: '2', title: 'Docker', subposts: {subtitle:'Command Cheat Sheet',text:[{textTitle:'How to run a command as `sudo`?', textContent:'textContent'},{textTitle:'How to run a command as `sudo`?', textContent:'textContent'},{textTitle:'How to run a command as `sudo`?', textContent:'textContent'},{textTitle:'How to run a command as `sudo`?', textContent:'textContent'},{textTitle:'How to run a command as `sudo`?', textContent:'textContent'}]} },

        { id: '3', title: 'Sudo', subposts: {subtitle:'Command Cheat Sheet',text:[{textTitle:'How to run a command as `sudo`?', textContent:'textContent'},{textTitle:'How to run a command as `sudo`?', textContent:'textContent'},{textTitle:'How to run a command as `sudo`?', textContent:'textContent'},{textTitle:'How to run a command as `sudo`?', textContent:'textContent'},{textTitle:'How to run a command as `sudo`?', textContent:'textContent'}]} },
        { id: '4', title: 'Python', subposts: { subtitle: 'Command Cheat Sheet', text: [{ textTitle: 'How to run a command as `sudo`?', textContent: 'textContent' }, { textTitle: 'How to run a command as `sudo`?', textContent: 'textContent' }, { textTitle: 'How to run a command as `sudo`?', textContent: 'textContent' }, { textTitle: 'How to run a command as `sudo`?', textContent: 'textContent' }, { textTitle: 'How to run a command as `sudo`?', textContent: 'textContent' }] } },
    ]
    return (
        <div className="PostDetailDiv">
            <div className="postDetailContainer">
                <div className="postDetailContainerOne">
                    <div className="postdetailLeft"><img src={yellowLogoS} alt="" />
                       <div className="searchBarPost"></div> <SearchBar enteredText={search} />
                        </div>
                <div className="postdetailRight">
                <h1>
                    Posts
                </h1>
                    <div className="leftImg"><img src={yellowLogoL} alt="" /></div>
                </div>
                </div>
            </div>
            <div className="postsDetailCardContainer"> 
            <div className="postsDetailCardLeft">
                <PostDetailCard posts={posts} />
            </div>
            <div className="postsDetailCardRight">
                <PostDetailCard posts={posts} />
            </div>

            </div>
        {/* <button
        onClick={onSubmit}
        >   Post Page      
        </button> */}
            <Footer></Footer>
        </div>
    )
}


export default PostDetail;