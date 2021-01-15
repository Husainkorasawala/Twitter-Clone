import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfilePicture from "../components/ProfilePicture";
import Colors from "../constants/Colors";
import Tweets from "../Data/Tweets";

const NewTweetScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign
          name="close"
          size={25}
          color={Colors.light.tint}
          onPress={() => navigation.goBack()}
        />
        <TouchableOpacity style={styles.submitButtonStyle}>
          <Text style={styles.textButton}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture size={35} image={Tweets[0].user.profile} />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="What's happening"
            placeholderTextColor="#666765"
            multiline={true}
            autoFocus={true}
            style={styles.textInputStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewTweetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFF",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  submitButtonStyle: {
    borderRadius: 30,
    backgroundColor: Colors.light.tint,
  },
  newTweetContainer: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  inputContainer: {
    marginHorizontal: 10,
  },
  textInputStyle: {
    fontSize: 18,
  },
});
