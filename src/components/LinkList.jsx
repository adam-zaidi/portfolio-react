import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function LinkList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.external ? (
            <a 
              className="main-link" 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          ) : item.type === 'email' ? (
            <a className="main-link" href={item.url}>
              {item.title}
            </a>
          ) : (
            <Link className="main-link" to={item.url}>
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

LinkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      external: PropTypes.bool,
      type: PropTypes.string
    })
  ).isRequired
}

export default LinkList
