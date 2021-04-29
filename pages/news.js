import Head from 'next/head';
import Link from 'next/link';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import {
  Box,
  Flex
  } from "@chakra-ui/react";

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
      <Box bg="#f4f9f9"  display="flex" flexDirection="row" justifyContent="center" p="20px">
        <ul>
          {posts.map((post) => (
            <ul 
              textAlign='center' 
              p="20px" 
            
              key={post.sys.id}>
              <Link href={"posts/" + post.fields.slug}>
                <a>{post.fields.text}</a>
              </Link>

              <div display="flex" justifyContent="center" className="picture">{documentToReactComponents(post.fields.content, {
            renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: node =>
                    <Image objectFit="cover" src={'https:' + node.data.target.fields.file.url} 
                    width={200} 
                    height={200}/>
            }
        })}</div>

            </ul>
          ))}
        </ul>
        </Box>
    </div>
  )
}