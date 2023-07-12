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

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigation = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "March 01, 2023 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "March 01, 2023 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "March 01, 2023 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "March 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ]);

   const handleDelete = (id) => {
    const filteredPost = posts.filter((post) => (post.id)!==id)
    setPosts(filteredPost)
    navigation("/")
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp")
    const newPost = { id, title: postTitle, datetime, body: postBody}
    const allPosts = [...posts, newPost]
    setPosts(allPosts)
    setPostBody('')
    setPostTitle('')
    navigation("/")
  }

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
          <Route path="post/:id" element={<PostPage  posts={posts} handleDelete={handleDelete}/>} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
