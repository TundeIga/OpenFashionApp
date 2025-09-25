import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProductCard } from '../../components/ProductCard'
import { theme } from '../../utils/theme'
import LineSvg from '../../../assets/icons/3.svg'

export default function NewArrival() {
  return (
    <View style={{ padding: theme.spacing.md }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontFamily: theme.fonts.tenorSans,
            lineHeight: 40
          }}
        >
          New Arrival
        </Text>
     
        <LineSvg />
      </View>
      <ProductCard
        product={undefined}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ProductCard
        product={undefined}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ProductCard
        product={undefined}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ProductCard
        product={undefined}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({})