import React from "react";
import { StyleSheet, View } from "react-native";
import { UserType } from "../../../types";
import ProfilePicture from "../../ProfilePicture";

interface LeftContainerProps {
  user: UserType;
}

const LeftContainer = ({ user }: LeftContainerProps) => {
  return (
    <View>
      <ProfilePicture image={user.profile} size={50} />
    </View>
  );
};

export default LeftContainer;
