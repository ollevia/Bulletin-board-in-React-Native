import { globalStyles } from "../styles/global";
import { Box, Heading, Text, ScrollView, Link, FlatList } from "native-base";

export default function Details({ route, navigation }) {
  const { item } = route.params;

  return (
    <ScrollView>
      <Box
        backgroundColor={
          JSON.stringify(item.type).indexOf("Sport") > -1 ? "blue.200": 
          JSON.stringify(item.type).indexOf("Kultur") > -1 ? "orange.300" : "lime.200"
      }  
        p="3"
        m="3"
        rounded="lg"
        shadow={3}
      >
        <Box w="100%">
          <Text>{item.type}</Text>
          <Heading size="md" style={globalStyles.itemTitle}>
            {item.name}
          </Heading>

          <Link href={item.site} isExternal>
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
              Webbplats
            </Box>
          </Link>
          <Text my="5">{item.desc}</Text>

          <Text>
            Adress: <Text bold>{item.address}</Text>
          </Text>
          <Text>
            Telefon: <Text bold>{item.phone}</Text>
          </Text>
          <Text>
            E-mail: <Text bold>{item.email}</Text>
          </Text>
        </Box>
      </Box>
    </ScrollView>
  );
}
