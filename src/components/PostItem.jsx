import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function PostItem({ title, date, url, external, isPdf }) {
  const linkContent = (
    <>
      <span className="carrot">{'>'}</span>
      <p className="post-link">{title}</p>
    </>
  )

  // Determine the actual URL for PDFs
  const actualUrl = isPdf ? '/media/euclidpaper.pdf' : url

  return (
    <div className="post-container">
      <span className="post-box">
        {external || isPdf ? (
          <a 
            href={actualUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {linkContent}
          </a>
        ) : (
          <Link to={url}>
            {linkContent}
          </Link>
        )}
      </span>
      <p className="date-text">{date}</p>
      <br />
    </div>
  )
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  external: PropTypes.bool,
  isPdf: PropTypes.bool
}

PostItem.defaultProps = {
  external: false,
  isPdf: false
}

export default PostItem
