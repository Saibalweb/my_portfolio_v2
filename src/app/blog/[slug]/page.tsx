import React from 'react'

const page = async({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
    const {slug}= await params;
  return (
    <div>This is blog page with slug: {slug}</div>
  )
}


export default page