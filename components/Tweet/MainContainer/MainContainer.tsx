import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TweetType } from "../../../types";

interface MainContainerProps {
  tweet: TweetType;
}

const MainContainer = ({ tweet }: MainContainerProps) => {
  return (
    <View>
      <View>
        <Text>{tweet.user.name}</Text>
        <Text>{tweet.user.username}</Text>
        <Text>{tweet.createdAt}</Text>
      </View>
      <View>
        <Text>{tweet.content}</Text>
        {!!tweet.image ? <Text>{tweet.image}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainContainer;
