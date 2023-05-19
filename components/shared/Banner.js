import { View, Text } from 'react-native'
import React from 'react'

export default function Banner() {
  return (
    <View className="bg-black h-20 items-center justify-center">
      <Text className="text-center px-4 text-white"> <Text className="font-bold">Electric scooters</Text> are availible wihtin selected locations, but terms and conditions may apply</Text>
      <Text className="text-center mt-2 underline text-white font-bold">Find out more</Text>
    </View>
  )
}