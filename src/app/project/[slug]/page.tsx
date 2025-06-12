import React from 'react'

const page = async({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
    const {slug} = await params;
    console.log(slug);
  return (
    <div className='min-h-full'>{slug}</div>
  )
}

export default page