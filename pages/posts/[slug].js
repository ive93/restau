import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import { Box, Text, UnorderedList } from "@chakra-ui/react";

const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

export async function getStaticPaths() {
    let data = await client.getEntries({
        content_type: 'post',
    })

    return {
        paths: data.items.map((item) => ({
            params: { slug: item.fields.slug },
        })),
        fallback: true,
    };

}

export async function getStaticProps({ params }) {
    let data = await client.getEntries({
        content_type: 'post',
        'fields.slug': params.slug
    })

    return{
        props: {
            post: data.items[0],
        },
        revalidate: 1,
    }
}

export default function Post({ post }) {
    if (!post) return <div>404</div>

    return (
    <div>
    <Box bg="#f4f9f9" p="40px">
        <Text textAlign="center">
            <h1>{post.fields.text}</h1>
            <h1>{post.fields.date}</h1>
        </Text>


            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center"
            >
            {documentToReactComponents(post.fields.content, {
                renderNode: {
                    [BLOCKS.EMBEDDED_ASSET]: node =>
                        <Image src={'https:' + node.data.target.fields.file.url} 
                        width={node.data.target.fields.file.details.image.width} 
                        height={node.data.target.fields.file.details.image.height}/>
                }
            })}</Box>
        </Box>
    </div>
)
    
}