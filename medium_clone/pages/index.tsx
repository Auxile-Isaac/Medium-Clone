import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "../components/Header" ;
import {sanityClient, urlFor} from "../sanity";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>  
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
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
        src="https://cdn.iconscout.com/icon/free/png-256/medium-47-433328.png"
        alt=""/> 
      </div>  
      {/*Posts  */}
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
    _id,
    title,
    author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }`;

  const posts = await sanityClient
};
