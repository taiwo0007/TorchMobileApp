import { View, Text } from 'react-native'
import React from 'react'

export default function Subtitle({children}) {
    return (
        <Text
          style={{ fontFamily: "gros-bold", fontSize: 24 }}
          className="font-bold"
        >
          {children}
        </Text>
      );
}