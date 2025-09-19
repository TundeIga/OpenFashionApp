import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Header from "../components/Header";
import { theme } from "../utils/theme";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootParamList } from "../types/navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const bannerImage = require("../../assets/homeModel.png");

const image = {
  require: "/assets/homeModel.png",
};

export default function HomeScreen() {
  const inset = useSafeAreaInsets();
  const navigation =
    useNavigation<DrawerNavigationProp<RootParamList, "Home">>();
  return (
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
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>LUXURY FASHION & ACCESSORIES</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Collection", {collection: 'Women'})}
          >
            <Text style={styles.buttonText}>EXPLORE COLLECTION</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
    textAlign: "center",
    marginBottom: theme.spacing.lg,
   lineHeight: 44,
    letterSpacing: 2,
  },
  button: {
    backgroundColor: "#333",
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFF",
    fontFamily: theme.fonts.regular,
  },
});
