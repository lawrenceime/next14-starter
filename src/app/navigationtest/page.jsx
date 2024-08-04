'use client'
import React from 'react'
import Link from 'next/link'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'


const NavigationTest = () => {

  // CLIENT SIDE NAVIGATION
  
  const router = useRouter();
  // const pathname = usePathname();
  const searchParams = useSearchParams()

  const q = searchParams.get("q")

  console.log(q);

  const handleClick = () => {
      console.log('clicked');
      router.push('/')

  }

  return (
    <div>
      <Link href='/' prefetch={false}>Click here</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTest