import { createStackNavigator } from "@react-navigation/stack";
import Assoc from "../screens/Assoc";
import AssocDetails from "../screens/AssocDetails";

const AssocStack = createStackNavigator();

export default function AssocStackScreen() {
  return (
    <AssocStack.Navigator initialRouteName="Assoc">
    <AssocStack.Screen name="Assoc" options={{headerTitle: "Föreningar"}} title="Föreningar" component={Assoc} />
    <AssocStack.Screen
      name="AssocDetails"
      component={AssocDetails}
      options={({ route }) => ({ title: route.params.title })}
    />
  </AssocStack.Navigator>
  );
}
