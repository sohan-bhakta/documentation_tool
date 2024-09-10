"use client";

import React from 'react';
import { Box, Flex, Link, Text, VStack, HStack, IconButton, Divider } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <Box bg="gray.800" color="white" py={10} px={5}>
      <VStack spacing={8} align="stretch">
        {/* Navigation Links */}
        <Flex justify="space-between" align="center" wrap="wrap">
          <VStack align="flex-start">
            <Text fontSize="lg" fontWeight="bold">Company</Text>
            <Link href="#" color="whiteAlpha.800">About Us</Link>
            <Link href="#" color="whiteAlpha.800">Careers</Link>
            <Link href="#" color="whiteAlpha.800">Press</Link>
          </VStack>

          <VStack align="flex-start">
            <Text fontSize="lg" fontWeight="bold">Support</Text>
            <Link href="#" color="whiteAlpha.800">Help Center</Link>
            <Link href="#" color="whiteAlpha.800">Contact Us</Link>
            <Link href="#" color="whiteAlpha.800">FAQs</Link>
          </VStack>

          <VStack align="flex-start">
            <Text fontSize="lg" fontWeight="bold">Legal</Text>
            <Link href="#" color="whiteAlpha.800">Privacy Policy</Link>
            <Link href="#" color="whiteAlpha.800">Terms of Service</Link>
            <Link href="#" color="whiteAlpha.800">Cookie Policy</Link>
          </VStack>
        </Flex>

        <Divider borderColor="gray.600" />

        {/* Social Media Icons */}
        <HStack justify="center" spacing={4}>
          <IconButton
            as="a"
            href="https://www.facebook.com"
            target="_blank"
            aria-label="Facebook"
            icon={<FaFacebook />}
            colorScheme="facebook"
            variant="ghost"
            size="lg"
          />
          <IconButton
            as="a"
            href="https://www.twitter.com"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            colorScheme="twitter"
            variant="ghost"
            size="lg"
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            colorScheme="linkedin"
            variant="ghost"
            size="lg"
          />
          <IconButton
            as="a"
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            colorScheme="pink"
            variant="ghost"
            size="lg"
          />
        </HStack>

        {/* Copyright */}
        <Text textAlign="center" fontSize="sm" color="whiteAlpha.700">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
}

export default Footer;
