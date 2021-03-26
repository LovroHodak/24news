// NAVIGATION
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// REACT
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// CONTEXT
import { NewsProvider } from "./context/NewsContext";
// COMPONENTS
import Home from "./screens/Home";
import Article from "./screens/Article";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NewsProvider>
      <NavigationContainer>
        {/* HEADER */}
        <View style={styles.header}></View>

        {/* MAIN */}
        <Stack.Navigator style={styles.container}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Article" component={Article} />
        </Stack.Navigator>

        {/* FOOTER */}
        <View style={styles.footer}>
          <View>
            <Text>Footer</Text>
          </View>
        </View>
      </NavigationContainer>
    </NewsProvider>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
