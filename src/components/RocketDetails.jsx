import { useParams } from "react-router-dom";
import * as API from "../services/launches";
import {useEffect, useState} from "react";
import {Heading, Box, Flex, Spacer, Tag, Icon, Button, Text} from "@chakra-ui/react";
import { HiCalendar } from 'react-icons/hi';
import dayjs from "dayjs";
import "dayjs/locale/en";

export function RocketDetails() {
    const { rocketId } = useParams();
    const [rocket, setRocket] = useState({});

    useEffect(() => {
        API.getRocketByID(id)
            .then(setRocket)
            .catch(console.log)
    }, [rocketId])
    console.log(rocket);
    return (
        <Box>
            Hola estos son los detalles del rocket
            <Heading as="h1" size="lg" m={4}>
                Spacex Launches
            </Heading>
            {rocket.length === 0 ? 
                (<div>...Loading</div>) :
                (
                <section>
                    {rocket.flickr_images.map(image => (
                       <Image src={image} width={300} m={4} />
                    ))}                    
                </section>
                )
            }
        </Box>
    )
}