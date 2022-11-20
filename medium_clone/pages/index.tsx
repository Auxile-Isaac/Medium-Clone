import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>  
      <div>
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
          Medium
          </span>{" "}
          is a place to Write, Read and connect
          </h1>
          <h2>
            It's free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
        <img 
        className="hidden md:inline-flex h-32 lg:h-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBrBxWgpyq7HB8KyltTavLspfHSCovLpVyA&usqp=CAU"
        alt=""/> 
      </div>    
    </div>
  )
}

export default Home
