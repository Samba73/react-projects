import React from 'react'

const NewPost = ( { 
                  postTitle, setPostTitle, 
                  postBody, setPostBody, 
                  handleSubmit } ) => {
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