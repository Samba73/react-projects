import { createContext, useState, useEffect } from "react";
import api                                    from '../api/posts.js';

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [posts, setPosts] = useState([]);

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
    
        <DataContext.Provider value={
            {
                search, setSearch, 
                searchResults, 
                posts, setPosts
            }
        }>
            {children}
        </DataContext.Provider>    
    )
}

export default DataContext;