import { View, Text, Pressable,  } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Icon({onPress, size, name, color}) {
  return (
    <Pressable onPress={onPress}>
    <Ionicons color={color} size={size} name={name} />
  </Pressable>
  )
}


