import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signup from "./src/screens/signup.js";
import login from "./src/screens/login.js";
import landing_page from "./src/screens/landing_page.js";
import settings from "./src/screens/settings.js";
import logout from "./src/screens/logout.js";
import cart from "./src/screens/cart.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="cart" component={cart}/>
        <Stack.Screen name="landing_page" component={landing_page} />
        <Stack.Screen name="logout" component={logout} />       
        <Stack.Screen name="settings" component={settings} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="signup" component={signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}