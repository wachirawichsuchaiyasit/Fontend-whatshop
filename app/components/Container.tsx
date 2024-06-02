"use client"
import React from 'react'

function Container({children ,className =""} : {children : React.ReactNode , className : string}) {
  return (
    <div className={`w-full md:w-3/5 mx-auto `+className}>
        {children}
    </div>
  )
}

export default Container