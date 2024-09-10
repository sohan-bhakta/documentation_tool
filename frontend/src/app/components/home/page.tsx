"use client";

import React, { useState } from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { VStack, Text, Box, Grid, GridItem, Heading, HStack, Textarea, Checkbox, IconButton } from '@chakra-ui/react';

interface Message {
    from: 'user' | 'system';
    text: string;
}

const Home = () => {
    const [resize, setResize] = useState<'horizontal' | 'vertical' | 'none' | 'both'>('horizontal');
    const [text, setText] = useState('');

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    
    const handleSubmit = () => {
        if (input.trim() === '') return;

        // Add user's message to the conversation
        const userMessage: Message = { from: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);

        // Clear input after submission
        setInput('');

        // Simulate system response (can be replaced with an actual API call)
        setTimeout(() => {
            const systemMessage: Message = { from: 'system', text: `System response to: "${userMessage.text}"` };
            setMessages((prev) => [...prev, systemMessage]);
        }, 1000); // Simulate delay
    };

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
    };

    return (
        <>
            <Grid
                h='100vh'
                width ='100%'
                templateRows='repeat(7, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={5}>
                
                <GridItem colSpan={4} rowSpan={6} padding={5}>
                    <VStack
                        spacing={4}
                        width="100%"
                        h="100%"
                        overflowY="auto"
                        bg="white"
                        padding={4}
                        borderRadius="md"
                        boxShadow="md"
                        alignItems="flex-start"
                    >
                        {messages.map((msg, index) => (
                            <Box
                                key={index}
                                alignSelf={msg.from === 'user' ? 'flex-end' : 'flex-start'}
                                bg={msg.from === 'user' ? 'blue.100' : 'gray.100'}
                                color="black"
                                padding={3}
                                borderRadius="md"
                                maxW="70%"
                            >
                                <Text>{msg.text}</Text>
                            </Box>
                        ))}
                    </VStack>
                </GridItem>
                <GridItem colSpan={4} rowSpan={1} padding={5}>
                    <Box>
                        {/* Checkbox group */}
                        <HStack direction="column" spacing={4} mb={4}>
                            <Checkbox>
                                Add
                            </Checkbox>
                            <Checkbox>
                                Replace
                            </Checkbox>
                            <Checkbox>
                                Remove
                            </Checkbox>
                        </HStack>
                        <HStack direction="column" spacing={4} mb={4}>
                            <Checkbox>
                                Option 1
                            </Checkbox>
                            <Checkbox>
                                Option 2
                            </Checkbox>
                            <Checkbox>
                                Remove
                            </Checkbox>
                        </HStack>

                        {/* Textarea */}
                        <HStack alignItems="stretch" spacing={2} width="100%">
                            <Textarea
                                placeholder="Here is a sample placeholder"
                                size="sm"
                                resize={resize}  // Dynamically set the resize value
                                value={text}
                                flex="1"
                                bg="gray.100"
                            />
                            <IconButton
                                aria-label="Submit"
                                icon={<ArrowUpIcon />}
                                colorScheme="blue"
                                borderRadius="5px"
                                onClick={handleSubmit}  // Handle form submission
                                flexShrink="0"  // Prevent the button from shrinking
                                h="auto"  // Allow button height to match Textarea
                            />
                        </HStack>


                        <Text textAlign="center" size="sm" color="gray">Documentation Tool can make mistakes. Check important info.</Text>
                    </Box>
                </GridItem>
            </Grid>
        </>
    );
};

export default Home;
