import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import { theme } from "../../utils/theme";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootParamList } from "../../types/navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RectangleFill from "../../../assets/icons/Rectangle fill.svg";
import RectangleOutline from "../../../assets/icons/Rectangle outline.svg";
import NewArrival from "./NewArrival";
import HeroSection from "./HeroSection";

const bannerImage = require("../../../assets/homeModel.png");

const SLIDE_INTERVAL_MS = 3000;
const BUTTON_WIDTH = 253;

export default function HomeScreen() {
  const inset = useSafeAreaInsets();
  const navigation =
    useNavigation<DrawerNavigationProp<RootParamList, "Home">>();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor(theme.colors.hmBg, true);
      StatusBar.setBarStyle("dark-content", true);
      StatusBar.setTranslucent(false);
    }, [])
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.hmBg}
        translucent={false}
      />

      <View
        style={{
          paddingTop: inset.top,
          paddingLeft: inset.left,
          paddingRight: inset.right,
        }}
      >
        <Header />
      </View>


      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HeroSection />
        <NewArrival />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
