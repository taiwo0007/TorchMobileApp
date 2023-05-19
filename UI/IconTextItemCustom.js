import { View, Text } from 'react-native'
import React from 'react'
import Icon from './Icon'

export default function IconTextItemCustom({text, icon, children}) {
  return (
    <View className="my-2 flex-row items-center">
        {children}
      <Text style={{fontFamily: "gros"}} className="ml-4 text-slate-900">{text}</Text>
    </View>
  )
}