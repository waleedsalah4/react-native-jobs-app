import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { COLORS, SIZES, icons } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { ScrollView } from "react-native-gesture-handler";

function Home() {
  const router = useRouter();
  const [searchTerm, setSearhTerm] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension={60} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension={60} />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={(searchTerm: string) => setSearhTerm(searchTerm)}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
