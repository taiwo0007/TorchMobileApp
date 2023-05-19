import { View, Text, Pressable, StyleSheet } from 'react-native';

function CustomButton({style, children, onPress, color, textStyle }) {
  return (
    <View style={[{
        backgroundColor: color,
        paddingVertical: 18,
        paddingHorizontal: 16,
     
      }, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "white" }}
      >
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 17


  },
  pressed: {
    opacity: 0.75,
  },
});
