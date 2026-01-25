import { useEffect } from 'react'
import { PostsTitle } from '../components/AsciiTitle'
import PostItem from '../components/PostItem'
import { posts } from '../data/posts'
import '../styles/Posts.css'

function Posts() {
  useEffect(() => {
    document.title = 'Adam Zaidi - Posts'
  }, [])

  return (
    <div className="posts-container">
      <div className="posts-header">
        <div className="footnote-buffer"></div>
        <PostsTitle />
        <br />
        <div className="line-link">
          <div className="home-link"></div>
          <div className="line"></div>
        </div>
      </div>
      
      <div className="posts-body">
        <br />
        {posts.map((post) => (
          <PostItem
            key={post.id}
            title={post.title}
            date={post.date}
            url={post.url}
            external={post.external}
            isPdf={post.isPdf}
          />
        ))}
      </div>
    </div>
  )
}

export default Posts
