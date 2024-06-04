import React,{useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const PostDetail = ({ posts, onDelete }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    console.log("posts dt",posts);
    console.log("post dt",post);
    //console.log("post data",post.id,post.title,post.content);
    const handleDelete = async () => {
        await onDelete(Number(id));
        navigate('/');
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div className="post-detail">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <div className="actions">
                <Link to={`/edit/${post.id}`} className="link-btn">수정</Link>
                <button onClick={handleDelete} className="link-btn">삭제</button>
            </div>
        </div>
    );
};

export default PostDetail;