import { useContext, useEffect, useState }  from 'react';
import {  Link, useParams, useNavigate }    from 'react-router-dom';
import { format }                           from 'date-fns';
import api                                  from './api/posts.js';
import DataContext                          from './context/DataContext';


const EditPost = () => {
    const { id } = useParams();
    
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const { posts, setPosts } = useContext(DataContext)
    const post = posts.find((post) => (post.id).toString() === id)
    const navigation = useNavigate()

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
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post, setEditTitle, setEditBody])



  return (
    <main className='NewPost'>
        <h2>Edit Post</h2>
        {post && 
          <form className='newPostForm' onSubmit = {(e)=> e.preventDefault()}>
            <label htmlFor="editTitle">Title</label>
            <input
              type="text"
              required
              id="editTitle"
              placeholder='Title'
              value={editTitle}
              onChange={(e)=> setEditTitle(e.target.value)}
            ></input>  
            <label htmlFor="postBody">Body</label>
            <textarea
              required
              id="postBody"
              placeholder='Body'
              value={editBody}
              onChange={(e)=> setEditBody(e.target.value)}
            ></textarea>  
            <button type="submit" onClick={()=> handleEdit(post.id)}>Submit</button>
          </form>  
        }  
        {!post && 
          <>
          <h2>No such Post exists</h2>
          <p>
              <Link to="/">Visit HomePage</Link>
          </p>
    </>
        
        }
    </main>
  )
}

export default EditPost