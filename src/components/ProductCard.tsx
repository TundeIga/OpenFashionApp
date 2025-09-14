import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../utils/theme";
import { Product } from "../types/Product";

interface Props {
  product: Product;
  onPress: () => void;
}

export const ProductCard: React.FC<Props> = ({ product, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text style={styles.title}>{product.title}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: "48%", // 2-column grid
    margin: theme.spacing.sm,
    backgroundColor: theme.colors.background,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: { width: "100%", height: 150, resizeMode: "cover" },
  title: { fontFamily: theme.fonts.regular, padding: theme.spacing.sm },
  price: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    padding: theme.spacing.sm,
  },
});
