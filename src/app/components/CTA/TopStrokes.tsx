import Image from 'next/image'
import React from 'react'

const TopStrokes = () => {
  return (
    <div className="max-xsm:hidden">
        <Image width={100} height={100} src="cta-stroke3.svg" alt="" className="ellipsis w-auto"/>
    </div>  )
}

export default TopStrokes