import {
  Flex,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";

const FAQs = () => (
  <Flex
    bgColor="#BD204C"
    color="#fff"
    flexDirection="column"
    alignItems="center"
  >
    <Text borderStyle="none" textAlign="center" fontSize="36px">
      Got a question?
    </Text>
    <Text textAlign="center" borderStyle="none">
      Browse our frequently asked questions below. If you can’t find the
      information you are looking for, please don’t hesitate to get in touch
      with a member of our team.
    </Text>
    <Accordion allowMultiple>
      <AccordionItem
        display="flex"
        alignItems="center"
        flexDirection="column"
        border="none"
      >
        {({ isExpanded }) => (
          <>
            <Text display="flex" alignItems="center" maxWidth="164px">
              <AccordionButton>
                {isExpanded ? (
                  <Box flex="1" textAlign="left">
                    Close
                  </Box>
                ) : (
                  <Box flex="1" textAlign="left">
                    View FAQs
                  </Box>
                )}
              </AccordionButton>
              <AccordionIcon />
            </Text>

            <AccordionPanel pb={4}>
              <Flex flexDirection="column">
                <Flex flexDirection="row">
                  <AccordionItem width="400px" border="none">
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box flex="1" textAlign="left">
                          What is juvium?
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      The Smart Juvium is a 1550 nm medical non-ablative
                      fractional Erbium Laser. Designed to treat a wide range of
                      skin conditions and dermal indications without the down
                      time that can be associated with ablative CO2 lasers.The
                      treatment is often referred to as “Laser resurfacing”: or
                      a “Laser peel” treatment.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem width="400px" border="none">
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box flex="1" textAlign="left">
                          How does it works?
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      The Juvium 1550nm Erbium laser works on the principle of
                      fractional photothermolysis. This is the process when
                      water within tissue absorbs the laser energy and vaporises
                      causing instant trauma within the targeted area. The
                      body’s response system then repairs the whole area with
                      the regeneration of new collagen and remodeling and dermal
                      tissue.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem width="400px" border="none">
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box flex="1" textAlign="left">
                          What does "fractional" mean?
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      The Juvium delivers the laser energy with precise
                      Microscopic Treatment Zones (MTZ’s ) that only affect 10%
                      of the total surface area. The non-invasive MTZ’s target
                      the dermal tissue to an exact depth causing a reaction of
                      repair and regeneration across 100% the area. This
                      Fractional delivery has proven clinical results for a wide
                      range of indications with no pain and minimal down time.
                    </AccordionPanel>
                  </AccordionItem>
                </Flex>
                <Flex flexDirection="row">
                  <AccordionItem width="400px" border="none">
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box flex="1" textAlign="left">
                          How does it affect the skin?
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      The initial reaction will be some reddening of the skin
                      and possible mild swelling and discomfort which subsides
                      after 1-2 days. Immediate results can be seen with
                      noticeable continual improvement over the next 10-21 days
                      and the deeper collagen rejuvenation within 8 weeks.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem width="400px" border="none">
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box flex="1" textAlign="left">
                          What's the difference between Juvium & Co2 lasers?
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      The erbium wavelength and non- ablative fractional
                      delivery of the Juvium creates substantially less dermal
                      damage and physical trauma to the skin. Thus resulting in
                      considerably less pain and down time.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem width="400px" border="none">
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box flex="1" textAlign="left">
                          How many treatments do I need?
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      The Juvium “laser peel” skin resurfacing treatment can
                      deliver excellent results, so typically only one treatment
                      is required. Exceptional indications may require further
                      treatments only after a full realisation and results have
                      been measured from the initial treatment, normally after
                      8-12 weeks.
                    </AccordionPanel>
                  </AccordionItem>
                </Flex>
                <Flex flexDirection="row">
                  <AccordionItem width="400px" border="none">
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box flex="1" textAlign="left">
                          How long do results last?
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Soon after treatment the skin’s surface structure feels
                      softer, looks balanced, brighter and is more toned. The
                      following weeks and months will bring additional
                      improvement as deeper layers of the skin continue to heal
                      and repair creating more volume and elasticity.Results can
                      last for several years depending on the clients age and
                      skin health and condition.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem width="400px" border="none">
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box flex="1" textAlign="left">
                          Is laser resurfacing better than chemical peels?
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      While a chemical peel may lessen fine lines and rough skin
                      they are not as efficient at deeper wrinkles or loose
                      skin. Juvium laser treatments tackle a wider range of
                      indications, ranging from sun damage, scarring, acne and
                      skin tightening as well as the repair of superficial
                      dermal repair.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem width="400px" border="none">
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box flex="1" textAlign="left">
                          Is there any client down time?
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Clinical downtime is not required with clients able to
                      perform daily functionality without compromise. Initial
                      skin-care and avoidance of direct sunlight is advised.
                    </AccordionPanel>
                  </AccordionItem>
                </Flex>

                <Flex flexDirection="row">
                  <AccordionItem width="400px" border="none">
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box flex="1" textAlign="left">
                          Are treatments painful?
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      The Juvium treatment is not painful for most clients; a
                      mild pricking sensation may be felt. Cryo Shot delivers
                      adjustable “ice air” cooling the skin’s surface as you
                      treat.By being non-ablative clients do not experience the
                      discomfort of persistent burning sensation, hot spots or
                      “crispy skin” often described with CO2 & non fractional
                      laser resurfacing.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem width="400px" border="none">
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box flex="1" textAlign="left">
                          Are Juvium treatments safe?
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      As with all laser treatments a level of risk is present.
                      Juvium is certified, FDA approved and accompanied by a
                      robust training program.A full consultation and test patch
                      and a mandatory treatment protocol with the ambition to
                      realise excellence in treatment results and provide
                      exceptional client care.Along with quality assured medical
                      device certification and training, ongoing clinical
                      support and advice is provided.
                    </AccordionPanel>
                  </AccordionItem>
                </Flex>
              </Flex>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
    <Button bgColor="#fff" color="#BD204C" maxWidth="18%">
      <a href="/contact">Get in touch</a>
    </Button>
  </Flex>
);

export default FAQs;
