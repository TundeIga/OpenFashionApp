import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { theme } from "../../utils/theme";
import LineSvg from "../../../assets/icons/3.svg";

const tabs = ["All", "Apparel", "Dress", "T-shirt", "Bag"];

export default function NewArrival() {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <View style={{ padding: theme.spacing.md }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontFamily: theme.fonts.tenorSans,
            lineHeight: 40,
          }}
        >
          New Arrival
        </Text>

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

      <ProductCard
        product={undefined}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "#FF0000", // Red dot
    marginTop: 4,
    position: "absolute",
    bottom: -2,
  },
});
