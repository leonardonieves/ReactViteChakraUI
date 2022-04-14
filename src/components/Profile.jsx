import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {  Box, Avatar, Center, Badge, Text, Flex } from '@chakra-ui/react';

export function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading){
        return <div>...Loading</div>
    }

    return (
        isAuthenticated && (
            <Center>
                <Box>
                    <Avatar size="xl" src={user.picture} alt={user.name} />                   
                
                    <Flex>
                        <Badge colorScheme="yellow">UserName:</Badge>
                        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                            {user.name}
                        </Text>
                    </Flex>
                
                    <Flex>
                        <Badge colorScheme="yellow">Email:</Badge> 
                        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                            {user.email}
                        </Text>
                    </Flex>
                </Box>
            </Center>
        )
    )
}