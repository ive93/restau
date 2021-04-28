import { ChakraProvider, theme,CSSReset } from "@chakra-ui/react";

import Layout from '../components/Layout.js'



function MyApp({ Component, pageProps }) {
  return (
<Layout>
    <ChakraProvider theme={theme}>
      <CSSReset/>
      <Component {...pageProps} />
    </ChakraProvider>
    </Layout>
  );
}

export default MyApp
