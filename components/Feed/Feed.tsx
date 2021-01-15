import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Tweets from "../../Data/Tweets";
import Tweet from "../Tweet";

const Feed = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Tweets}
        keyExtractor={(tweet) => tweet.id}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
});

export default Feed;
