import { Stack } from "expo-router";
import { useFonts } from "expo-font";
// import { COLORS, icons } from "../constants";
// import { View } from "react-native";
// import { ScreenHeaderBtn } from "../components";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default RootLayout;
