import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProductCard } from '../../components/ProductCard'

export default function NewArrival() {
  return (
    <View>
     <ProductCard product={undefined} onPress={function (): void {
        throw new Error('Function not implemented.')
      } }/>
    </View>
  )
}

const styles = StyleSheet.create({})