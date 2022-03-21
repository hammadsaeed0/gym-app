import React , {useState , useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Screens
import HomeScreen from '../../android/Screens/HomeScreen/Home';
import Training from '../../android/Screens/Training/Training';
import Activity from '../../android/Screens/Activity/Activity';
import Profile from '../../android/Screens/Profile/Profile';
import  splash from '../../android/Screens/Splach/Splash';
import Splash from '../../android/Screens/Splach/Splash';



//Screen names
const homeName = "Home";
const training = "Training";
const activity = "Activity";
const profile  = "Profile"

const Tab = createBottomTabNavigator();

function Navigation() {
  const [ State , setState] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setState(false)
    }, 2000);
  }, [])

  return (
    <NavigationContainer>
       
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#a2a8b0',
        tabBarActiveTintColor: '#512da8',
        // labelStyle: {fontSize: 15, fontWeight: 'bold'},
      }}>


       




      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          tabBarIcon: ({color, size, focused}) => (
            <Entypo
              name="home"
              color={color}
              size={(size = focused ? 30 : 25)}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Splach"
        component={Splash}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <FontAwesome5
              name="bezier-curve"
              color={color}
              size={(size = focused ? 30 : 25)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Training"
        component={Activity}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Feather
              name="activity"
              color={color}
              size={(size = focused ? 30 : 25)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Feather
              name="user"
              color={color}
              size={(size = focused ? 30 : 25)}
            />
          ),
        }}
      />
    </Tab.Navigator>
	

    </NavigationContainer>
  );
}

export default Navigation;