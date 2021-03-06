import Head from 'next/head';
import Link from 'next/link';
import { Box, Text, UnorderedList, Image } from "@chakra-ui/react";
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})


export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'post'
  })

  return{
    props: {
      posts: data.items,
    },

  };
}

export default function Home({posts}) {
  console.log(posts)

  return (
    <div>
      <Head>
        <title>Next js</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
      </main>
    </div>
  )
}

