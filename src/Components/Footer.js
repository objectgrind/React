import React from 'react'

function Footer() {
    let footerStyle={
        position : "relative",
        width: "100%",
        top : "20vh",
        border :"10px solid coral"
    }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle} >
        <p className='text-center'>Copyright &copy; Anshuman@TodoList.com</p>
      
    </footer  >
  )
}

export default Footer
