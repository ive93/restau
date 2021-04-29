import {
    Flex,
    Button,
    Tooltip,
    Box,
    Text,
    Image
    } from "@chakra-ui/react";
import Carrousel from '../components/Carrousel'

  const About = () => (
<section>
    <Box position="relative">
        <Box w="100%">
            <Image src="https://smarths.wpengine.com/wp-content/uploads/2020/09/About-Header.png" h="500px" objectFit="cover"/>
        </Box>
        <Box position="absolute"
             top="33%"
             left="12%">
            <Text maxWidth="530px"
                  fontSize="40px">BE SMART, THINK SMART, WORK SMART</Text>
            <Text fontSize="20px"
                  fontWeight="200">Consumer Led NOT Manufacturer Driven</Text>
        </Box>
    </Box>
    <Flex flexDirection="row">
        <div style={{backgroundColor:"#000"}}></div>
        <div style={{backgroundColor:"#fff"}}></div>
        <div style={{backgroundColor:"#000"}}></div>
        <div style={{backgroundColor:"#fff"}}></div>
        <div style={{backgroundColor:"#000"}}></div>
    </Flex>
    <Flex alignItems="center">
        <Box paddingLeft="100px">
            <Image src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/older-woman-smiling.png"
                maxWidth="575px"
            />
        </Box>
        <Flex paddingRight="100px"
              flexDirection="column">
            <Text fontSize="36px">Aurora</Text>
            <Text>We aim to help people enjoy beauty through technology easily. 
            We are always committed to providing leading, reliable products and services to every customer. 
            Technological innovation is the lifeblood of our life with a strong technical foundation and high-end talent pipeline.</Text>
            <Box>
                <Image src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/Customer-Satisfaction-1.png"/>
            </Box>
        </Flex>
    </Flex>
    <Flex backgroundImage="url('https://smarths.wpengine.com/wp-content/uploads/2020/09/woman-lying-down.png')"
          h="863px"
          flexDirection="column"
          justifyContent="center"
          color="#fff"
          position="relative">
<div className="custom-shape-divider-top-1619626794">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
    </svg>
</div>
         <Flex flexDirection="column"
               textAlign="center">
            <Text>Consumer led</Text>
            <Text>Consumer led, not manufacturer driven</Text>
        </Flex>
        <Flex>
            <Flex flexDirection="row">
                <Flex flexDirection="column">
                    <Text>INTELLIGENT</Text>
                    <Text>Products that are “smart’ in their design manufacture and applications, that provide progressive and positive solution. That hold the latest in intelligent design, technology and ingredients.</Text>
                </Flex>
                <Flex flexDirection="column">
                    <Text>UNIQUE</Text>
                    <Text>Understanding of consumer demands, enabling The Smart Group to provide results driven products that are robust in both their performance and commercial return, always with a point of difference to create market demand.</Text>
                </Flex>
                <Flex flexDirection="column">
                    <Text>INNOVATION</Text>
                    <Text>Is understanding that change is a constant and that long-term success is built by consistency in the application of development to always remain ahead of the curve.</Text>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
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
    <Carrousel></Carrousel>
    <Box>
        <Image src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/Testimonials-Background.jpg"/>
    </Box>
</section>
  );
  
  export default About;