import { useEffect } from 'react'
import { NotFoundTitle } from '../components/AsciiTitle'
import '../styles/NotFound.css'

function NotFound() {
  useEffect(() => {
    document.title = 'Error 404 (Not Found)'
  }, [])

  return (
    <div className="notfound-wrapper">
      <div className="notfound-centered">
        <NotFoundTitle />
      </div>
    </div>
  )
}

export default NotFound
