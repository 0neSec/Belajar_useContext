import React, { createContext, useState } from 'react';

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [coba, setCoba] = useState(0);

  return (
    <BlogContext.Provider value={{ coba, setCoba }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
