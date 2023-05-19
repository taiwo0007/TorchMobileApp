import { View, Text, Pressable, StyleSheet } from 'react-native';

function NormalButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "white" }}
      >
        <Text className="font-bold" style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default NormalButton;

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
