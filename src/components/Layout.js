import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './layout.css';
// import '/bootstrap/dist/css/bootstrap.min.css';
import '/Users/Horace/Documents/Gatsby/Course/Backroads/node_modules/bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
