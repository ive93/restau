import {
    Flex,
    Box,
    Text,
    Image
} from "@chakra-ui/react";


const Guarantee = () => (
    <Flex bgColor="#3C8F8E"
    color="#fff"
    position="relative"
    justifyContent="center"
    alignItems="center"
    h="543px">

    <div className="custom-shape-divider-top-1619625819">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
    </svg>
    </div>
    <Box padding="30px">
    <Image src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/Buy-Back-Guarantee-Icon.png"/>
    </Box>    
    <Flex flexDirection="column" maxWidth="790px" padding="30px">
    <Text fontSize="30px">Guarantee</Text>
    <Text>We are so confident in providing with the right product for you business, 
        if any product does not deliver to the intention they were designed, Smart will buy it Back</Text>
    </Flex>
    <div className="custom-shape-divider-bottom-1619626400">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
    </svg>
    </div>
    </Flex>
)

export default Guarantee;