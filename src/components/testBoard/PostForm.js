import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const PostForm = ({ posts, onSave }) =>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        if (id) {

            const postData = posts.filter(post  => post.id === id);
            if (postData) {
                setTitle(postData[0].title);
                setContent(postData[0].content);
            }
        }
    }, [id, posts]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, content };
        if (id) {
            await onSave({ id: id, ...newPost });
            navigate(`/post/${id}`);
        } else {
            const result = await onSave(newPost);
            navigate(`/post/${result.id}`); // 응답으로 받은 ID 사용
        }
    };


    return(
        <div>
            <h1>{id ? '글 수정' : '새 글 작성'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>내용</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <button type="submit">{id ? '수정' : '작성'}</button>
            </form>
        </div>
    );
};


export default PostForm;