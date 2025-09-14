import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RootParamList, RootRouteProps } from "../types/navigation";

export default function CategoryScreen() {
  const route = useRoute<RootRouteProps<"Category">>(); // Ensure RootRouteProps is defined
  const { category } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category} Category</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18 },
});
