import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchBlogs } from '../../../redux/features/blogs/blogsSlice';
import Card from './Card';

const PostCards = () => {
  const dispatch = useDispatch();
  const {blogs, isLoading, isError, error} = useSelector((state) => state.blogs);

  const {tags, search} = useSelector((state) => state.filter)
  console.log(tags, search);
  
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    dispatch(fetchBlogs({tags, search}));
  }, [dispatch, tags, search]);

  
  const paginatedBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  const handlePageChange = (newPage) =>{
    setCurrentPage(newPage)
  }

console.log(blogs);

  return (
    <div className="w-full lg:w-2/3">
            
      {
        !isError && !isLoading && paginatedBlogs?.length > 0 ? (<div>
          {
            paginatedBlogs.map((blog, index) => (<Card blog={blog} key={index}/>))
          }
          <div className='space-x-2'>
            <button 
              className='px-2 bg-slate-400 text-white rounded cursor-pointer'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev Page
            </button>
            <span>{currentPage}</span>
            <button
              className='px-2 bg-slate-500 text-white rounded cursor-pointer'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === 15}
            >
              Next Page 
            </button>
          </div>
        </div>) : <div>No blogs found</div>
      }

          </div>
  )
}

export default PostCards