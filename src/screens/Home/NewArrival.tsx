import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { theme } from "../../utils/theme";
import LineSvg from "../../../assets/icons/3.svg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { RootParamList } from "../../types/navigation";
import { Product } from "../../types/Product";
import { fetchProducts } from "../../services/api";
import Prada from '../../../assets/icons/Prada.svg'
import Gucci from '../../../assets/icons/Gucci.svg'
import Boss from '../../../assets/icons/Boss.svg'
import Catier from '../../../assets/icons/Catier.svg'
import Burberry from '../../../assets/icons/Burberry.svg'
import Tiffany from '../../../assets/icons/Tiffany & Co.svg'

// Define tab type for better type safety
type TabType = "All" | "Apparel" | "Dress" | "T-shirt" | "Jewelery";

const tabs: TabType[] = ["All", "Apparel", "Dress", "T-shirt", "Jewelery"];

// Category mapping for store API categories with proper typing
const categoryMapping: Record<TabType, string[] | null> = {
  All: null,
  Apparel: ["men's clothing", "women's clothing"],
  Dress: ["women's clothing"],
  "T-shirt": ["men's clothing"],
  Jewelery: ["jewelery"],
};

export default function NewArrival() {
  const navigation = useNavigation<DrawerNavigationProp<RootParamList>>();
  const [activeTab, setActiveTab] = useState<TabType>("All"); // Type the state
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data.slice(0, 4)); // Show first 4 products initially
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Filter products based on active tab
  useEffect(() => {
    if (products.length === 0) return;

    let filtered = products;

    if (activeTab !== "All") {
      const categories = categoryMapping[activeTab]; // No more TypeScript error!
      if (categories) {
        filtered = products.filter((product) =>
          categories.includes(product.category)
        );
      }
    }

    // Always show maximum 4 products in grid
    setFilteredProducts(filtered.slice(0, 4));
  }, [activeTab, products]);

  const handleTabPress = (tab: TabType) => {
    // Type the parameter
    setActiveTab(tab);
  };

  const handleProductPress = (productId: string) => {
    navigation.navigate("ProductDetail", { productId });
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard product={item} onPress={() => handleProductPress(item.id)} />
  );

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={styles.loadingText}>Loading products...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>New Arrival</Text>
        <LineSvg />
      </View>

      {/* Tab bar */}
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tabItem}
            onPress={() => handleTabPress(tab)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                {
                  color:
                    activeTab === tab
                      ? theme.colors.text
                      : theme.colors.greyScale,
                },
              ]}
            >
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={styles.gridContainer}
          columnWrapperStyle={styles.row}
        />
      ) : (
        <View style={styles.centerContent}>
          <Text style={styles.noProductsText}>
            No products available for this category
          </Text>
        </View>
      )}

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() =>
            navigation.navigate("Collection", { collection: "Women" })
          }
        >
          <Text style={styles.exploreText}>Explore More</Text>
          <MaterialIcons
            name="arrow-forward"
            color={theme.colors.text}
            size={16}
          />
        </TouchableOpacity>
      </View>

{/* Brands */}
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>

        <LineSvg />
        <View style={{marginVertical: 20}}>
<Prada/> <Burberry/> <Boss/> <Catier/> <Gucci/> <Tiffany/>
        </View>
        <LineSvg />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: theme.fonts.tenorSans,
    lineHeight: 40,
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  tabItem: {
    alignItems: "center",
    position: "relative",
  },
  tabText: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    paddingVertical: theme.spacing.sm,
  },
  activeIndicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#FF0000",
    marginTop: 4,
    position: "absolute",
    bottom: -2,
  },
  gridContainer: {
    paddingVertical: theme.spacing.md,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: theme.spacing.md,
  },
  loadingText: {
    marginTop: theme.spacing.sm,
    fontSize: 16,
    color: theme.colors.greyScale,
  },
  noProductsText: {
    fontSize: 16,
    color: theme.colors.greyScale,
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 48,
    marginTop: theme.spacing.sm,
  },
  exploreButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    justifyContent: "center",
  },
  exploreText: {
    fontSize: 16,
  },
});
