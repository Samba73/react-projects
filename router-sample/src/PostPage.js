import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PostPage = ( { posts, handleDelete } ) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)
  return (
    <main className='PostPage'>
        <article className='post'>
            {post && 
                <>
                    <h2>{post.title}</h2>
                    <h2 className='PostDate'>{post.datetime}</h2>
                    <h2 className='PostBody'>{post.body}</h2>
                    <button onClick={()=>handleDelete(post.id)}>
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