import { View, Text, Pressable, StyleSheet } from 'react-native';

function RounedContainerButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonOuterContainer,
        pressed ? styles.pressed : "",
      ]}
      onPress={onPress}
      android_ripple={{ color: "white" }}
    >
      {children}
    </Pressable>
  );
}

export default RounedContainerButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius:26,
    margin: 4,
    overflow: 'hidden', // add overflow property here
    backgroundColor: "black", // move backgroundColor here
  },
  buttonInnerContainer: {
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

