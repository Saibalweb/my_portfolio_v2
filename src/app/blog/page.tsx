import { Button } from '@/components/ui/button';
import React from 'react'

const blogPage = () => {
  return (
    <div>
      <Button variant={'default'} size={'lg'}>
        Testing
      </Button>
      <Button variant={'destructive'}>
        Testing
      </Button>
      <Button variant={'outline'}>
        Testing
      </Button>
      <Button variant={'secondary'}>
        Testing
      </Button>
      <Button variant={'ghost'}>
        Testing
      </Button>
      <Button variant={'link'}>
        Testing
      </Button>
    </div>
  )
}

export default blogPage;