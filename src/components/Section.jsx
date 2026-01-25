import PropTypes from 'prop-types'

function Section({ id, title, children, superscript }) {
  return (
    <div id={id}>
      <div className="title-container cursor-box">
        <span>
          <h1 className="headers">
            {'> '}{title}
            {superscript && <span className="super">{superscript}</span>}
          </h1>
        </span>
      </div>
      <br />
      {children}
    </div>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  superscript: PropTypes.string
}

export default Section
