import { View, Text, Pressable,  } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Icon({onPress, size, name, color, children}) {
  return (
    <Pressable onPress={onPress}>
    {children}
  </Pressable>
  )
}


