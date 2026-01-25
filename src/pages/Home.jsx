import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HomeTitle } from '../components/AsciiTitle'
import Section from '../components/Section'
import LinkList from '../components/LinkList'
import PGPButton from '../components/PGPButton'
import { recentWork, origins, contactLinks } from '../data/posts'
import '../styles/Home.css'

function Home() {
  useEffect(() => {
    document.title = 'Adam Zaidi'
  }, [])

  return (
    <div className="home-container">
      <div className="home-header">
        <div id="huevo">
          <span id="box7">
            <p className="footnote-text">
              <span className="super">3</span>did you get it?
            </p>
          </span>
        </div>

        <HomeTitle />
        <br />
      </div>

      <div className="line"></div>
      <br />

      <Section id="about-me" title="Bio 101">
        <p>
          I am an (Indian + Korean) American student at the University of Chicago 
          interested in learning anything and everything about the world. I love 
          dabbling in data science, programming, music, tennis, and more.
          <span className="super">1</span> I enjoy playing jazz, mine(craft+sweeper), 
          bees, and on occasion my I's are a bit taller than normal.
        </p>
        <br />
      </Section>

      <Section id="recent-work" title="Recent Work">
        <ul>
          {recentWork.map((item, index) => (
            <li key={index}>
              <a 
                className="main-link" 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <Link className="main-link" to="/posts">See More</Link>
        <br /><br /><br />
      </Section>

      <Section id="additional-reading" title="My Origins" superscript="2">
        <LinkList items={origins} />
      </Section>

      <Section id="contact" title="Stalking Made Easier">
        <ul>
          {contactLinks.map((item, index) => (
            <li key={index}>
              <a 
                className="main-link" 
                href={item.url}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.title}
              </a>
            </li>
          ))}
          <PGPButton />
        </ul>
      </Section>

      <div className="footnote">
        <p className="footnote-text">
          <span className="super">1</span>please view on a desktop to have the full 
          experience of me pulling my hair out
        </p>
        <p className="footnote-text">
          <span className="super">2</span>i.e. my old treasure trove of p5.js games/projects, 
          and the very first website I made
        </p>
      </div>
    </div>
  )
}

export default Home
