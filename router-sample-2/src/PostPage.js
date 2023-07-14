import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext }                   from 'react';
import api                              from './api/posts.js';
import DataContext                      from './context/DataContext';

const PostPage = () => {
    const { id } = useParams();
    const { posts, setPosts } = useContext(DataContext)
    const post = posts.find(post => (post.id).toString() === id)
    const navigation = useNavigate()

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

  return (
    <main className='PostPage'>
        <article className='post'>
            {post && 
                <>
                    <h2>{post.title}</h2>
                    <h2 className='PostDate'>{post.datetime}</h2>
                    <h2 className='PostBody'>{post.body}</h2>
                    <Link to={`/edit/${post.id}`}>
                        <button className='editButton'>Edit Post </button>   
                    </Link>
                    <button className='deleteButton' onClick={()=>handleDelete(post.id)}>
                        Delete Post
                    </button>
    
                </>
            }    
            {!post && 
                <>
                    <h2>No such Post exists</h2>
                    <p>
                        <Link to="/">Visit HomePage</Link>
                    </p>
                </>
            }
        </article> 
    </main>
  )
}

export default PostPage