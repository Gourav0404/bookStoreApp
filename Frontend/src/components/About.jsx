import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios'

const About = () => {

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        setBook(res.data.filter((book) => book.category === "free"));
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, [])
  return (
    <>
      <div className=' px-4 md:px-20 '>
        <div className=' dark:bg-slate-900 dark:text-white items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl pt-28'>About Us </h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum nam rerum illo nesciunt officia vel quibusdam reprehenderit et fugit, odio iusto totam modi excepturi quae! Voluptas nobis omnis hic provident temporibus architecto assumenda, dolores similique corporis saepe unde officia ducimus necessitatibus, ab illo repellendus distinctio labore autem est.</p>
          <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-pink-700  duration-300' >Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
          {
            book.map((item) => (
              <Cards item={item} key={item.id} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default About;

