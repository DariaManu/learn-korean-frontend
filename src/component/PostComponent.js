import {useState} from "react";

function PostComponent(props) {
    const post = props.post;
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(0);
    const [page, setPage] = useState(0);

    return (
        <div>
            <p>{post.datePosted}</p>
            <p>{post.text}</p>
            <button>Load Comments</button>
            {
                !(comments.length === 0) && (
                    comments.map((comment) => (
                        <div>Comment</div>
                    ))
                )
            }
        </div>
    )
}

export default PostComponent;