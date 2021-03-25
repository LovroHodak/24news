// NAVIGATION
import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Detail from "./Detail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* HEADER */}
      <View style={styles.header}></View>
      <Stack.Navigator style={styles.container}>
        {/* Home */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        {/* Detail */}
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>

      {/* FOOTER */}
      <View style={styles.footer}>
        <View>
          <Text>Footer</Text>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 27,
    backgroundColor: "blue",
  },
  footer: {
    height: 65,
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center'
  },
});
