import NavigationBarComponent from "../component/NavigationBarComponent";
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
    const [maxNrPosts, setMaxNrPosts] = useState(0);
    const [newPostText, setNewPostText] = useState("");

    useEffect(() => {
        console.log("in fetch data")
        fetchFirstPosts();
    }, []);

    const fetchFirstPosts = () => {
        axios.get(`${postsBaseUrl}/count`)
            .then(function(response) {
                console.log(response.data)
                setMaxNrPosts(response.data);
            }).catch(function(error) {
            console.log(error);
        })

        axios.get(`${postsBaseUrl}/0`)
            .then(function(response) {
                console.log(response.data)
                setPosts(response.data);
            }).catch(function(error) {
            console.log(error);
        })

        setPage(0);
    }

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

    const handleWritePost = (event) => {
        event.preventDefault();
        console.log(newPostText);
        axios.post(`${postsBaseUrl}`, {
            text: newPostText
        }).then(function (response) {
            console.log(response.data);
            fetchFirstPosts();
        }).catch(function(error) {
            console.log(error);
        })

        setNewPostText("");
    }

    return (
        <div>
            <hr></hr>
            <NavigationBarComponent/>
            <hr></hr>

            <form>
                <textarea id={"write-post-text-area"} name={"write-post-text-area"}
                    onChange={e => setNewPostText(e.target.value)} value={newPostText}></textarea>
                <button onClick={handleWritePost}>Post</button>
            </form>

            <InfiniteScroll
                next={fetchNextPosts}
                hasMore={posts.length < maxNrPosts}
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