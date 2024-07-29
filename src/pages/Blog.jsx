import React from 'react'
import BlogList from '../components/BlogList'
import { BlogProvider } from '../context/BlogContext'
import SomeComponent from '../components/some'
import { Link } from 'react-router-dom'

export default function Blog() {
    return (
        <BlogProvider>
            <div>
                {/* <BlogList/> */}
                <SomeComponent/>
                <Link to={'/'}>home</Link>
                
            </div>
        </BlogProvider>
    )
}
