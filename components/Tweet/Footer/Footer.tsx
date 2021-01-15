import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TweetType } from "../../../types";

interface FooterProps {
  tweet: TweetType;
}

const Footer = ({ tweet }: FooterProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="message-circle" size={20} color="grey" />
        <Text style={styles.textStyle}>{tweet.comments}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name="retweet" size={33} color="grey" />
        <Text style={styles.textStyle}>{tweet.comments}</Text>
      </View>
      <View style={styles.iconContainer}>
        <AntDesign name="hearto" size={17} color="grey" />
        <Text style={styles.textStyle}>{tweet.comments}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name="share-google" size={24} color="grey" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    },
    textStyle: {
        marginLeft: 5,
        color: "grey"
    }
});

export default Footer;
