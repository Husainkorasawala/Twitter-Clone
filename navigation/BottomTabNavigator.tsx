import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  BottomTabParamList,
  HomeNavigatorParamList,
  TabTwoParamList,
} from "../types";

import ProfilePicture from "../components/ProfilePicture";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-search" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-notifications-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-mail" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeNavigatorParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => (
            <Ionicons name="logo-twitter" size={30} color={Colors.light.tint} />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="star-four-points-outline"
              size={30}
              color={Colors.light.tint}
            />
          ),
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeft: () => (
            <ProfilePicture
              size={35}
              image="data:image/jpeg;base64,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"
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
