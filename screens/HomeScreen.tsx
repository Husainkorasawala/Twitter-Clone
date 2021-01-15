import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";

import Tweet from "../components/Tweet";
import Tweets from "../Data/Tweets";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Tweet tweet={Tweets[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
