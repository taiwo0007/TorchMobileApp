import { View, Text, Modal } from "react-native";
import React from "react";

export default function BottomModal({visible}) {
  return (
    <View style={{zIndex: 80}}>
      <Modal transparent={true} visible={visible}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
           

          }}
        >
          <View className="borde"
            style={{
              width: "100%",
              backgroundColor: "white",
              height: "80%"
        
            }}
          >
           <Text className="text-7xl">hello world</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
