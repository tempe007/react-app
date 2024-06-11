import React,{useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const PostDetail = ({ posts, onDelete }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(posts);
    console.log("posts id",id);
    console.log("posts dt",posts);
    console.log("post dt",post)
    const postData = posts.filter(post  => post.id === id);
    console.log("postData",postData)
    //console.log("post data",post.id,post.title,post.content);
    const handleDelete = async () => {
        await onDelete(id);
        navigate('/');
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div className="post-detail">
            <h1>{postData[0].title}</h1>
            <p>{postData[0].content}</p>
            <div className="actions">
                <Link to={`/edit/${postData[0].id}`} className="link-btn">수정</Link>
                <button onClick={handleDelete} className="link-btn">삭제</button>
            </div>
        </div>
    );
};

export default PostDetail;