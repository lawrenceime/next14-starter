'use client'

import React,{useState} from 'react'
import styles from './links.module.css'
import NavLink from './navLink/navLink'

const links = [
    {
        route:'Home',
        path : '/'
    },
    {
        route:'Contact',
        path : '/contact'
    },
    {
        route:'Blog',
        path : '/blog'
    }
]

const session = true;
const isAdmin = true

const Links = () => {

  const [open , setOpen] = useState(false)

  const handleOpen = () => {
    setOpen((prev)=>!prev)
  }

  return (
    <div className={styles.container}>

    <div className={styles.links}>
        {links.map(link => (
          <NavLink item={link} key={link.route} />
          ))}
        {
          session ? (
            <>
            {isAdmin && <NavLink item={{route:"Admin" , path:"/admin"}}/>}
            <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink item={{route:"Login" , path:"/login"}}/>
            )
          }
    </div>
    <button className={styles.menuButton} onClick={handleOpen} >Menu</button>
    {
      open && <div className={styles.mobileLinks}>
        {links.map(link => (
            <NavLink item={link} key={link.route}/>
        ))}
      </div>
    }
  </div>
  )
}

export default Links