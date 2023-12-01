import Image from "next/image"
import Dental from "@/public/images/Dental.jpg"
import lab from "@/public/images/lab.png"

import React from 'react'

const page = () => {
  return (
    <div>
      <main>
        <h1>Welcome to Kartar Lab and Dental Clinic </h1>
    <Image src={Dental} alt="dental" width={280} height={420}/>
    <Image src={lab} alt="lab" width={280} height={420}/>
    </main>
    </div>
  )
}

export default page
