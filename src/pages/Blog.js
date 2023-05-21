import NavigationBar from "../component/NavigationBar";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../context/UserContext";
import UserInfoComponent from "../component/UserInfoComponent";

import axios from "axios";
import PostComponent from "../component/PostComponent";
import InfiniteScroll from "react-infinite-scroll-component";

const postsBaseUrl = "http://localhost:8084/posts";

function Blog() {
    const {user} = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);


    useEffect(() => {
        console.log("in fetch data")
        axios.get(`${postsBaseUrl}/${page}`)
            .then(function(response) {
                console.log(response.data)
                setPosts(response.data);
            }).catch(function(error) {
            console.log(error);
        })
    }, []);

    const fetchNextPosts = () => {
        axios.get(`${postsBaseUrl}/${page+1}`)
            .then(function(response) {
                console.log(response.data)
                setPosts(prevPosts => [...prevPosts, ...response.data]);
                setPage(prevPage => prevPage + 1);
            }).catch(function(error) {
            console.log(error);
        })
    }

    return (
        <div>
            <UserInfoComponent user={user}/>
            <hr></hr>
            <NavigationBar/>
            <hr></hr>
            <InfiniteScroll
                next={fetchNextPosts}
                hasMore={posts.length < 10}
                loader={<p>Loading...</p>}
                dataLength={posts.length}>
                <div style={{maxWidth: "500px"}}>
            {
                !(posts.length === 0) ? (
                    posts.map((post, ) => (
                        <PostComponent post={post}/>
                    ))
                ) : ""
            }
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Blog;