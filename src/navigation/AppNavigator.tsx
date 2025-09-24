import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./CustomDrawer";
import HomeScreen from "../screens/Home/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import BlogScreen from "../screens/BlogScreen";
import StoreLocatorScreen from "../screens/StoreLocatorScreen";
import CartScreen from "../screens/CartScreen";
import ApparelScreen from "../screens/ApparelScreen";
import CategoryScreen from "../screens/CategoriesScreen";
import CollectionScreen from "../screens/CollectionScreen";
// Add subcategory screens like ApparelScreen, etc.

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerPosition: "left",
          headerShown: false, // We'll add custom header in screens
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Blog" component={BlogScreen} />
        <Drawer.Screen name="StoreLocator" component={StoreLocatorScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="Collection" component={CollectionScreen} />
        <Drawer.Screen name="Category" component={CategoryScreen} />
        <Drawer.Screen name="Apparel" component={ApparelScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
