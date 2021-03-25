import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Home({ navigation, route }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="red"
          activeOpacity={0.8}
          style={styles.TH}
          onPress={() => navigation.navigate("Detail")}
        >
          <Text>Touch me babe</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="red"
          activeOpacity={0.2}
          style={styles.TH}
          onPress={() => navigation.navigate("Detail")}
        >
          <Text>Touch me babe</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.TH}>
          <Text>Touch me babe</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.TH}>
          <Text>Touch me babe</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.TH}>
          <Text>Touch me babe</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  TH: {
    borderWidth: 5,
    borderColor: "tomato",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
