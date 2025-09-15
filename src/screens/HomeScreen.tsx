import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Header from "../components/Header";
import { theme } from "../utils/theme";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootParamList } from "../types/navigation";

const bannerImage = {
  uri: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Model in beige outfit
};

export default function HomeScreen() {
  const navigation =
    useNavigation<DrawerNavigationProp<RootParamList, "Home">>();
  return (
    <View style={styles.container}>
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
            onPress={() => navigation.navigate("Collection")}
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
  header: {
    flexDirection: "row",
    padding: theme.spacing.md,
    justifyContent: "space-between",
    alignItems: "center",
  },
  banner: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    alignItems: "center",
    padding: theme.spacing.lg,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 32,
    color: "#333",
    textAlign: "center",
    marginBottom: theme.spacing.lg,
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
