import { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import './App.css'
import Posts from './components/Posts'
import Pagination from './components/Pagination'

export default function App() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      setPosts(response.data)
      setLoading(false)
    }
    fetchData()
  }, [])

  const indexofLastPost = currentPage * postsPerPage
  const indexofFirstPost = indexofLastPost - postsPerPage
  const currentPost = posts.slice(indexofFirstPost, indexofLastPost)
  //lets change our page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='container mt-5'>
      <h2 className='text-primary mb-3'>My Posts</h2>
      <Posts posts={currentPost} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

//prop validation here

App.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
}
