import { globalStyles } from "../styles/global";
import { Box, Heading, Text, Link, Image, ScrollView } from "native-base";
import {Images} from '../assets/Index';

export default function Details({ route, navigation }) {
  const item = route.params.item;

  const getAssoc = (id) => {
    fetch("https://mitt-api.herokuapp.com/assoc/id/" + id)
      .then((response) => {
        return response.json();
      })
      .then((json) =>
        navigation.navigate("Föreningar", {
          screen: "AssocDetails",
          params: { item: json[0], title: item.organizer},
          initial: false,
        })
      );
  };

  //)
  return (
    <ScrollView>
    <Box
      backgroundColor={
          JSON.stringify(item.type).indexOf("Sport") > -1 ? "blue.200": 
          JSON.stringify(item.type).indexOf("Kultur") > -1 ? "orange.300" : "lime.200"
      }
      p="5"
      m="3"
      rounded="lg"
      shadow={3}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    ><Box w="100%" >
    <Image source={Images[item.type]} alt="Evenemangsbild?" alignSelf="center" h="200" w="260"/></Box>
      <Box mt="3" display="flex" flexDirection="row" justifyContent="space-between">
        <Box>
          <Text>{item.type}</Text>
          <Heading size="md" style={globalStyles.itemTitle}>
            {item.title}
          </Heading>

          <Link onPress={() => getAssoc(item.assocId)}>
            <Box
              px="3"
              py="2"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: "white",
                fontWeight: "medium",
              }}
            >
              {item.organizer}
            </Box>
          </Link>
          <Text bold>
            {item.everyWeek === true && item.day + "ar"}
            {item.everyWeek === false && item.date.substring(0, 10)}
          </Text>
          <Text >{item.time}</Text>
        </Box>
      </Box>
      <Text my="5">{item.desc}</Text>
      <Text>
        Plats: <Text bold>{item.place}</Text>
      </Text>
    </Box>
    </ScrollView>
  );
}
