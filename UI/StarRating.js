import { View, Text } from 'react-native'
import React from 'react'
import Icon from './Icon'

export default function StarRating({rating}) {
  return (

    <View className="flex-1 flex-row items-center">
    <Icon name="star" size={12} color="black" />
    <Text className="ml-1">{rating}</Text>
</View>
  )
}