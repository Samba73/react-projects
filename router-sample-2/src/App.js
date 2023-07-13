import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Home from './Home.js';
import NewPost from './NewPost.js';
import PostPage from './PostPage.js';
import Missing from './Missing.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import About from './About.js';
import { format } from 'date-fns';
import api from './api/posts.js';
import EditPost from './EditPost.js';

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigation = useNavigate();
  const [posts, setPosts] = useState([]);

   const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      const filteredPost = posts.filter((post) => (post.id)!==id)
      setPosts(filteredPost)
      navigation("/")
    } catch(err){
      if (err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }else {
        console.log(`Error: ${err.message}`)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp")
    const newPost = { id, title: postTitle, datetime, body: postBody}
    try {
      const response = await api.post('/posts', newPost)
      const allPosts = [...posts, response.data]
      setPosts(allPosts)
      setPostBody('')
      setPostTitle('')
      navigation("/")
    } catch(err) {
      if (err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      } else {
        console.log(`Error: ${err.message}`)
      }
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp")
    const editPost = { id, title: editTitle, datetime, body: editBody}
    try{
        const response = await api.put(`/posts/${id}`, editPost)
        setPosts(posts.map((post) => post.id === id ? {...response.data} : post))
        setEditTitle('')
        setEditBody('')
        navigation("/")
    } catch(err) {
      if (err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      } else {
        console.log(`Error: ${err.message}`)
      }
    }


  }


  useEffect(() => {
    const fetchPosts = async()=> {
      try {
          const response = await api.get('/posts');
          setPosts(response.data);
      } catch(err){
        if (err.response){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchPosts();
  },[])

  useEffect(()=> {
    const filteredPosts = posts.filter((post) => ((post.title).toLowerCase()).includes(search.toLowerCase()) || ((post.body).toLowerCase()).includes(search.toLowerCase()))
    setSearchResults(filteredPosts.reverse())
  },[search, posts])
  return (
    <div className="App">
        <Header title='React JS Blog' />
        <Nav 
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route path="/" element={<Home posts={searchResults}/>} />      
          <Route path="post" element={<NewPost 
                      postTitle={postTitle} 
                      setPostTitle={setPostTitle}
                      postBody={postBody} 
                      setPostBody={setPostBody}
                      handleSubmit={handleSubmit}             
                    />} 
          />  
          <Route path="edit/:id" element={<EditPost 
                      posts={posts}
                      editTitle={editTitle} 
                      setEditTitle={setEditTitle}
                      editBody={editBody} 
                      setEditBody={setEditBody}
                      handleEdit={handleEdit}             
                    />} 
          />  
          <Route path="post/:id" element={<PostPage  posts={posts} handleDelete={handleDelete}/>} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
