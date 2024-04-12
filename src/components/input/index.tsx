import {
  TextInput,
  TextInputProps,
  View,
  ViewProps,
  StyleSheet
} from "react-native";

import { theme } from "../../theme";
import { styles } from "./styles";

function Input({ children }: ViewProps) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={theme.colors.gray_300}
      {...rest}
    />
  )
}

Input.Field = Field;

export { Input };