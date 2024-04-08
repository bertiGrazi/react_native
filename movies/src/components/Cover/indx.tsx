import { ImageBackground, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./style"
export function Cover() {
  return (
    <ImageBackground  
    source={require("@/assets/cover.png")} 
    style={styles.image}
    >
    
    <LinearGradient 
      colors={["rgba(0, 0, 0, 0.2)", "#000"]}
      style={styles.gratient}
      >
       <Text style={styles.title}>Harry Potter</Text>
    </LinearGradient>
    
    </ImageBackground>


  )
}