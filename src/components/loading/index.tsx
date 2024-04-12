import { ActivityIndicator } from "react-native";
import { theme } from "../../theme";
import { styles } from "./styles";

export default function Loading() {
  return (
    <ActivityIndicator
      style={styles.loading}
      color={theme.colors.blue}
    />
  )
}