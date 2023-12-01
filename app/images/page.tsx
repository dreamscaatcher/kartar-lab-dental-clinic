import Image from 'next/image'
import React from 'react'

const Images = () => {
  return (
    <div>
      {['1', '2'].map((path) => {
        return (
            <div key={path}>
                <Image src = {'/${path}.png'} alt='Mypics' width='280' height='420'/>

            </div>
        )
      })
      }
    </div>
  )
}

export default Images
