import React from 'react'

const Page = ({params} : {params: {slug: string}}) => {
  return (
    <div>
       <div>My Post: {params.slug}</div>
    </div>
  )
}

export default Page
