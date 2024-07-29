import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const {  loading, coba } = useContext(BlogContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  console.log(coba);

  return (
    <div>
      <h1>Blog List</h1>
    
      <p>{coba}</p>
      <Link to="/">home</Link>
    </div>
  );
};

export default BlogList;
