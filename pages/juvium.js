import {
    Flex,
    Button,
    Tooltip,
    Box,
    Text,
    Image,
    AspectRatio
    } from "@chakra-ui/react";
import Separator from '../components/Separator';
import { AiFillCheckCircle } from 'react-icons/ai';
import Guarantee from '../components/Guarantee';

const Juvium = () => (
    <section>
        <Box position="relative">
            <Box w="100%">
                <Image src="https://smarths.wpengine.com/wp-content/uploads/2020/11/SmartJuvium-Header.jpg" 
                    h="500px" 
                    objectFit="cover"
                    opacity="0.6"/>
            </Box>
            <Box position="absolute"
                top="33%"
                left="12%">
                <Text maxWidth="530px"
                      fontSize="40px">BE SMART, THINK SMART, WORK SMART</Text>
                <Text fontSize="20px"
                      fontWeight="200">Discover Fast, Pain-Free Results
                                    with Fractional Laser Resurfacing</Text>
            </Box>
        </Box>
        <Separator/>
        <Flex alignItems="center">
            <Box>
                <Image src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/SmartJuvium-Intro.jpg"
                    maxWidth="575px"
                />
            </Box>
            <Flex paddingRight="100px"
                flexDirection="column">
                <Text fontSize="36px">Say hello to the ultimate in skin regeneration, rejuvenation and collagen remodelling.</Text>
                <Text>Enjoy incredible pain-free results with our non-ablative fractional Erbium fiber laser technology. </Text>
                <Text>The Juvium fractional erbium fiber laser uses cutting-edge FDA-approved technology to achieve an improvement in acne scars, 
                the reversal of sun damage, the successful reduction of superficial wrinkles, an increase in skin thickness, 
                improvements in skin tone and texture, and the stimulation of collagen and hair follicles. 
                Designed to shorten down time and reduce the risk of side effects, the Juvium fractional laser produces amazing, 
                visible results quickly. For pain-free, measurable results without the issues associated with aggressive CO2 lasers, 
                choose SMARTJuvium.</Text>

            </Flex>
        </Flex>
            <Flex flexDirection="column"
                  color="#fff"
                  bgColor="#BD204C"
                  position="relative"
                  height="500px"
                  justifyContent="center"
                  alignItems="center">

                    <div className="custom-shape-divider-top-1619762077">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                        </svg>
                    </div>
                <Text fontSize="36px"
                      marginBottom="50px"
                      marginTop="50px">FEATURES AND BENEFITS</Text>
                <Flex>
                    <Flex flexDirection="column"
                          padding="50px">
                        <Flex alignItems="center"
                              marginBottom="30px">
                            <Box fontSize="40px">
                                <AiFillCheckCircle/>
                            </Box>
                            <Flex flexDirection="column"
                                  marginLeft="20px">
                                <Text fontSize="20px"
                                      maxWidth="233px">Skin Rejuvenation & Collagen Remodelling</Text>
                                <Text fontSize="16px"
                                      fontStyle="italic">Tone, tighten and brighten aged skin</Text>
                            </Flex>
                        </Flex>
                        <Flex alignItems="center">
                            <Box fontSize="40px">
                                <AiFillCheckCircle/>
                            </Box>
                            <Flex flexDirection="column"
                                  marginLeft="20px">
                                <Text fontSize="20px">Vergeture Repair</Text>
                                <Text fontSize="16px"
                                      fontStyle="italic">Stretch marks, life and obesity lines</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column"
                          padding="50px">
                        <Flex alignItems="center"
                              marginBottom="30px">
                            <Box fontSize="40px">
                                <AiFillCheckCircle/>
                            </Box>
                            <Flex flexDirection="column"
                                  marginLeft="20px">
                                <Text fontSize="20px">Wrinkle Removal</Text>
                                <Text fontSize="16px"
                                      fontStyle="italic">Precision skin resurfacing</Text>
                            </Flex>
                        </Flex>
                        <Flex alignItems="center">
                            <Box fontSize="40px">
                                <AiFillCheckCircle/>
                            </Box>
                            <Flex flexDirection="column"
                                  marginLeft="20px">
                                <Text fontSize="20px">Pigmentation</Text>
                                <Text fontSize="16px"
                                      fontStyle="italic">Solar Keratosis / Damage</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column"
                          padding="50px">
                        <Flex alignItems="center"
                              marginBottom="30px">
                            <Box fontSize="40px">
                                <AiFillCheckCircle/>
                            </Box>
                            <Flex flexDirection="column"
                                  marginLeft="20px">
                                <Text fontSize="20px">Scar Treatment</Text>
                                <Text fontSize="16px"
                                      fontStyle="italic">Acne, surgical and burn</Text>
                            </Flex>
                        </Flex>
                        <Flex alignItems="center">
                            <Box fontSize="40px">
                                <AiFillCheckCircle/>
                            </Box>
                            <Flex flexDirection="column"
                                  marginLeft="20px">
                                <Text fontSize="20px">Hair Regrowth</Text>
                                <Text fontSize="16px"
                                      fontStyle="italic">Follicle stimulation & rejuvenation</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
        </Flex>
        <Flex flexDirection="column"
              justifyContent="center"
              alignItems="center">
            <Text padding="50px"
                  fontSize="36px">Why should you offer SMARTJuvium?</Text>
            <Flex>
                <Flex position="relative">
                    <Image src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/Smart-Juvium-Annotated-RKL-machine.jpg"/>
                    <div className="blob one">1</div>
                    <div className="blob two">2</div>
                    <div className="blob three">3</div>
                </Flex>
                <Flex position="relative">
                    <Image src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/Smart-Juvium-Annotated-RKL-detail.jpg"/>
                    <div className="blob four">4</div>
                    <div className="blob five">5</div>
                    <div className="blob six">6</div>
                </Flex>
            </Flex>
        </Flex>

        <Box>
            <Text textAlign="center"
                  fontSize="36px"
                  marginBottom="30px">Virtual Tour Video</Text>
            <AspectRatio maxW="1240px" ratio={16 / 9} marginLeft="auto" marginRight="auto">
                <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                    allowFullScreen
                />
            </AspectRatio>
        </Box>

        <Flex flexDirection="column"
              alignItems="center">
            <Text fontSize="36px"
                  marginBottom="30px">Fractional Laser Resurfacing</Text>
            <Flex>
                <Flex flexDirection="column"
                      alignItems="center">
                    <Text maxWidth="274px"
                          fontSize="20px">Fractional delivery of MTZ’s (Multiple Treatment Zones)</Text>
                    <Image src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/Artboard-5.png"/>
                </Flex>
                <Flex flexDirection="column"
                      alignItems="center"> 
                    <Text maxWidth="447px"
                          fontSize="20px"
                          textAlign="center">Rapid collagen production, skin rejuvenation and dermal repair</Text>
                    <Image src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/Artboard-5-copy.png"/>
                </Flex>
            </Flex>
        </Flex>
        <Flex bgColor="#3271B8"
              flexDirection="column"
              alignItems="center"
              height="400px">
            <Text color="#fff"
                  fontSize="36px">KEY FEATURES</Text>
            <Flex>
                <Image padding="30px" src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/downtime-icon1.png"/>
                <Image padding="30px" src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/fractional-icon1.png"/>
                <Image padding="30px" src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/skin-icon1.png"/>
                <Image padding="30px" src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/cryo-icon1.png"/>
                <Image padding="30px" src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/scanning-icon1.png"/>
            </Flex>
        </Flex>
    
        <Guarantee/>
        <Box>
            <Image src="https://9agdi3buzu824rjcn3d2r89q-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/Testimonials-Background.jpg"/>
        </Box>
    </section>
)

export default Juvium;