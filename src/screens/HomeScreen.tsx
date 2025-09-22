import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Header from "../components/Header";
import { theme } from "../utils/theme";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootParamList } from "../types/navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCallback } from "react";

const bannerImage = require("../../assets/homeModel.png");



export default function HomeScreen() {
  const inset = useSafeAreaInsets();
  const navigation =
    useNavigation<DrawerNavigationProp<RootParamList, "Home">>();

   useFocusEffect(
     useCallback(() => {
       StatusBar.setBackgroundColor(theme.colors.hmBg, true);
       StatusBar.setBarStyle("dark-content", true);

       StatusBar.setTranslucent(false);
     }, [])
   );
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.hmBg }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.hmBg}
        translucent={false}
      />

      <View
        style={{
          paddingTop: inset.top,
          paddingLeft: inset.left,
          paddingRight: inset.right,
          flex: 1,
        }}
      >
        <Header />

        {/* Banner */}

        <ImageBackground
          source={bannerImage}
          style={styles.banner}
          resizeMode="contain"
        >
          {/* Titles */}
          <View style={styles.overlay}>
            <Text style={[styles.title, { marginLeft: -110 }]}>LUXURY </Text>
            <Text style={[styles.title, { marginLeft: -70 }]}> FASHION </Text>
            <Text style={styles.title}> & ACCESSORIES</Text>
          </View>

         
          <TouchableOpacity
            style={[styles.buttonContainer]}
            onPress={() =>
              navigation.navigate("Collection", { collection: "Women" })
            }
          >
            <Text style={styles.buttonText}>EXPLORE COLLECTION</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    alignItems: "center",
    padding: theme.spacing.lg,
  },
  title: {
    fontFamily: theme.fonts.bodoniItalic,
    fontSize: 39,
    color: "#333",
    opacity: 0.7,
    lineHeight: 44,
    letterSpacing: 2,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 120, 
    alignSelf: "center",
    width: 253,
    backgroundColor: "#333",
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: 20,
    opacity: 0.7,
  },
  buttonText: {
    color: "#FFF",
    fontFamily: theme.fonts.regular,
    textAlign: "center",
  },
});

