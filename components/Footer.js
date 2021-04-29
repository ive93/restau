import { 
    Image,
    Box,
    Link,
    Flex,
    Text
 } from "@chakra-ui/react"

const Footer = () => (
    <Flex flexDirection="column"
          bgColor="#DCDFE8"
          h="400px"
          justifyContent="center">
        <Flex w="100%"
              justifyContent="space-evenly">
            <Flex flexDirection="column">
                <Box>
                    <Image src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/SMARTGroup-Logo-Blue.png"/>
                </Box>
                <Flex flexDirection="column">
                    <Link href="tel:1-562-867-5309">1-562-867-5309</Link>
                    <Link href="mailto:name@email.com">name@email.com</Link>
                    <Text>Join the SMART Conversation</Text>
                        <Flex>
                            <Link href="#" padding="10px">
                                <svg width="11" height="21" viewBox="0 0 11 21" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                    d="M3.10374 11.3058V20.4287H6.81553V11.3175H9.90936L10.3706 7.75436H6.81553V5.48589C6.81553 4.45521 7.10517 3.74748 8.59307 3.74748H10.4986V0.567116C10.1692 0.523925 9.03944 0.428711 7.72513 0.428711C4.98245 0.428711 3.10374 2.08368 3.10374 5.12564V7.75141H0V11.3058H3.10374Z" />
                                </svg>
                            </Link>
                            <Link href="#" padding="10px">
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                    d="M19.9617 2.23637C19.2242 2.56054 18.4367 2.78137 17.6075 2.8822C18.4525 2.37304 19.1025 1.57054 19.41 0.613037C18.6175 1.07554 17.7392 1.4122 16.8042 1.5997C16.0575 0.800537 14.9933 0.300537 13.8117 0.300537C11.5475 0.300537 9.71167 2.13637 9.71167 4.39804C9.71167 4.72304 9.74917 5.03554 9.8175 5.3347C6.40917 5.17387 3.38833 3.5372 1.36667 1.06304C1.01083 1.6647 0.811667 2.36387 0.811667 3.12554C0.811667 4.55054 1.53667 5.80304 2.635 6.53887C1.9625 6.5172 1.33 6.3322 0.778333 6.02554V6.07637C0.778333 8.06387 2.18917 9.72137 4.06667 10.0989C3.7225 10.1914 3.35917 10.2414 2.98667 10.2414C2.725 10.2414 2.47417 10.2164 2.22333 10.1697C2.74917 11.7972 4.26083 12.9839 6.06 13.0172C4.66 14.1164 2.88583 14.7714 0.975 14.7714C0.65 14.7714 0.325833 14.7522 0 14.7155C1.82417 15.8772 3.97333 16.5564 6.2975 16.5564C13.8425 16.5564 17.9633 10.3097 17.9633 4.90137C17.9633 4.7272 17.9633 4.55137 17.9508 4.37637C18.7517 3.8022 19.4508 3.07637 20.0008 2.25304L19.9617 2.23637Z" />
                                </svg>
                            </Link>
                            <Link href="#" padding="10px">
                                <svg fill="#fff" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path 
                                    d="M26 25.963h-4.185v-6.55c0-1.56-.027-3.57-2.175-3.57-2.18 0-2.51 1.7-2.51 3.46v6.66h-4.182V12.495h4.012v1.84h.058c.558-1.058 1.924-2.174 3.96-2.174 4.24 0 5.022 2.79 5.022 6.417v7.386zM8.23 10.655a2.426 2.426 0 0 1 0-4.855 2.427 2.427 0 0 1 0 4.855zm-2.098 1.84h4.19v13.468h-4.19V12.495z" fill-rule="evenodd"></path>
                                </svg>
                            </Link>                
                            <Link href="#" padding="10px">
                                <svg fill="#fff" width="20" viewBox="0 0 32 32">
                                    <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"></path>
                                </svg>
                            </Link>
                        </Flex>
                </Flex>
            </Flex>

                <Flex flexDirection="column">
                    <Link href="/">PRODUCTS</Link>
                    <Link href="/">ABOUT</Link>
                    <Link href="/">NEWS</Link>
                    <Link href="/">FINANCE</Link>
                </Flex>
                <Flex flexDirection="column">
                    <Link href="/">Private Policy</Link>
                    <Link href="/">Terms & Conditions</Link>
                    <Link href="/">Contact</Link>
                </Flex>

        </Flex>
        <Text>© 2020, Smart Group All rights reserved.</Text>
    </Flex>
)

export default Footer;