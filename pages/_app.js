import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import '../styles/globals.css'
import Layout from '../components/Layout.js'



const theme = extendTheme({
  fonts: {
    heading: "'Montserrat-Regular', sans-serif;",
    body: "'Montserrat-Regular', sans-serif;",
  },
})

function MyApp({ Component, pageProps }) {
  return (
<Layout>
    <ChakraProvider theme={theme}>

      <Component {...pageProps} />
    </ChakraProvider>
    </Layout>
  );
}

export default MyApp
