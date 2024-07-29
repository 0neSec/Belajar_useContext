import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

const SomeComponent = () => {
  // Mengambil nilai 'coba' dan fungsi 'setCoba' dari BlogContext
  const { coba, setCoba } = useContext(BlogContext);

  const handleChange = () => {
    // Memperbarui nilai 'coba' dengan menambahkan 1
    setCoba(coba + 1);
  };

  return (
    <div>
      <p>Nilai coba: {coba}</p>
      <button onClick={handleChange}>Update Coba</button>
    </div>
  );
};

export default SomeComponent;
