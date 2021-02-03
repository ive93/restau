import Head from 'next/head';
import Link from 'next/link';
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
        <ul>
          {posts.map((post) => (
            <li key={post.sys.id}>
              <Link href={"/posts/" + post.fields.slug}>
                <a>{post.fields.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
