import { useNavigation } from "@react-navigation/native";
import { View, Pressable, Image, Text } from "react-native";
import Icon from "../../UI/Icon";

export default function EscooterCard(props) {
  const navigation = useNavigation();
  return (
    <View
      className="rounded-md m-2 flex-1 shadow- overflow-hidden"
      style={styles.card}
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
            id: props.data.key || props.data.id,
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
          className="flex-1 px-4 pt-2 pb-3 border bg-white border-gray-400 rounded-b-xl"
        >
          <Text
            style={{ fontFamily: "gros-bold" }}
            className="font-bold text-2xl mb-1"
          >
            {props.data.modelName}
          </Text>
          <View className="flex-row justify-between items-center flex-1">
            <View className="flex-row items-center">
              <View
                style={{ fontFamily: "gros" }}
                className="text-lg ml-1 flex-row items-center"
              >
                <Icon name="star" size={12} color="blue" />
                <Text
                  style={{ fontFamily: "gros" }}
                  className=" text-black ml-1"
                >
                  {props.data?.rating?.toFixed(2)}
                </Text>
              </View>

              <View className="flex-row items-center ml-1">
                <Text>· </Text>
              </View>
              <Text style={{ fontFamily: "gros" }} className="">
                {props.data.trips} trips
              </Text>
            </View>
            <Text
              style={{ fontFamily: "gros-bold" }}
              className=" font-bold"
            >
              €{props.data.cost.toFixed(0)}/day
            </Text>
          </View>
          <View className="my-2 pt-3  flex-row items-center justify-between border-slate-300 border-t">
            <Text> </Text>
            <Text style={{ fontFamily: "gros-bold" }} className="">
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
    width: "100%",
    width: "100%",
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
    paddingHorizontal: 2,
    borderRadius: 20,
    width: 340,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
  card: {
    borderRadius: 1,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: .9,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    height: "100%",
  },
};
