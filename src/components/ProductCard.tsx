import { View, Text, Image, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";
import { theme } from "../utils/theme";
import { Product } from "../types/Product";

interface Props {
  product: Product;
  onPress: () => void;
  cardStyle?: StyleProp<ViewStyle>;
  imageContainerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>
}

export const ProductCard: React.FC<Props> = ({
  product,
  onPress,
  cardStyle,
  imageContainerStyle,textStyle
}) => (
  <TouchableOpacity style={[styles.card, cardStyle]} onPress={onPress}>
    <View style={[styles.imageContainer, imageContainerStyle]}>
      <Image source={{ uri: product.image }} style={styles.image} />
    </View>
    <Text style={[styles.title, textStyle]}>{product.title}</Text>
    <Text style={[styles.price, textStyle]}>${product.price}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: "48%",
    margin: theme.spacing.sm,
    overflow: "hidden",
  },
  imageContainer: {
    backgroundColor: theme.colors.grey[2],
    padding: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
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
    textAlign: "center",
    fontSize: 15,
  },
});
