import { View, Text } from 'react-native'
import React from 'react'
import Icon from './Icon'

export default function IconTextItem({text, icon}) {
  return (
    <View className="my-2 flex-row items-center">
        <Icon name={icon} color="black" size={24}/>
        <Text className="ml-4 text-slate-900">{text}</Text>
    </View>
  )
}