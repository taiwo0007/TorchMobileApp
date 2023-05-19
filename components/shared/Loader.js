import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator, MD2Colors } from "react-native-paper";


export default function Loader({size}) {
  return (
    <ActivityIndicator
    animating={true}
    size={size}
    color={MD2Colors.blue700}
  />

  )
}