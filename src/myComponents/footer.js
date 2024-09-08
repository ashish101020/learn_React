import React from 'react'

const Footer = () => {
  let footerStyle = {
    top: "70vh",
    position: "relative",
    width: "100%",
    // border: "2px solid red"
    }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MytodoList.com
      </p>
    </footer>
  )
}

export default Footer
