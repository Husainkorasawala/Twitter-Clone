import { Entypo } from "@expo/vector-icons";
import moment from "moment";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TweetType } from "../../../types";
import Footer from "../Footer";

interface MainContainerProps {
  tweet: TweetType;
}

const MainContainer = ({ tweet }: MainContainerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tweetHeaderContainer}>
        <View style={styles.tweetHeader}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.username, { maxWidth:50 }]}>{tweet.user.username}</Text>
          <Text style={[styles.createdAt, { fontSize: 13 }]}>
            {moment(tweet.createdAt).fromNow()}
          </Text>
        </View>
        <Entypo
          name="chevron-down"
          size={16}
          color="grey"
          style={styles.iconStyle}
        />
      </View>
      <View>
        <Text style={styles.tweetContent}>{tweet.content}</Text>
        {!!tweet.image ? (
          <Image source={{ uri: tweet.image }} style={styles.imageStyle} />
        ) : null}
      </View>
      <Footer tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  tweetHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tweetHeader: {
    flexDirection: "row",
  },
  tweetContent: {
    lineHeight: 20,
    fontSize: 15,
  },
  iconStyle: {
    paddingTop: 2,
  },
  imageStyle: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "black",
    marginVertical: 5,
  },
  name: {
    marginRight: 2.5,
    fontWeight: "bold",
  },
  username: {
    marginHorizontal: 2.5,
    color: "grey",
  },
  createdAt: {
    marginHorizontal: 2.5,
    color: "grey",
  },
});

export default MainContainer;
