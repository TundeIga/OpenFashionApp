import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../utils/theme";
import { useNavigation } from "@react-navigation/native";
import { useState, useRef, useEffect } from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootParamList } from "../types/navigation";
import LogoSvg from "../../assets/icons/Logo.svg";
import CartSvg from "../../assets/icons/shopping bag.svg";
import SearchSvg from "../../assets/icons/Search.svg";
import Menu from "../../assets/icons/Menu.svg";

export default function Header() {
  const navigation =
    useNavigation<DrawerNavigationProp<RootParamList, "Home">>();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Animation values
  const translateYAnimation = useRef(new Animated.Value(-60)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  const toggleSearch = () => {
    if (isSearchVisible) {
      // Close animation
      Animated.parallel([
        Animated.timing(translateYAnimation, {
          toValue: -60,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnimation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIsSearchVisible(false);
      });
    } else {
      // Open animation
      setIsSearchVisible(true);
      Animated.parallel([
        Animated.timing(translateYAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnimation, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  return (
    <View style={styles.container}>
      {/* Main header row */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Menu />
        </TouchableOpacity>

        <LogoSvg />

        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={toggleSearch} style={styles.iconButton}>
            <SearchSvg />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={styles.iconButton}
          >
            <CartSvg />
          </TouchableOpacity>
        </View>
      </View>

      {/* Animated Search Bar */}
      {isSearchVisible && (
        <Animated.View
          style={[
            styles.searchContainer,
            {
              transform: [{ translateY: translateYAnimation }],
              opacity: opacityAnimation,
            },
          ]}
        >
          <TextInput
            style={styles.search}
            placeholder="Search products..."
            placeholderTextColor={theme.colors.text + "80"}
            onChangeText={(text) => console.log("Search:", text)}
            autoFocus
          />
          <TouchableOpacity onPress={toggleSearch} style={styles.closeButton}>
            <Icon name="close" size={20} color={theme.colors.text} />
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.hmBg,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  iconButton: {
    padding: theme.spacing.xs,
  },
  searchContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.sm,
  },
  search: {
    flex: 1,
    marginHorizontal: theme.spacing.sm,
    padding: theme.spacing.xs,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    fontFamily: theme.fonts.regular,
  },
  closeButton: {
    padding: theme.spacing.xs,
  },
});
