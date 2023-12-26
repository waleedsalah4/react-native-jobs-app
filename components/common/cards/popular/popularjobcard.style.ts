import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  /*,*/
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  /**/
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export const cardStyles = {
  container: (selectedJob: string, job_id: string): ViewStyle => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob: string, job_id: string): ViewStyle => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  jobName: (selectedJob: string, job_id: string) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === job_id ? COLORS.white : COLORS.primary,
  }),
  publisher: (selectedJob: string, job_id: string) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === job_id ? COLORS.white : COLORS.primary,
  }),
};

export default styles;
