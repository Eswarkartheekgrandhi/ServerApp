import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import InfoScreen from "./components/InfoScreen";
import ActiveScreen from "./components/ActiveScreen";
import SetAlertScreen from "./components/SetAlertScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Active"
          component={ActiveScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SetAlert"
          component={SetAlertScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
