import { useState, useEffect } from 'react';
import { globalStyles } from '../styles/global';
import { ArrowForwardIcon, Flex, Spinner, VStack, FlatList, Heading, Box, Pressable, Text, Button, View } from 'native-base';
import Activities from './Activities';
import { ScrollView } from 'react-native-gesture-handler';



export default function Assoc({navigation}) {
  const [assoc, setAssoc] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cat, setCat] = useState("");

  useEffect(()=> {
    fetch('http://192.168.1.23:3000/assoc')
    .then(response => { return response.json() })
    .then(json => { setAssoc(json), setIsLoading(false)});
    
  },[setAssoc])


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



          <VStack  mb="20" >
          <FlatList keyExtractor={(item) => item._id}
                data={assoc} 
                renderItem={({item}) => (
                  
                  JSON.stringify(item.type).indexOf(cat) > -1 &&
                  <Pressable  onPress={() => {navigation.navigate('AssocDetails', {item: item, title: item.name})}}>
                    
                    <Box backgroundColor={
                          JSON.stringify(item.type).indexOf("Sport") > -1 ? "blue.200": 
                          JSON.stringify(item.type).indexOf("Kultur") > -1 ? "orange.300" : "lime.200"
                      }    p="3" m="3" rounded="lg" shadow={3}>
                        
                      <Heading size="md" style={globalStyles.itemTitle}>
                      {item.name}</Heading>
                      
                    <Box width={'full'} display="flex" flexDirection="row" justifyContent="space-between">
                        <Text bold>{item.type}</Text>
                      </Box>  
                      
                      
                    
                      
                    <Flex justify="flex-end" direction='row'><Text bold mx="2" fontSize="lg">Mer info</Text><ArrowForwardIcon size="7" /></Flex>
                    </Box>
                    
                  </Pressable>
      )} />
      </VStack>
      </Box>
  );
}

