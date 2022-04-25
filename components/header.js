import React from "react";
import { HStack, IconButton, Icon, Box, Text, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <HStack
      px="2"
      py="3"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
    >
      <IconButton
        icon={<Icon as={MaterialIcons} name="menu" size="sm" color="white" />}
        onPress={openMenu}
      />
      <Text color="white" fontFamily="heading" fontSize="20" fontWeight="bold">
        Upplev Hofors
      </Text>
      <IconButton
        icon={
          <Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />
        }
      />
    </HStack>
  );
}
