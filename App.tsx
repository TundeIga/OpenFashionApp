import { useFonts } from "expo-font";
import AppNavigator from "./src/navigation/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Bodoni-Bold": require("./assets/fonts/BodoniModa_28pt-Bold.ttf"),
    "Bodoni-Italic": require("./assets/fonts/BodoniModa_28pt-BoldItalic.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "TenorSans-Regular": require("./assets/fonts/TenorSans-Regular.ttf")
  });

  if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}
