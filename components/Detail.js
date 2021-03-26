import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  View,
  Image,
} from "react-native";

export default function Detail({ el }) {
  return (

      <ImageBackground source={el.imageFirst} style={styles.imageFirst}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{el.title}</Text>
        </View>
        <View>
          <Text style={styles.titleMore}>{el.titleMore}</Text>
          <View style={styles.commentsView}>
            <Image
              source={require("../assets/chat.png")}
              style={styles.commentsImg}
            />
            <Text style={styles.commentsText}>{el.comments.length}</Text>
          </View>
        </View>
      </ImageBackground>
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
