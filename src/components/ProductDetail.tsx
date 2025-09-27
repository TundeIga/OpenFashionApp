import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { RootRouteProps } from "../types/navigation";
import { Product } from "../types/Product";
import axios from "axios";
import { theme } from "../utils/theme";

export default function ProductDetail() {
  const route = useRoute<RootRouteProps<"ProductDetail">>();
  const { productId } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [productId]);

  if (loading) {
    return (
      <View style={styles.centerContent}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={styles.loadingText}>Loading product details...</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.centerContent}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.category}>Category: {product.category}</Text>
        <Text style={styles.rating}>Rating: {product.rating}/5</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },
  content: {
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.tenorSans,
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  price: {
    fontSize: 20,
    fontFamily: theme.fonts.tenorSans,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  category: {
    fontSize: 16,
    color: theme.colors.greyScale,
    marginBottom: theme.spacing.sm,
    textTransform: "capitalize",
  },
  rating: {
    fontSize: 16,
    color: theme.colors.greyScale,
    marginBottom: theme.spacing.lg,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: theme.colors.text,
  },
  loadingText: {
    marginTop: theme.spacing.sm,
    fontSize: 16,
    color: theme.colors.greyScale,
  },
  errorText: {
    fontSize: 16,
    color: theme.colors.greyScale,
    textAlign: "center",
  },
});
