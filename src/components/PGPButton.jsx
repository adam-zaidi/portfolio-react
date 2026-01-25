import { useState } from 'react'
import { pgpKey } from '../data/posts'

function PGPButton() {
  const [showCopied, setShowCopied] = useState(false)

  const handleDownload = () => {
    const blob = new Blob([pgpKey], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'azpgp.rtf'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(pgpKey)
      .then(() => {
        setShowCopied(true)
        setTimeout(() => setShowCopied(false), 1000)
      })
      .catch(err => {
        console.log("Something is not right, Oops!", err)
      })
  }

  return (
    <li>
      PGP Key:{' '}
      <button 
        title="Download PGP Key" 
        className="btn"
        onClick={handleDownload}
      >
        <i className="fa fa-download"></i>
      </button>
      <button 
        title="Copy PGP Key" 
        className="btn" 
        id="pgp-copy"
        onClick={handleCopy}
      >
        <i className="fa fa-clone"></i>
      </button>
      <p 
        id="copied-text" 
        style={{ 
          display: showCopied ? 'inline-block' : 'none',
          animation: showCopied ? 'fadeOutAnimation ease 1s' : 'none'
        }}
      >
        Copied!
      </p>
    </li>
  )
}

export default PGPButton
