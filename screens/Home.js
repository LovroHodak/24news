import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NewsContext } from "../context/NewsContext";
import Detail from "../components/Detail";

export default function Home({ navigation }) {
  const [news, setNews] = useContext(NewsContext);

  return (
    <ScrollView>
      {news.map((el) => {
        return (
          <TouchableHighlight
            onPress={() => navigation.navigate("Article", el)}
            key={el.id}
          >
            <Detail el={el} />
          </TouchableHighlight>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageFirst: {
    width: "auto",
    height: 200,
    justifyContent: "space-between",
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    backgroundColor: "blue",
    color: "white",
    margin: 10,
    padding: 5,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  titleMore: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  commentsView: {
    flexDirection: "row",
  },
  commentsImg: {
    width: 25,
    height: 20,
    marginLeft: 15,
    marginBottom: 15,
  },
  commentsText: {
    marginLeft: 10,
    fontWeight: "bold",
  },
});
