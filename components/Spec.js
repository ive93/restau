import {
  Flex,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Spec = () => (
  <Flex alignItems="center" justifyContent="center">
    <Accordion allowMultiple>
      <AccordionItem
        display="flex"
        alignItems="center"
        flexDirection="column"
        border="none"
      >
        {({ isExpanded }) => (
          <>
            <Text display="flex" alignItems="center">
              <AccordionButton>
                {isExpanded ? (
                  <Box flex="1" textAlign="left">
                    Close tech spec
                  </Box>
                ) : (
                  <Box flex="1" textAlign="left">
                    View full tech spec
                  </Box>
                )}
              </AccordionButton>
              <AccordionIcon />
            </Text>

            <AccordionPanel pb={4}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th colSpan="4">Juvium</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Laser Type</Td>
                    <Td>Erbium Fiber Laser</Td>
                    <Td>Pulse Energy</Td>
                    <Td>Up to 150mj</Td>
                  </Tr>
                  <Tr>
                    <Td>Wavelengths</Td>
                    <Td>1550nm</Td>
                    <Td>Pulse Repetition</Td>
                    <Td>Up to 100Hz</Td>
                  </Tr>
                  <Tr>
                    <Td>Scan Size </Td>
                    <Td>
                      Up to 20mm<sup>2</sup>
                    </Td>
                    <Td>Focal Length</Td>
                    <Td>50mm</Td>
                  </Tr>
                  <Tr>
                    <Td>Interface</Td>
                    <Td>15" Touch Screen</Td>
                    <Td>Software</Td>
                    <Td>In Treatment Monitoring</Td>
                  </Tr>
                  <Tr>
                    <Td>Spot Size</Td>
                    <Td>150um</Td>
                    <Td>Electrical</Td>
                    <Td>240v</Td>
                  </Tr>
                  <Tr>
                    <Td>Weight</Td>
                    <Td>16.5kg</Td>
                    <Td>Dimensions</Td>
                    <Td>D492 x W400 X H353mm</Td>
                  </Tr>
                  <Tr>
                    <Td colSpan="4">CryoSHOT (optional)</Td>
                  </Tr>
                  <Tr>
                    <Td>Air Flow</Td>
                    <Td>800L per minute</Td>
                    <Td>Temperature</Td>
                    <Td>-20 C</Td>
                  </Tr>
                  <Tr>
                    <Td>Weight</Td>
                    <Td>55kg</Td>
                    <Td>Dimensions</Td>
                    <Td>D707 x W515 x H832mm</Td>
                  </Tr>
                  <Tr>
                    <Td>Certified Training</Td>
                    <Td>Training Centre FB Support Group</Td>
                    <Td>Marketing Assets</Td>
                    <Td>Full POS, digital & web</Td>
                  </Tr>
                </Tbody>
              </Table>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  </Flex>
);

export default Spec;
