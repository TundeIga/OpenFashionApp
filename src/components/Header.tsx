import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../utils/theme";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootParamList } from "../types/navigation";

export default function Header() {
  const navigation =
    useNavigation<DrawerNavigationProp<RootParamList, "Home">>(); // Specify screen
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        {/* Use openDrawer for consistency */}
        <Icon name="menu" size={24} color={theme.colors.text} />
      </TouchableOpacity>
      <TextInput
        style={styles.search}
        placeholder="Search products..."
        placeholderTextColor={theme.colors.text + "80"}
        onChangeText={(text) => console.log("Search:", text)} // Placeholder handler
      />
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <Icon name="shopping-cart" size={24} color={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
}

// Styles unchanged

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.md,
    backgroundColor: theme.colors.hmBg,
  },
  search: {
    flex: 1,
    marginHorizontal: theme.spacing.sm,
    padding: theme.spacing.xs,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    fontFamily: theme.fonts.regular,
  },
});
