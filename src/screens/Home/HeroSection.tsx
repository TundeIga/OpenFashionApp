import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from 'react'
import RectangleFill from "../../../assets/icons/Rectangle fill.svg";
import RectangleOutline from "../../../assets/icons/Rectangle outline.svg";
import { theme } from "../../utils/theme";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootParamList } from "../../types/navigation";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const bannerImage = require("../../../assets/homeModel.png");

const SLIDE_INTERVAL_MS = 3000;
const BUTTON_WIDTH = 253;

export default function HeroSection() {
  const inset = useSafeAreaInsets();
  const navigation =
      useNavigation<DrawerNavigationProp<RootParamList>>();

    const items = ["EXPLORE COLLECTION", "NEW DROP", "LIMITED COLLECTION"];
  
    // active index & animation value
    const [activeIndex, setActiveIndex] = useState(0);
    const translateX = useRef(new Animated.Value(0)).current;
  
    // Slide to index (animated)
    const slideTo = (index: number) => {
      Animated.timing(translateX, {
        toValue: -index * BUTTON_WIDTH,
        duration: 400,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start();
      setActiveIndex(index);
    };
  
    // Auto cycle interval
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prev) => {
          const next = (prev + 1) % items.length;
          // animate
          slideTo(next);
          return next;
        });
      }, SLIDE_INTERVAL_MS);
  
      return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const onPressButton = () => {
      navigation.navigate("Collection", { collection: "Women" });
    };
  return (
    <View style={styles.bannerContainer}>
      <ImageBackground
        source={bannerImage}
        style={styles.banner}
        resizeMode="contain"
      >
        {/* Titles */}
        <View style={styles.overlay}>
          <Text style={[styles.title, { marginLeft: -110 }]}>LUXURY </Text>
          <Text style={[styles.title, { marginLeft: -70 }]}> FASHION </Text>
          <Text style={styles.title}> & ACCESSORIES</Text>
        </View>

        {/* Sliding button */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={onPressButton}
          style={[styles.buttonContainer, { bottom: 80 + inset.bottom }]}
        >
          {/* animated sliding row */}
          <Animated.View
            style={[
              styles.slidesRow,
              {
                transform: [{ translateX }],
              },
            ]}
          >
            {items.map((label) => (
              <View key={label} style={styles.slideItem}>
                <Text style={styles.buttonText}>{label}</Text>
              </View>
            ))}
          </Animated.View>
        </TouchableOpacity>

        {/* Indicators (rhombus SVGs) */}
        <View style={styles.indicatorsContainer}>
          {items.map((_, i) =>
            i === activeIndex ? (
              <RectangleFill key={`ind-${i}`} width={12} height={12} />
            ) : (
              <RectangleOutline key={`ind-${i}`} width={12} height={12} />
            )
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({bannerContainer: {
    flex: 1,
    minHeight: 600, // Ensure minimum height but allow flexibility
  },
  banner: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    alignItems: "center",
    padding: theme.spacing.lg,
  },
  title: {
    fontFamily: theme.fonts.bodoniItalic,
    fontSize: 39,
    color: "#333",
    opacity: 0.7,
    lineHeight: 44,
    letterSpacing: 2,
  },
  buttonContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 120, // Adjusted from dynamic bottom positioning
    width: BUTTON_WIDTH,
    height: 48,
    backgroundColor: "rgba(51,51,51,0.4)",
    borderRadius: 30,
    overflow: "hidden",
    justifyContent: "center",
  },
  slidesRow: {
    flexDirection: "row",
    width: BUTTON_WIDTH * 3,
  },
  slideItem: {
    width: BUTTON_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
  },
  buttonText: {
    color: "#fff",
    fontFamily: theme.fonts.regular,
    textAlign: "center",
    fontSize: 16,
  },
  indicatorsContainer: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },})