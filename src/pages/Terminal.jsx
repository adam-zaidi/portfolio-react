import { useState, useRef, useEffect } from 'react'
import '../styles/Terminal.css'
import { pgpKey } from '../data/posts'
import { education, writing, skills, experience, projects } from '../data/content'

// Component for writing output with expand/collapse
function WritingOutput() {
  const [showAll, setShowAll] = useState(false)
  const displayedWriting = showAll ? writing : writing.slice(0, 3)
  
  return (
    <div className="output-content">
      {displayedWriting.map((article, index) => (
        <div key={index} className="writing-entry">
          <div className="entry-block">
            <p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="cyan">
                {article.title}
              </a>
            </p>
            <p><strong>{article.publication}</strong> · {article.date}</p>
          </div>
          {index < displayedWriting.length - 1 && <div className="blank-line">&nbsp;</div>}
        </div>
      ))}
      {writing.length > 3 && (
        <>
          <div className="blank-line">&nbsp;</div>
          <p>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowAll(!showAll); }} className="expand-link">
              {showAll ? '[ show less ]' : `[ show all ${writing.length} articles ]`}
            </a>
          </p>
        </>
      )}
    </div>
  )
}

// ASCII art for "ADAM"
const adamAscii = ` █████╗ ██████╗  █████╗ ███╗   ███╗
██╔══██╗██╔══██╗██╔══██╗████╗ ████║
███████║██║  ██║███████║██╔████╔██║
██╔══██║██║  ██║██╔══██║██║╚██╔╝██║
██║  ██║██████╔╝██║  ██║██║ ╚═╝ ██║
╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝`

// ASCII art for "ZAIDI"
const zaidiAscii = `███████╗ █████╗ ██╗██████╗ ██╗
╚══███╔╝██╔══██╗██║██╔══██╗██║
  ███╔╝ ███████║██║██║  ██║██║
 ███╔╝  ██╔══██║██║██║  ██║██║
███████╗██║  ██║██║██████╔╝██║
╚══════╝╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝`

// Available commands (Linux-style) - two columns
const commandsLeft = [
  { name: 'whoami', description: 'display user info' },
  { name: 'writing', description: 'published articles' },
  { name: 'contact', description: 'contact information' },
  { name: 'clear', description: 'clear terminal' },
]

const commandsRight = [
  { name: 'experience', description: 'work history' },
  { name: 'education', description: 'academic background' },
  { name: 'projects', description: 'personal projects' },
  { name: 'skills', description: 'technical abilities' },
]

function Terminal() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])
  const [showCopied, setShowCopied] = useState(false)
  const inputRef = useRef(null)
  const outputEndRef = useRef(null)

  useEffect(() => {
    document.title = 'Adam Zaidi'
    // Focus input on load
    inputRef.current?.focus()
  }, [])

  // Scroll to bottom when output changes
  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [output])

  // Focus input when clicking anywhere in terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  const handleCopyPGP = () => {
    navigator.clipboard.writeText(pgpKey)
      .then(() => {
        setShowCopied(true)
        setTimeout(() => setShowCopied(false), 1000)
      })
      .catch(err => console.error('Failed to copy:', err))
  }

  const handleDownloadPGP = () => {
    const blob = new Blob([pgpKey], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'azpgp.rtf'
    a.click()
    URL.revokeObjectURL(url)
  }

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    switch (trimmedCmd) {
      case 'whoami':
        return {
          type: 'whoami',
          content: (
            <div className="output-content">
              <p>I am an (Indian + Korean) American student at the University of Chicago interested in quantitative research, programming, writing, and learning about the world. 
                I have experience in data engineering at Chime, and computational linguistics at UChicago. In my spare time, I perform and arrange music, and play tennis!</p>
            </div>
          )
        }

      case 'contact':
        return {
          type: 'contact',
          content: (
            <div className="output-content">
              <p><strong>Email:</strong> <a href="mailto:contact@adamzaidi.me">contact@adamzaidi.me</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/adam-zaidi" target="_blank" rel="noopener noreferrer">github.com/adam-zaidi</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/adam-z-9954b4247/" target="_blank" rel="noopener noreferrer">linkedin.com/in/adam-z-9954b4247</a></p>
              <p><strong>Resume:</strong> <a href="/Resume_SyedAdamZaidi2025.pdf" download>download</a></p>
              <p><strong>PGP Key:</strong> <a href="#" onClick={(e) => { e.preventDefault(); handleDownloadPGP(); }}>download</a> | <a href="#" onClick={(e) => { e.preventDefault(); handleCopyPGP(); }}>copy</a>{showCopied && <span className="copied-msg"> (copied!)</span>}</p>
            </div>
          )
        }

      case 'education':
        return {
          type: 'education',
          content: (
            <div className="output-content">
              {education.map((edu, index) => (
                <div key={index} className="education-entry">
                  <div className="entry-block">
                    <p><span className="cyan">{edu.school}</span> | {edu.location}</p>
                    <p><strong>{edu.degree}</strong></p>
                    <p>{edu.years}</p>
                    {edu.details.map((detail, i) => (
                      <p key={i}>· {detail}</p>
                    ))}
                  </div>
                  {index < education.length - 1 && <div className="blank-line">&nbsp;</div>}
                </div>
              ))}
            </div>
          )
        }

      case 'experience':
        return {
          type: 'experience',
          content: (
            <div className="output-content">
              {experience.map((exp, index) => (
                <div key={index} className="experience-entry">
                  <div className="entry-block">
                    <p><span className="cyan">{exp.company}</span> | {exp.location}</p>
                    <p><strong>{exp.role}</strong></p>
                    <p>{exp.dates}</p>
                    {exp.bullets.map((bullet, i) => (
                      <p key={i}>· {bullet}</p>
                    ))}
                  </div>
                  {index < experience.length - 1 && <div className="blank-line">&nbsp;</div>}
                </div>
              ))}
            </div>
          )
        }

      case 'skills':
        return {
          type: 'skills',
          content: (
            <div className="output-content">
              <div className="entry-block">
                <p><span className="cyan">Languages</span></p>
                <p>{skills.languages.join(' · ')}</p>
              </div>
              <div className="blank-line">&nbsp;</div>
              <div className="entry-block">
                <p><span className="cyan">Frameworks</span></p>
                <p>{skills.frameworks.join(' · ')}</p>
              </div>
              <div className="blank-line">&nbsp;</div>
              <div className="entry-block">
                <p><span className="cyan">Data & Analytics</span></p>
                <p>{skills.data.join(' · ')}</p>
              </div>
              <div className="blank-line">&nbsp;</div>
              <div className="entry-block">
                <p><span className="cyan">Tools</span></p>
                <p>{skills.tools.join(' · ')}</p>
              </div>
            </div>
          )
        }

      case 'projects':
        return {
          type: 'projects',
          content: (
            <div className="output-content">
              {projects.map((project, index) => (
                <div key={index} className="project-entry">
                  <div className="entry-block">
                    <p>
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="cyan">
                          {project.name}
                        </a>
                      ) : (
                        <span className="cyan">{project.name}</span>
                      )}
                    </p>
                    <p>{project.description}</p>
                    <p><strong>{project.tech.join(' · ')}</strong></p>
                  </div>
                  {index < projects.length - 1 && <div className="blank-line">&nbsp;</div>}
                </div>
              ))}
            </div>
          )
        }

      case 'writing':
        return {
          type: 'writing',
          content: <WritingOutput />
        }

      case 'clear':
        return { type: 'clear' }

      case '':
        return null

      default:
        return {
          type: 'error',
          content: (
            <div className="output-content error-msg">
              zsh: command not found: {trimmedCmd}
            </div>
          )
        }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const result = processCommand(input)
    
    if (result) {
      if (result.type === 'clear') {
        setOutput([])
      } else {
        setOutput(prev => [...prev, { command: input, result }])
      }
    }
    
    setInput('')
  }

  const handleKeyDown = (e) => {
    // Handle up arrow for command history (future enhancement)
    if (e.key === 'ArrowUp') {
      e.preventDefault()
    }
    // Handle Enter key to submit
    if (e.key === 'Enter') {
      e.preventDefault()
      const result = processCommand(input)
      
      if (result) {
        if (result.type === 'clear') {
          setOutput([])
        } else {
          setOutput(prev => [...prev, { command: input, result }])
        }
      }
      
      setInput('')
    }
  }

  return (
    <div className="terminal-wrapper" onClick={handleTerminalClick}>
      <div className="terminal-container">
        {/* ASCII Art Header */}
        <div className="terminal-header">
          <div className="ascii-art-row">
            <pre className="ascii-art">{adamAscii}</pre>
            <pre className="ascii-art">{zaidiAscii}</pre>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="terminal-welcome">
          Welcome to my terminal portfolio!
        </div>
        <div className="blank-line">&nbsp;</div>

        {/* Command Box - Two columns */}
        <div className="command-box">
          <div className="box-top">┌──Available Commands────────────────────────────────────────────────────────────────────┐</div>
          <div className="mobile-commands-label">Commands:</div>
          <div className="command-columns">
            <div className="command-column">
              {commandsLeft.map(cmd => (
                <div className="box-row" key={cmd.name}>
                  <span className="cmd-name">{cmd.name}</span>
                  <span className="cmd-dots">{'·'.repeat(12 - cmd.name.length)}</span>
                  <span className="cmd-desc">{cmd.description}</span>
                </div>
              ))}
            </div>
            <div className="command-column">
              {commandsRight.map(cmd => (
                <div className="box-row" key={cmd.name}>
                  <span className="cmd-name">{cmd.name}</span>
                  <span className="cmd-dots">{'·'.repeat(12 - cmd.name.length)}</span>
                  <span className="cmd-desc">{cmd.description}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="box-bottom">└─────────────────────────────────────────────────────────────────────────────────────────┘</div>
        </div>
        <div className="blank-line">&nbsp;</div>

        {output.length === 0 && (
          <div className="terminal-hint">
            Type a command and press Enter to begin...
          </div>
        )}
        {output.length === 0 && <div className="blank-line">&nbsp;</div>}

        {/* Output Area */}
        <div className="terminal-output">
          {output.map((item, index) => (
            <div className="output-block" key={index}>
              <div className="command-echo">$ {item.command}</div>
              {item.result.content}
            </div>
          ))}
          <div ref={outputEndRef} />
        </div>

        {/* Command Input */}
        <form onSubmit={handleSubmit} className="terminal-input-area">
          <span className="prompt-symbol">$</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder=""
            autoComplete="off"
            spellCheck="false"
          />
          <span className="cursor-blink"></span>
        </form>
      </div>
    </div>
  )
}

export default Terminal
