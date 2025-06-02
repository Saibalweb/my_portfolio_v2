import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
  const params = useParams();
  return (
    <div>This is blog page with slug: {params.slug}</div>
  )
}

export default Page