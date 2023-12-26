import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SIZES } from "../../../constants";
import styles from "./tabs.style";
import { TabsStyles } from "./tabs.style";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface TabButtonProps {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
}

const TabButton = ({ name, activeTab, onHandleSearchType }: TabButtonProps) => {
  return (
    <TouchableOpacity
      style={TabsStyles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={TabsStyles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};
const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
