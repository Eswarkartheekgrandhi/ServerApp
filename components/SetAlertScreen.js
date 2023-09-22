import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/Colors";
import SelectDropdown from "react-native-select-dropdown";

const SetAlertScreen = ({ navigation, onSelect }) => {
  const [message, setMessage] = useState("");
  const options = ["<", ">", "="];
  const [selectedOption, setSelectedOption] = useState("<");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/chair.png")} style={styles.chair} />
      </View>
      <View style={styles.topIcons}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() => navigation.navigate("Info")}
          >
            <Image
              source={require("../assets/backIcon.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SetAlert")}>
            <Image
              source={require("../assets/notification.png")}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.centerLogo}>
        <Image
          source={require("../assets/chair.png")}
          style={styles.centerChair}
        />
      </View>
      <View style={styles.info}>
        <Text>Chair 1</Text>
        <Text>
          <Text>Status - </Text>
          <Text style={styles.Active}>Active</Text>
        </Text>
        <Text>Last Data Received</Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.row}>
          <View style={styles.boxWrapper}>
            <View style={[styles.box, styles.box2]}>
              <Text style={styles.boxTextLeft}>S1</Text>
              <SelectDropdown
                data={options}
                onSelect={(selectedValue) => setSelectedOption(selectedValue)}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={{
                  width: "23%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 20,
                  backgroundColor: "#9fe932",
                  paddingHorizontal: 2,
                  borderWidth: 1,
                  borderColor: "#FFFFFF",
                }}
                dropdownStyle={{
                  backgroundColor: "#C2E4F8",
                  borderColor: "#136291",
                  borderRadius: 4,
                }}
                defaultButtonText="<"
              />
              <Text style={styles.boxTextRight}>245</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
          <View style={styles.boxWrapper}>
            <View style={[styles.box, styles.box2]}>
              <Text style={styles.boxTextLeft}>S2</Text>
              <SelectDropdown
                data={options}
                onSelect={(selectedValue) => setSelectedOption(selectedValue)}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={{
                  width: "23%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 20,
                  backgroundColor: "#9fe932",
                  paddingHorizontal: 2,
                  borderWidth: 1,
                  borderColor: "#FFFFFF",
                }}
                dropdownStyle={{
                  backgroundColor: "#C2E4F8",
                  borderColor: "#136291",
                  borderRadius: 4,
                }}
                defaultButtonText="<"
              />
              <Text style={styles.boxTextRight}>245</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxWrapper, styles.specialBoxWrapper]}>
            <View style={[styles.box, styles.box2]}>
              <Text style={styles.boxTextLeft}>S3</Text>
              <SelectDropdown
                data={options}
                onSelect={(selectedValue) => setSelectedOption(selectedValue)}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={{
                  width: "23%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 20,
                  backgroundColor: "#9fe932",
                  paddingHorizontal: 2,
                  borderWidth: 1,
                  borderColor: "#FFFFFF",
                }}
                dropdownStyle={{
                  backgroundColor: "#C2E4F8",
                  borderColor: "#136291",
                  borderRadius: 4,
                }}
                defaultButtonText="<"
              />
              <Text style={styles.boxTextRight}>245</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
          <View style={styles.boxWrapper}>
            <View style={[styles.box, styles.box1]}>
              <Text style={styles.boxTextLeft}>S4</Text>
              <SelectDropdown
                data={options}
                onSelect={(selectedValue) => setSelectedOption(selectedValue)}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={{
                  width: "23%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 20,
                  backgroundColor: "#9fe932",
                  paddingHorizontal: 2,
                  borderWidth: 1,
                  borderColor: "#FFFFFF",
                }}
                dropdownStyle={{
                  backgroundColor: "#C2E4F8",
                  borderColor: "#136291",
                  borderRadius: 4,
                }}
                defaultButtonText="<"
              />
              <Text style={styles.boxTextRight}>245</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.boxWrapper}>
            <View style={[styles.box, styles.box1]}>
              <Text style={styles.boxTextLeft}>S5</Text>
              <SelectDropdown
                data={options}
                onSelect={(selectedValue) => setSelectedOption(selectedValue)}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={{
                  width: "23%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 20,
                  backgroundColor: "#9fe932",
                  paddingHorizontal: 2,
                  borderWidth: 1,
                  borderColor: "#FFFFFF",
                }}
                dropdownStyle={{
                  backgroundColor: "#C2E4F8",
                  borderColor: "#136291",
                  borderRadius: 4,
                }}
                defaultButtonText="<"
              />
              <Text style={styles.boxTextRight}>245</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
          <View style={styles.boxWrapper}>
            <View style={[styles.box, styles.box2]}>
              <Text style={styles.boxTextLeft}>S6</Text>
              <SelectDropdown
                data={options}
                onSelect={(selectedValue) => setSelectedOption(selectedValue)}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={{
                  width: "23%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 20,
                  backgroundColor: "#9fe932",
                  paddingHorizontal: 2,
                  borderWidth: 1,
                  borderColor: "#FFFFFF",
                }}
                dropdownStyle={{
                  backgroundColor: "#C2E4F8",
                  borderColor: "#136291",
                  borderRadius: 4,
                }}
                defaultButtonText="<"
              />
              <Text style={styles.boxTextRight}>245</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.boxWrapper}>
            <View style={[styles.boxLast, styles.box1]}>
              <Text style={styles.boxTextLeft}>S7</Text>
              <SelectDropdown
                data={options}
                onSelect={(selectedValue) => setSelectedOption(selectedValue)}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={{
                  width: "10%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 20,
                  backgroundColor: "#9fe932",
                  paddingHorizontal: 2,
                  borderWidth: 1,
                  borderColor: "#FFFFFF",
                }}
                dropdownStyle={{
                  backgroundColor: "#C2E4F8",
                  borderColor: "#136291",
                  borderRadius: 4,
                }}
                defaultButtonText="<"
              />
              <Text style={styles.boxTextRight}>245</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.boxWrapper}>
            <View style={[styles.boxLast, styles.box2]}>
              <Text style={styles.boxTextLeft}>S8</Text>
              <SelectDropdown
                data={options}
                onSelect={(selectedValue) => setSelectedOption(selectedValue)}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={{
                  width: "10%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 20,
                  backgroundColor: "#9fe932",
                  paddingHorizontal: 2,
                  borderWidth: 1,
                  borderColor: "#FFFFFF",
                }}
                dropdownStyle={{
                  backgroundColor: "#C2E4F8",
                  borderColor: "#136291",
                  borderRadius: 4,
                }}
                defaultButtonText="<"
              />
              <Text style={styles.boxTextRight}>245</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
        </View>
        <View style={styles.alertInput}>
          <TextInput
            placeholder="Enter Alert Message"
            onChangeText={(text) => setMessage(text)}
            value={message}
            style={styles.alertText}
          />
        </View>
        <TouchableOpacity style={styles.alertButton} onPress={toggleModal}>
          <Text style={styles.alertTextButton}>Set Alert</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(99, 99, 99, 0.81)",
            }}
          >
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/alert.png")}
                    style={styles.image}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.modalText}>Alert Saved</Text>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  dropdownTrigger: {
    width: 20,
    height: 20,
    backgroundColor: "#64BB0C",
    alignItems: "center",
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  dropdownTriggerText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalDropdown: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  modalOption: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  header: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    paddingVertical: 20,
    paddingLeft: 21,
  },
  chair: {
    width: 47,
    height: 45,
    borderColor: COLORS.white,
    borderWidth: 2,
  },
  backContainer: {
    paddingLeft: 15,
    paddingTop: 8,
  },
  backIcon: {
    width: 15,
    height: 15,
  },
  notificationIcon: {
    marginRight: 24,
  },
  topIcons: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  centerChair: {
    position: "relative",
    top: 0,
    left: "36%",
    width: 90,
    height: 83,
  },
  info: {
    position: "relative",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  Active: {
    color: "#64BB0C",
  },
  boxContainer: {
    marginLeft: 24,
    marginTop: 10,
    flex: 1,
    flexDirection: "column",
  },
  row: {
    // flex: 1,
    flexDirection: "row",
    gap: 51,
    marginVertical: 5,
  },
  box: {
    backgroundColor: "#CDEF84",
    width: 135,
    height: 34,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxLast: {
    backgroundColor: "#CDEF84",
    width: 312,
    height: 34,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  boxTextLeft: {
    marginLeft: 8,
    fontSize: 15,
    color: "#0E3F64",
  },
  boxTextRight: {
    marginRight: 8,
    fontSize: 15,
  },
  specialBox: {
    backgroundColor: "#8FC51B",
  },
  boxWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    color: "#ADADAD",
  },
  alertInput: {
    width: 180,
    height: 30,
    borderRadius: 4,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  alertText: {
    flex: 1,
  },
  alertButton: {
    width: 252,
    height: 45,
    backgroundColor: "#CDEF84",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 16,
  },
  alertTextButton: {
    fontWeight: 400,
    fontSize: 20,
  },
  box1: {
    backgroundColor: "#F1F1F1",
  },
  box2: {
    backgroundColor: "#E8F6FE",
  },
  imageContainer: {
    width: 154,
    height: 154,
    backgroundColor: "#CAFF94",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  image: {
    width: 68,
    height: 68,
  },
  modalText: {
    color: "#FEFEFE",
    fontSize: 24,
    fontWeight: 500,
    textAlign: "center",
  },
});

export default SetAlertScreen;
