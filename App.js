import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './app/pages/auth/login';
import SplashScreen from './app/pages/auth/splash';
import SignUpScreen from './app/pages/auth/registration';
import useAuth from './app/hooks/useAuth';
import HomeScreen from './app/pages/inner-pages/dashboard';
const Stack = createNativeStackNavigator();
export default function App() {
  const {user} = useAuth;
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
