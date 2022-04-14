import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Center, Box, Button } from '@chakra-ui/react';

export function LogoutButton() {
    const { logout } = useAuth0();
    return (
        <Center>
            <Box>
                <Button mt={2} colorScheme="purple" onClick={() => logout({returnTo: window.location.origin})}>
                    Logout
                </Button>
            </Box>
        </Center>
        

    )
    }