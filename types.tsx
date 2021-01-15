export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  NewTweet: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type UserType = {
  id: string;
  username: string;
  name: string;
  profile: string;
};

export type TweetType = {
  id: string;
  user: UserType;
  createdAt: string;
  content: string;
  image: string | null;
  comments: number;
  likes: number;
  retweets: number;
};
