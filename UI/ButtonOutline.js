import { View, Text, Pressable, StyleSheet } from 'react-native';

function ButtonOutline({style, children, onPress, color, textStyle }) {
  return (
    <View style={[{
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 16,
        borderRadius: 13,
        borderColor: color,
        borderWidth: 1,
     
      }, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        // android_ripple={{ color: "white" }}
      >
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default ButtonOutline;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },

  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 17


  },
  pressed: {
    opacity: 0.75,
  },
});
