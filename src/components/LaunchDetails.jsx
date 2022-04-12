import { useParams } from "react-router-dom";
import * as API from "../services/launches";
import {useEffect, useState} from "react";
import {Box, Flex, Spacer, Tag, Icon, Button, Text} from "@chakra-ui/react";
import { HiCalendar } from 'react-icons/hi';
import dayjs from "dayjs";
import "dayjs/locale/en";
import { Link } from "react-router-dom";

export function LaunchDetails() {
    const { id } = useParams();
    const [launch, setLaunch] = useState({});

    useEffect(() => {
        API.getLaunchByFlightNumber(id)
            .then(setLaunch)
            .catch(console.log)
    }, [id])

    return (
        <Box  
            bg="gray.100" 
            p={4} 
            m={4} 
            borderRadius="lg"
          >
              {!launch ? (
                <div>...Loading</div>
                ): (
                    <>
                    <Flex display="flex">
                        <Text fontSize="2xl">
                            Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                        </Text>
                        <Spacer />
                        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                            {launch.launch_success ? "Successs" : "Failure"}
                        </Tag>
                    </Flex>
                    <Flex align="center">
                        <Icon as={HiCalendar} color="gray.500" />
                        <Text fontSize="sm" ml={2} color="gray.500">
                            {dayjs(launch.launch_date_local).locale("en").format("D MMMM, YYYY")}
                        </Text>
                    </Flex>
                    <Link to={`/launch/${launch.flight_number}`}>
                        <Button mt={2} colorScheme="purple">
                            More Details
                        </Button>
                    </Link>
                    </>
                )
                
               }
            
            
        </Box>
    )
}