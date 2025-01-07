import React from 'react'
import Greeting from '@/app/components/Greeting'

const Page = () => {
  return (
    <>
      <div>
        <Greeting />
        <p className="text-center my-2">This is about page</p>
      </div>
    </>
  )
}

export default Page