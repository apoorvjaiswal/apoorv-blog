import { constants } from 'buffer';
import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {

  const url = "http://localhost:8000/blogs";
  const { data, isPending, error } = useFetch({ url });

  return (
    <div className="home">
      {error && <div><h1>{error}</h1></div>}
      {isPending && <div>Loading...</div>}
      {data && (<div>
        <BlogList blogs={data} title="All Blogs" />
        <BlogList blogs={data.filter((blog: any) => blog.author === 'apoorv')} title="My Blogs" />
      </div>
    )}
    </div>
  )
}

export default Home