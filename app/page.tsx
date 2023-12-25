'use client'
import { useSearchParams } from 'next/navigation'

import { Pager } from '@/components/Pager'
export default function Home() {
  const searchParams = useSearchParams()
  const currentPage = searchParams.get('page')
    ? parseInt(searchParams.get('page')!, 10)
    : 1

  return (
    <main className="h-screen w-screen flex flex-col">
      <div className="h-[33%] w-full grid place-content-center">
        <h1 className="text-9xl font-bold">Reproduction</h1>
      </div>
      <div className="h-[33%] w-full grid place-content-center">
        <h1 className="text-9xl font-bold">CurrentPage: {currentPage}</h1>
      </div>
      <div className="h-[33%] w-full grid place-content-center">
        <Pager
          maxPageButtonCount={10}
          currentPageNumber={currentPage}
          maxPageNumber={10}
          link={(pageNumber) => `http://localhost:3000?page=${pageNumber}`}
        />
      </div>
    </main>
  )
}
