// SearchHeader.js
import React, { useState } from "react";
import {
  View,
  Image,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import Input from "./Input";
import SearchModal from "./SearchModal";

const SearchHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <SearchModal
        onCloseModal={onCloseModal}
        setShowModal={setShowModal}
        isVisible={showModal}
      />

      <SafeAreaView>
        <View className="mb-4" style={styles.container}>
          <StatusBar />

          <Input
            showModal={showModal}
            onCloseModal={onCloseModal}
            onShowModal={onShowModal}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
  },
};

export default SearchHeader;
