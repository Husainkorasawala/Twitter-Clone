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
    <View>
      <LeftContainer user={tweet.user} />
      <MainContainer tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Tweet;
