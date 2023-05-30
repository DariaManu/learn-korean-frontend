import {useState} from "react";
import CommentComponent from "./CommentComponent";

function PostComponent(props) {
    const post = props.post;
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(0);
    const [page, setPage] = useState(0);

    return (
        <div>
            <p>{post.datePosted}</p>
            <p>{post.text}</p>
            <CommentComponent postId={post.postId}></CommentComponent>
        </div>
    )
}

export default PostComponent;