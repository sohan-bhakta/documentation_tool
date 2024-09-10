"use client";

import React from 'react';
import { Box, Button, VStack, Flex, Text, IconButton, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, Link as ExternalLink, HStack, Spacer } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';


interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <>

            <Box
                as="nav"
                width={isOpen ? "33%" : "0"}
                bg="brand.button"
                color="white"
                p={isOpen ? 4 : 0}
                transition="width 0.3s, padding 0.3s"
                overflow="hidden"
                position="fixed"
                zIndex={1000}
                height="100vh"
            >
                {isOpen && (
                    <IconButton
                        icon={<CloseIcon />}
                        onClick={toggleSidebar}
                        aria-label="Close Sidebar"
                        position="fixed"
                        top="16px"
                        left="10px"
                        colorScheme="white"
                        color="brand.container"
                        zIndex={1100}
                    />
                )}
                {isOpen && (
                    <VStack spacing={4} align="start" h="100vh">

                        <Flex direction="column" alignItems="flex-start" gap={4} p={10}>
                            {/* Home Link */}
                            <Link href="/" passHref>
                                <Text color="white" mb={2} fontSize="1.5em">Home</Text>  {/* Set font size here */}
                            </Link>

                            {/* Accordion with sub-links */}
                            <Accordion allowToggle width="100%">
                                <AccordionItem border="none">
                                    <h2>
                                        <AccordionButton padding={0}>
                                            <Box flex="1" textAlign="left" color="white" fontSize="1.5em">  {/* Set font size here */}
                                                Learn More
                                            </Box>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel>
                                        {/* Asset Pricing Link */}
                                        <Link href="/pages/asset-pricing" passHref>
                                            <Text display="block" color="white" fontSize="1.25em" mt={2} mb={4}>Asset Pricing</Text>  {/* Set font size here */}
                                        </Link>

                                        {/* Risk Management Link */}
                                        <Link href="/pages/risk-management" passHref>
                                            <Text display="block" color="white" fontSize="1.25em" mb={4}>Risk Management</Text>  {/* Set font size here */}
                                        </Link>

                                        {/* Portfolio Management Link */}
                                        <Link href="/pages/portfolio-management" passHref>
                                            <Text display="block" color="white" fontSize="1.25em" mb={4}>Portfolio Management</Text>  {/* Set font size here */}
                                        </Link>

                                        {/* Quantitative Trading Link */}
                                        <Link href="/pages/quantitative-trading" passHref>
                                            <Text display="block" color="white" fontSize="1.25em">Quantitative Trading</Text>  {/* Set font size here */}
                                        </Link>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>

                            {/* Other Links */}


                            <Link href="/pages/pricing" passHref>
                                <Text color="white" mt={2} fontSize="1.5em">Services</Text>  {/* Set font size here */}
                            </Link>

                            <Link href="/pages/review" passHref>
                                <Text color="white" mt={2} fontSize="1.5em">Reviews</Text>  {/* Set font size here */}
                            </Link>

                            <Link href="/pages/about" passHref>
                                <Text color="white" mt={2} fontSize="1.5em">About</Text>  {/* Set font size here */}
                            </Link>

                            <Link href="/contact" passHref>
                                <Text color="white" mt={2} fontSize="1.5em">Contact</Text>  {/* Set font size here */}
                            </Link>
                        </Flex>
                        <Spacer />

                    </VStack>
                )}
            </Box>

            {!isOpen && (
                <IconButton
                    icon={<HamburgerIcon />}
                    onClick={toggleSidebar}
                    aria-label="Open Sidebar"
                    position="fixed"
                    top="16px"
                    left="10px"  // Position on the left edge of the screen
                    colorScheme="white"
                    color="brand.icon"
                    zIndex={1100}
                />
            )}
        </>
    );
};

export default Sidebar;
