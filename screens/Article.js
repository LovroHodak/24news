import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Article({route}) {

    return (
        <View>
            <Text>Yoyo {route.params.title}</Text>
        </View>
    )
}
