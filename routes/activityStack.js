import { createStackNavigator } from "@react-navigation/stack";
import Activities from '../screens/Activities';
import ActivityDetails from '../screens/ActivityDetails';

const ActivityStack = createStackNavigator()

export default function ActivityStackScreen() {
  return (
      <ActivityStack.Navigator initialRouteName='Home'>
        <ActivityStack.Screen name='Aktiviteter' title="Evenemang" component={Activities} />
        <ActivityStack.Screen name='Detaljer' component={ActivityDetails} options={({ route }) => ({ title: route.params.title })}/>
      </ActivityStack.Navigator>
  );
}