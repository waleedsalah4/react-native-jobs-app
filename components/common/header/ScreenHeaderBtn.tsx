import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { getBtnImgStyle } from "./screenheader.style";
import styles from "./screenheader.style";

interface Props {
  iconUrl: ImageSourcePropType;
  dimension: number;
  handlePress?: () => void;
}

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => {
        if (handlePress) handlePress();
      }}
    >
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={getBtnImgStyle(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
