import { Link } from 'react-router-dom'

// ASCII art for "ADAM" 
const adamAscii = ` █████╗ ██████╗  █████╗ ███╗   ███╗
██╔══██╗██╔══██╗██╔══██╗████╗ ████║
███████║██║  ██║███████║██╔████╔██║
██╔══██║██║  ██║██╔══██║██║╚██╔╝██║
██║  ██║██████╔╝██║  ██║██║ ╚═╝ ██║
╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝
`

// ASCII art for "ZAIDI"
const zaidiAscii = `███████╗ █████╗ ██╗██████╗ ██╗
╚══███╔╝██╔══██╗██║██╔══██╗██║
  ███╔╝ ███████║██║██║  ██║██║
 ███╔╝  ██╔══██║██║██║  ██║██║
███████╗██║  ██║██║██████╔╝██║
╚══════╝╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝
`

// ASCII art for "POSTS"
const postsAscii = `██████╗  ██████╗ ███████╗████████╗███████╗
██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔════╝
██████╔╝██║   ██║███████╗   ██║   ███████╗
██╔═══╝ ██║   ██║╚════██║   ██║   ╚════██║
██║     ╚██████╔╝███████║   ██║   ███████║
╚═╝      ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝
`

// ASCII art for "404"
const fourOhFourAscii = `██╗  ██╗ ██████╗ ██╗  ██╗
██║  ██║██╔═████╗██║  ██║
███████║██║██╔██║███████║
╚════██║████╔╝██║╚════██║
     ██║╚██████╔╝     ██║
     ╚═╝ ╚═════╝      ╚═╝
`

// ASCII art for "PAGE NOT FOUND"
const pageNotFoundAscii = `██████╗  █████╗  ██████╗ ███████╗    ███╗   ██╗ ██████╗ ████████╗    ███████╗ ██████╗ ██╗   ██╗███╗   ██╗██████╗ 
██╔══██╗██╔══██╗██╔════╝ ██╔════╝    ████╗  ██║██╔═══██╗╚══██╔══╝    ██╔════╝██╔═══██╗██║   ██║████╗  ██║██╔══██╗
██████╔╝███████║██║  ███╗█████╗      ██╔██╗ ██║██║   ██║   ██║       █████╗  ██║   ██║██║   ██║██╔██╗ ██║██║  ██║
██╔═══╝ ██╔══██║██║   ██║██╔══╝      ██║╚██╗██║██║   ██║   ██║       ██╔══╝  ██║   ██║██║   ██║██║╚██╗██║██║  ██║
██║     ██║  ██║╚██████╔╝███████╗    ██║ ╚████║╚██████╔╝   ██║       ██║     ╚██████╔╝╚██████╔╝██║ ╚████║██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═╝  ╚═══╝ ╚═════╝    ╚═╝       ╚═╝      ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ 
`

export function HomeTitle() {
  return (
    <div className="name-title">
      <Link to="/" className="title-link">
        <span 
          className="title-name" 
          id="title-left"
          dangerouslySetInnerHTML={{ __html: adamAscii.replace(/ /g, '&nbsp;').replace(/\n/g, '<br>') }}
        />
        <span 
          className="title-name" 
          id="title-right"
          dangerouslySetInnerHTML={{ __html: zaidiAscii.replace(/ /g, '&nbsp;').replace(/\n/g, '<br>') }}
        />
      </Link>
      <div className="title-container title-cursor">
        <span id="box2">
          <h1></h1>
        </span>
      </div>
    </div>
  )
}

export function PostsTitle() {
  return (
    <div className="posts-name-title">
      <Link to="/posts">
        <span 
          className="posts-title-name"
          dangerouslySetInnerHTML={{ __html: postsAscii.replace(/ /g, '&nbsp;').replace(/\n/g, '<br>') }}
        />
      </Link>
      <div className="posts-title-container">
        <span id="box22">
          <h1></h1>
        </span>
      </div>
    </div>
  )
}

export function NotFoundTitle() {
  return (
    <>
      <div className="container-1">
        <span dangerouslySetInnerHTML={{ __html: fourOhFourAscii.replace(/ /g, '&nbsp;').replace(/\n/g, '<br>') }} />
      </div>
      <br /><br /><br /><br />
      <div className="container-2">
        <span dangerouslySetInnerHTML={{ __html: pageNotFoundAscii.replace(/ /g, '&nbsp;').replace(/\n/g, '<br>') }} />
      </div>
    </>
  )
}

export default { HomeTitle, PostsTitle, NotFoundTitle }
