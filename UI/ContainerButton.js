import { View, Text, Pressable, StyleSheet } from 'react-native';

function ContainerButton({ children, onPress, style }) {
  return (
    <View>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [ styles.pressed, style]
            : style
        }
        onPress={onPress}
        android_ripple={{ color: "white" }}
      >
        {children}
      </Pressable>
    </View>
  );
}

export default ContainerButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: "black",
    paddingVertical: 18,
    paddingHorizontal: 26,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 300,
  },
  pressed: {
    opacity: 0.75,
  },
});
