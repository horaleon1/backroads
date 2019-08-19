import React from 'react'
// import './navbar.css'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1> i am Navbar</h1>
      <div className={styles.links}>
        I am navbar link
      </div>
    </div>
  )
}

export default Navbar
