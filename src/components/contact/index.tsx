import {
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";

import { Avatar } from "../avatar";

import { styles } from "./styles";

export type ContactProps = {
  id: string;
  name: string;
  image?: ImageProps;
}

type Props = TouchableOpacityProps & {
  contact: ContactProps;
}

export function Contact({ contact, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Avatar
        name="Carlos"
        image={contact.image}
      />
      <Text style={styles.name}>
        {contact.name}
      </Text>
    </TouchableOpacity>
  )
}