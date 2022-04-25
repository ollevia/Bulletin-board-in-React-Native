import { useState, useEffect } from 'react';
import { globalStyles } from '../styles/global';
import { ArrowForwardIcon, Flex, Spinner, VStack, FlatList, Heading, Box, Pressable, Text, Button } from 'native-base';





export default function Activities({navigation}) {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cat, setCat] = useState("");

  useEffect(()=> {
    fetch('https://mitt-api.herokuapp.com/activities')
    .then(response => { return response.json() })
    .then(json => { setActivities(json), setIsLoading(false)});
    
  },[setActivities])


  return (
      <Box>
        
        <Text mt="5" mx="4">Sortera efter kategori:</Text>
        <Box mb="5" mx="5" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>

          <Button w="25%" mx="3" onPress={() => setCat("")}>Alla</Button>
          <Button w="25%" mx="3" onPress={() => setCat("Sport")}>Sport</Button>
          <Button w="25%" mx="3" onPress={() => setCat("Kultur")}>Kultur</Button>
          <Button w="25%" mx="3" onPress={() => setCat("Övrigt")}>Annat</Button>
        </Box>
          {isLoading &&
          
          <Spinner size="lg" color="violet.400"/>
          }
          <VStack mb="10" >
          <FlatList keyExtractor={(item) => item._id}
                data={activities} 
                renderItem={({item}) => (
                  JSON.stringify(item.type).indexOf(cat) > -1 &&
                  <Pressable  onPress={() => {navigation.navigate('Detaljer', {item: item, title: item.title})}}>
                    
                    <Box backgroundColor={
                          JSON.stringify(item.type).indexOf("Sport") > -1 ? "blue.200": 
                          JSON.stringify(item.type).indexOf("Kultur") > -1 ? "orange.300" : "lime.200"
                      }  p="3" m="3" rounded="lg" shadow={3}>
                        
                      <Heading size="md" style={globalStyles.itemTitle}>
                      {item.title}</Heading>
                      
                   
                        <Text bold>{item.organizer}</Text>
                      
                      
                    <Box>
                      <Text style={globalStyles.day}>
                        { item.everyWeek === true && item.day + "ar"} 
                        {item.everyWeek === false && item.date.substring(0,10)}
                      </Text>
                      <Text style={globalStyles.time}>{item.time}</Text></Box>  
                      
                    <Flex justify="flex-end" direction='row'>
                      <Text bold mx="2" fontSize="lg">Läs mer</Text><ArrowForwardIcon size="7" /></Flex>
                    </Box>
                    
                  </Pressable>
      )} />
      </VStack>
      </Box>
  );
}
