import { useEffect } from 'react';
import { Link , useParams } from 'react-router-dom';


const EditPost = ( { posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit } ) => {
    const { id } = useParams();
    const post = posts.find((post) => (post.id).toString() === id)
 
    useEffect(() => {
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post, setEditTitle, setEditBody])



  return (
    <main className='NewPost'>
        <h2>Edit Post</h2>
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
    </main>
  )
}

export default EditPost