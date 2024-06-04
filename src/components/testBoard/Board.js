import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PostList from './PostList';

const Board =() =>{
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);
    return(
        <div>
            <h1>게시판</h1>
            <Link to="/new" className="link-btn">새 글 작성</Link>
            <PostList posts={posts} />
        </div>
    );
}
export default Board;