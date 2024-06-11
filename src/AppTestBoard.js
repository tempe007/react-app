import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './components/testBoard/Board';
import PostForm from './components/testBoard/PostForm';
import PostDetail from './components/testBoard/PostDetail';
import './App.css';
import axios from "axios";
let App = () =>{
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:4000/posts');
        setPosts(response.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const addPost = async (post) => {
        const response = await axios.post('http://localhost:4000/posts', post);
        setPosts([...posts, response.data]);
        return response.data; // 응답으로 받은 데이터를 반환
    };

    const updatePost = async (updatedPost) => {
        const response = await axios.put(`http://localhost:4000/posts/${updatedPost.id}`, updatedPost);
        setPosts(posts.map(post => post.id === updatedPost.id ? response.data : post));
    };

    const deletePost = async (id) => {
        console.log("deletePost",deletePost);
        await axios.delete(`http://localhost:4000/posts/${id}`);
        setPosts(posts.filter(post => post.id !== id));
    };
    return(
        <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Board posts={posts} />} />
                <Route path="/new" element={<PostForm onSave={addPost} />} />
                <Route path="/post/:id" element={<PostDetail posts={posts} onDelete={deletePost} />} />
                <Route path="/edit/:id" element={<PostForm posts={posts} onSave={updatePost} />} />
            </Routes>
            </div>
        </Router>
    );
}
export default App;