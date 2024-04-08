import { View } from "react-native";
import { styles } from "./styles";
import { Cover } from "@/components/Cover/indx";

export function Movie() {
  return(
    <View style={styles.container}>
      <Cover />
    </View>
  )
}