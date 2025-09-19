import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { RootRouteProps } from "../types/navigation";

export default function CollectionScreen() {
  const route = useRoute<RootRouteProps<'Collection'>>()
  const {collection} = route.params
  return (
    <View>
      <Text>CollectionScreen</Text>
      <Text style={{ fontFamily: "Roboto-Regular" }}>Test Font{collection} collection</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
