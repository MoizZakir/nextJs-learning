'use client'


import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

 const Page = () => {

     const pathname = usePathname()
    const search=useSearchParams()
    
    let data=new URLSearchParams(search)
    let m=data.get('keyword')
    console.log(m)
   


  console.log(search)
  return (
    <div>main about page
    <h4>{search}
    </h4>
    </div>
  )
}
export default Page
