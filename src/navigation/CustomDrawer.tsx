import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  SectionList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../utils/theme";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const sections = [
  {
    title: "Categories",
    data: ["Women", "Man", "Kids"],
  },
  {
    title: "Subcategories",
    data: ["New", "Apparel", "Bag", "Shoes", "Beauty", "Accessories"],
  },
  {
    title: "More",
    data: ["About", "Contact", "Blog"],
  },
];

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const inset = useSafeAreaInsets();
  const [activeGender, setActiveGender] = useState("Women");
  const { navigation } = props;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        paddingTop: inset.top,
        paddingLeft: inset.left,
        paddingRight: inset.right,
      }}
    >
      <TouchableOpacity
        style={styles.close}
        onPress={() => props.navigation.closeDrawer()}
      >
        <Icon name="close" size={24} color={theme.colors.text} />
      </TouchableOpacity>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item}
        renderSectionHeader={({ section: { title } }) =>
          title !== "Categories" ? (
            <Text style={styles.sectionHeader}>{title}</Text>
          ) : null
        }
        renderItem={({ item, section }) => {
          if (section.title === "Categories") {
            return (
              <TouchableOpacity
                style={styles.genderItem}
                onPress={() => {
                  setActiveGender(item);
                  // Navigate or filter products by gender
                  props.navigation.navigate("Home", { gender: item });
                }}
              >
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>

                <Text style={styles.itemText}>{item}</Text>
                </View>
                {activeGender === item && <View style={styles.activeDot} />}
              </TouchableOpacity>
            );
          } else if (section.title === "Subcategories") {
            return (
              <DrawerItem
                label={item}
                // Updated: Navigate to generic Category screen with category param
                onPress={() =>
                  props.navigation.navigate("Category", { category: item })
                }
                labelStyle={styles.itemText}
                icon={() => (
                  <Icon
                    name="keyboard-arrow-down"
                    size={20}
                    color={theme.colors.text}
                  />
                )}
              />
            );
          } else {
            // "More" section
            return (
              <DrawerItem
                label={item}
                // Updated: Navigate to generic Category screen with category param (adjust if static pages)
                onPress={() =>
                  props.navigation.navigate("Category", { category: item })
                }
                labelStyle={styles.itemText}
              />
            );
          }
        }}
      />

      {/* Contact Section */}
      <View style={styles.contact}>
        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => Linking.openURL("tel:7867138616")}
        >
          <Icon name="phone" size={20} color={theme.colors.text} />
          <Text style={styles.contactText}>(786) 713-8616</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => props.navigation.navigate("StoreLocator")}
        >
          <Icon name="location-on" size={20} color={theme.colors.text} />
          <Text style={styles.contactText}>Store Locator</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Social Icons */}
      <View style={styles.social}>
        <TouchableOpacity onPress={() => Linking.openURL("https://x.com")}>
          {/* Updated: Changed "twitter" to "x" for MaterialIcons */}
          <Icon name="x" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://instagram.com")}
        >
          <Icon name="instagram" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://youtube.com")}
        >
          <Icon name="youtube_activity" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: theme.spacing.md },
  close: { alignSelf: "flex-start", marginBottom: theme.spacing.lg },
  genderItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm,
    // backgroundColor: 'white'
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF6B6B",
    marginLeft: theme.spacing.xs,
  },
  itemText: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: 16,
  },
  sectionHeader: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  contact: { marginTop: theme.spacing.lg },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: theme.spacing.sm,
  },
  contactText: {
    marginLeft: theme.spacing.sm,
    fontFamily: theme.fonts.regular,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.text + "33",
    marginVertical: theme.spacing.md,
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: theme.spacing.md,
  },
});
