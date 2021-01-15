import React from "react";
import { StyleSheet, View } from "react-native";
import { TweetType } from "../../types";

import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

interface TweetProps {
  tweet: TweetType;
}

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <LeftContainer user={tweet.user} />
      <MainContainer tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: "#DFDFDF",
  },
});

export default Tweet;
