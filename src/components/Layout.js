import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import './layout.css'

const Layout = ( { children } ) => {

  return (
    <main>
      <Navbar />
      {children}
      <Footer mensaje="Hola mensaje"/>
    </main>
  )
}

export default Layout
