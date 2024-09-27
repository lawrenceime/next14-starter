'use client'

import React,{useState} from 'react'
import styles from './links.module.css'
import NavLink from './navLink/navLink'
import Image from 'next/image'
import { handleLogout } from '@/lib/action'


const links = [
    {
        route:'Home',
        path : '/'
    },

    {
      route:'About',
      path : '/about'
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


const Links = ({session}) => {

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
          session?.user ? (
            <>
            {session.user?.isAdmin && <NavLink item={{route:"Admin" , path:"/admin"}}/>}
         
         <form action={handleLogout}>
            <button className={styles.logout}>Logout</button>
        </form>
           
            </>
          ) : (
            <NavLink item={{route:"Login" , path:"/login"}}/>
            )
          }                               
    </div>
   
    <Image src='/menu.png' alt='menu icon' width={30} height={30} onClick={handleOpen} className={styles.menuImg}/>
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