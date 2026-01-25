import { Routes, Route } from 'react-router-dom'
import Terminal from './pages/Terminal'
import Home from './pages/Home'
import Posts from './pages/Posts'
import NotFound from './pages/NotFound'
import AIArticle from './pages/articles/AIArticle'
import CGIArticle from './pages/articles/CGIArticle'
import ChatGPTArticle from './pages/articles/ChatGPTArticle'
import HPArticle from './pages/articles/HPArticle'
import ShortFormArticle from './pages/articles/ShortFormArticle'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Terminal />} />
      <Route path="/old" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/aiarticle" element={<AIArticle />} />
      <Route path="/posts/cgiarticle" element={<CGIArticle />} />
      <Route path="/posts/chatgptarticle" element={<ChatGPTArticle />} />
      <Route path="/posts/hparticle" element={<HPArticle />} />
      <Route path="/posts/shortform" element={<ShortFormArticle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
