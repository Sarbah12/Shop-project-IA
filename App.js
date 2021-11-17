import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/welcome';
import Home from "./screens/Home";
import Login from './screens/Login';
import Signup from "./screens/signup";
import product from "./screens/mHome";
import Trial from './screens/mdetails';
import check from './screens/checkout';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




<Welcome />;
<Home />;
<Login />;
<Signup />;


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome" screenOptions={{
    headerShown: false
  }}  >
        <Stack.Screen  name="welcome" component={Welcome} />
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen  name="Signup" component={Signup} />
        <Stack.Screen name="product" component={product} />
        <Stack.Screen name="trial" component={Trial} />
        <Stack.Screen name="check" component={check} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});