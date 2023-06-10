import {useState} from "react";
import CommentComponent from "./CommentComponent";

import "./PostComponent.css"

function PostComponent(props) {
    const post = props.post;
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(0);
    const [page, setPage] = useState(0);

    return (
        <div className={"post"}>
            <p> <b>POSTED ON {post.datePosted} </b></p>
            <p>{post.text}</p>
            <CommentComponent postId={post.postId}></CommentComponent>
        </div>
    )
}

export default PostComponent;