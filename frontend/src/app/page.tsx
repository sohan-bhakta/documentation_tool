"use client"

import { useState } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import Sidebar from './components/sidebar/page';
import Home from './components/home/page'
import Footer from './components/footer'

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box height="100vh" overflow="hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Content area that contains both Home and Footer */}
      <VStack
        ml = {isOpen ? "33%" : "18.5%"} 
    
        transition="margin-left 0.3s"
        alignItems="flex-start" // Ensure content aligns properly
        spacing={0} // Remove spacing between VStack items
      >
        {/* Home Content */}
        <Box
          p={4}
          bg="brand.background"
          w="100%"
           // Take full width of VStack
          textAlign="center" 
        >
          <Home />
        </Box>

      
      </VStack>
    </Box>
  );
}
