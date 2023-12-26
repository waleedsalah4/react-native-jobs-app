import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { cardStyles } from "./popularjobcard.style";
import { JobType } from "../../../../utils/types/JobsType";
import { checkImageURL } from "../../../../utils";

interface Props {
  selectedJob: string;
  item: JobType;
  handleCardPress: (item: JobType) => void;
}
const PopularJobCard = ({ selectedJob, item, handleCardPress }: Props) => {
  return (
    <TouchableOpacity
      style={cardStyles.container(selectedJob, item.job_id)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={cardStyles.logoContainer(selectedJob, item.job_id)}
      >
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text
          style={cardStyles.jobName(selectedJob, item.job_id)}
          numberOfLines={2}
        >
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
