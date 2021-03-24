import React from 'react'
import IPostPageProps from './IPostPageProps'
import PostList from '../postList/PostList'
import Footer from '../footer/Footer'
import library from '../assets/library.png'
import SearchBar from '../searchBar/search'
import './PostPage.css'
    
const PostPage: React.FC<IPostPageProps> = ({
    search, onSubmit
}) => {

    const posts = [
        { id: '1', title: 'Linux', subposts: [{subtitle:'Command Cheat Sheet',text:'How to run a command as `sudo`?'}, {subtitle:'Bash scripting', text:'How to get the name of the user who executed a bash script as sudo?'},{subtitle:'Background jobs using cron', text:'BasicsRestart cron after modification of /ect/crontab file systemct'},{subtitle:'Python Installation', text:'Check, if it is already installed using python3 -VIf, not it is already shipped with Ubuntu 20.04, so use sudo apt update sudo apt -y'}] },
        { id: '2', title: 'Linux', subposts: [{subtitle:'Command Cheat Sheet',text:'How to run a command as `sudo`?'}, {subtitle:'Bash scripting', text:'How to get the name of the user who executed a bash script as sudo?'},{subtitle:'Background jobs using cron', text:'BasicsRestart cron after modification of /ect/crontab file systemct'},{subtitle:'Python Installation', text:'Check, if it is already installed using python3 -VIf, not it is already shipped with Ubuntu 20.04, so use sudo apt update sudo apt -y'}] },
        { id: '3', title: 'Linux', subposts: [{subtitle:'Command Cheat Sheet',text:'How to run a command as `sudo`?'}, {subtitle:'Bash scripting', text:'How to get the name of the user who executed a bash script as sudo?'},{subtitle:'Background jobs using cron', text:'BasicsRestart cron after modification of /ect/crontab file systemct'},{subtitle:'Python Installation', text:'Check, if it is already installed using python3 -VIf, not it is already shipped with Ubuntu 20.04, so use sudo apt update sudo apt -y'}] },
        { id: '4', title: 'Linux', subposts: [{subtitle:'Command Cheat Sheet',text:'How to run a command as `sudo`?'}, {subtitle:'Bash scripting', text:'How to get the name of the user who executed a bash script as sudo?'},{subtitle:'Background jobs using cron', text:'BasicsRestart cron after modification of /ect/crontab file systemct'},{subtitle:'Python Installation', text:'Check, if it is already installed using python3 -VIf, not it is already shipped with Ubuntu 20.04, so use sudo apt update sudo apt -y'}] },
                  ]
    return (
        <div className="PostDiv">
            <div className="postContainer">
                <div className="postContainerOne">
                <div className="left"><img src={library} alt=""/></div>
                <div className="right">
                    <h3>React.Base</h3>
                <h1>
                  Library Posts
                </h1>
                <h3>Optimizing your coding experience</h3>
                </div>
                </div>
            </div>
            <SearchBar enteredText={search}/>
            <div className="postListsContainer">
                <PostList posts={posts} />
            </div>
        {/* <button
        onClick={onSubmit}
        >   Post Page      
        </button> */}
            <Footer></Footer>
        </div>
    )
}


export default PostPage;