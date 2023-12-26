import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";

import { icons, SIZES } from "../../../constants";
import styles from "./welcome.style";
import { tabsStyles } from "./welcome.style";

interface WelcomeProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  handleClick: () => void;
}

const jobTypes = ["Full-time", "Part-time", "Contarctor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }: WelcomeProps) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text>Hello Waleed</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            // onChange={(text: NativeSyntheticEvent<TextInputChangeEventData>) =>
            // }
            onChangeText={(text) => {
              setSearchTerm(text);
            }}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={tabsStyles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={tabsStyles.tabText(activeJobType, item)}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
