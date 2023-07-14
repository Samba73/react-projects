import React                    from 'react';
import { useNavigate }          from 'react-router-dom';
import { useContext, useState } from 'react';
import { format }               from 'date-fns';
import api                      from './api/posts.js';
import DataContext              from './context/DataContext';

const NewPost = () => {
    
      const [postTitle, setPostTitle] = useState('');
      const [postBody, setPostBody] = useState('');
      const { posts, setPosts} = useContext(DataContext)
      const navigation = useNavigate()

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
  return (
    <main className='NewPost'>
        <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title</label>
          <input
            type="text"
            required
            id="postTitle"
            placeholder='Title'
            value={postTitle}
            onChange={(e)=> setPostTitle(e.target.value)}
          ></input>  
          <label htmlFor="postBody">Body</label>
          <textarea
            required
            id="postBody"
            placeholder='Body'
            value={postBody}
            onChange={(e)=> setPostBody(e.target.value)}
          ></textarea>  
          <button type="submit">Submit</button>
        </form>  
    </main>
  )
}

export default NewPost