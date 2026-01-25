import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/Article.css'

function ArticleLayout({ title, date, footerLink, footerText, children, note }) {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <div className="article-container">
      <div className="article-header">
        <h1>{title}</h1>
        <p className="article-date">{date}</p>
        <div className="line"></div>
      </div>
      <div className="spacer"></div>

      <div className="article-body">
        {note && <div className="note">{note}</div>}
        {children}
        <div className="footy">
          <a href={footerLink} target="_blank" rel="noopener noreferrer">
            {footerText}
          </a>
        </div>
      </div>
    </div>
  )
}

ArticleLayout.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  footerLink: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  note: PropTypes.string
}

export default ArticleLayout
