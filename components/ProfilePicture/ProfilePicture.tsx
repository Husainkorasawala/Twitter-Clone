import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

interface ProfilePictureProps {
  image?: string;
  size?: number;
}

const ProfilePicture = ({ image, size }: ProfilePictureProps) => {
  return (
    <View>
      <Image
        style={{ height: size, width: size, borderRadius: size }}
        source={{ uri: image }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfilePicture;
