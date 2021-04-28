import Head from 'next/head';
import Link from 'next/link';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
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
      <div bg="#161d6f" color="white" fontSize={32} fontFamily='Open Sans' textAlign='center'><h1>Management Blog</h1></div>
      <div bg="#f4f9f9"  display="flex" flexDirection="column" justifyContent="center" p="20px">
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
        </div>



      </main>
    </div>
  )
}