import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../utils/theme";
import { Product } from "../types/Product";

interface Props {
  product: Product;
  onPress: () => void;
}

export const ProductCard: React.FC<Props> = ({ product, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    {/* <Image source={{ uri: product.image }} style={styles.image} /> */}
    <Image source={require('../../assets/homeModel.png')} style={styles.image} />
    <Text style={styles.title}>21WN reversible angora cardigan</Text>
    <Text style={styles.price}>$120</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: "48%",
    margin: theme.spacing.sm,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontFamily: theme.fonts.tenorSans,
    padding: theme.spacing.sm,
    textAlign: "center",
    fontSize: 12,
  },
  price: {
    fontFamily: theme.fonts.tenorSans,
    color: theme.colors.primary,
    // padding: theme.spacing.sm,
    textAlign: "center",
    fontSize: 15,

  },
});
