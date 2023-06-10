import {useState} from "react";

import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import "./CommentComponent.css"

const commentsBaseUrl = "http://localhost:8084/post"

function CommentComponent(props) {
    const postId = props.postId;
    const [comments, setComments] = useState([]);
    const [maxNrComments, setMaxNrComments] = useState(0);
    const [page, setPage] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);
    const [newCommentText, setNewCommentText] = useState("");

    const fetchFirstComments = () => {
        console.log("in fetchFirsComments");

        axios.get(`${commentsBaseUrl}/${postId}/comments/count`)
            .then(function (response) {
                console.log(response.data);
                setMaxNrComments(response.data);
            }).catch(function (error) {
                console.log(error);
        })

        axios.get(`${commentsBaseUrl}/${postId}/comments/0`)
            .then(function(response) {
                console.log(response.data);
                setComments(response.data);
            }).catch(function (error) {
                console.log(error);
        })

        setPage(0);
    }

    const fetchNextComments = () => {
        axios.get(`${commentsBaseUrl}/${postId}/comments/${page+1}`)
            .then(function(response) {
                console.log(response.data);
                setComments(prevComments => [...prevComments, ...response.data]);
                setPage(prevPage => prevPage + 1);
            }).catch(function(error) {
                console.log(error);
        })
    }

    const handleWriteComment = (event) => {
        event.preventDefault();
        console.log(newCommentText);
        axios.post(`${commentsBaseUrl}/${postId}/comments`, {
            text: newCommentText
        }).then(function(response) {
            console.log(response.data);
            fetchFirstComments();
        }).catch(function(error) {
            console.log(error);
        })

        setNewCommentText("");
    }

    if (!showComments) {
        return (
            <div className={"load-comments-div"}>
                <button onClick={event => {
                    setShowComments(true);
                    if (firstLoad) {
                        fetchFirstComments();
                        setFirstLoad(false);
                    }
                }
                }>Load Comments</button>
            </div>
        )
    } else {
        return (
            <div className={"comment-div"}>
                <form id={"comment-form"}>
                    <textarea id={"write-comment-text-area"} name={"write-comment-text-area"}
                        onChange={e => setNewCommentText(e.target.value)} value={newCommentText}>
                    </textarea>
                    <br/>
                    <button id={"write-comment-button"} onClick={handleWriteComment}>Post</button>
                </form>
                <InfiniteScroll
                    next={fetchNextComments}
                    hasMore={comments.length < maxNrComments}
                    loader={<p>Loading...</p>}
                    dataLength={comments.length}
                    id={"infinite-scroll-component"}>
                    {
                        !(comments.length === 0) ? (
                            comments.map((comment) => (
                                <div className={"single-comment-div"}>
                                    <p> <b>POSTED ON {comment.datePosted}</b> </p>
                                    <p>{comment.text}</p>
                                </div>

                            ))
                        ) : (
                            <p>Be the first to comment :D</p>
                        )
                    }
                </InfiniteScroll>
                <button id={"hide-comments-button"} onClick={event => setShowComments(false)}>Hide Comments</button>
            </div>
        )
    }
}

export default CommentComponent;