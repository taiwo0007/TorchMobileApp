import { useNavigation } from "@react-navigation/native";
import { View, Pressable, Image, Text, Dimensions } from "react-native";
import Icon from "../../UI/Icon";


const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

export default function EscooterCardLarge(props) {


  const navigation = useNavigation();
  return (
    <View
      className="rounded-md my-2 flex-1 overflow-hidden"
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "white" }}
        onPress={() => {
          navigation.navigate("EscooterDetailScreen", {
            modelName: props.data.modelName,
            cost: props.data.props,
            image: props.data.image,
            id: (props.data.key || props.data.id),
          });
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            className="rounded-t-xl"
            style={styles.image}
            source={{
              uri: props.data.image,
            }}
          />
        </View>
        <View
          style={styles.outer}
          className="flex-1 px-4 pt-2 pb-3 border bg-white border-gray-300 rounded-b-2xl"
        >
          <Text
          
            className="font-bold text-2xl mb-1"
          >
            {props.data.modelName}
          </Text>
          <View className="flex-row justify-between items-center flex-1">
            <View className="flex-row items-center">
              <View
               
                className="text-lg ml-1 flex-row items-center"
              >
                <Icon name="star" size={18} color="blue" />
                <Text  className="text-lg ml-1">
                {props.data.rating?.toFixed(2)}
                </Text>
              </View>

              <View className="flex-row items-center ml-1">
                <Text>· </Text>
              </View>
              <Text className="text-lg">
                {props.data.trips} trips
              </Text>
            </View>
            <Text

              className="text-lg font-bold"
            >
              €{props.data.cost.toFixed(0)}/day
            </Text>
          </View>
          <View className="my-3 pt-3  flex-row items-center justify-between border-slate-200 border-t">
            <Text> </Text>
            <Text  className="text-lg">
              Dublin, Ireland
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = {
  imageContainer: {
 
    aspectRatio: 1, // Maintain aspect ratio of the image
  },
  image: {
    flex: 1, // Take up available space within the container
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 2,
    paddingHorizontal: 0,
    borderRadius: 20,
    width: imageWidth - "15",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
};
