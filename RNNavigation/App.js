import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/ProfileScreen";
import CourseList from "./screens/CourseList";
import SettingsScreen from "./screens/SettingsScreen";

import Ionicons from '@expo/vector-icons/Ionicons';
import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition:'beside-icon',
                tabBarShowLabel:true,
                tabBarActiveTintColor:'purple',
                tabBarInactiveTintColor:'blue',
            }}>
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel:'My Profile',
                    tabBarIcon:({color}) => <Ionicons name='person' size={20} color={color}/>,
                    tabBarBadge:10,
                }}/>
                <Tab.Screen name="CourseList" component={CourseList} /> 
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="About" component={AboutStack}  options={{
                    headerShown:false,
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
