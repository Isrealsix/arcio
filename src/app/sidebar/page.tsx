'use client'

import React, { useEffect, useState } from 'react'
import './page.css';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type Repo = {
  name: string
  stargazers_count: number
}

// https://jsonplaceholder.typicode.com/posts

// async function items() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   console.log(res);
// }

// useEffect(() => {
//         async function fetchData() {
//           const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // Call your API Route or external API
//           const result = await res.json();
//           console.log(result);
//         }
//         fetchData();
//       }, []);



export default async function Page() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}