import * as API from "./services/launches";
import {useState, useEffect} from 'react';
import { Heading, Box, Image } from '@chakra-ui/react';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
    <Image width={300}/>
      <Heading as="h1" size="lg">
        Spacex Launches
      </Heading>
      <section>
        {launches.map(launch => (
          <Box key={launch.flight_number} bg="gray.100">
            <Flex display="flex">
              <Text></Text>
            </Flex>
            {launch.mission_name} ({launch.launch_year})
          </Box>
        ))}
      </section>
    </>
  );

}