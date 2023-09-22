import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../constants/Colors";

const ActiveScreen = ({ navigation }) => {
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
            <View style={styles.box}>
              <Text style={styles.boxTextLeft}>S1</Text>
              <Text style={styles.boxTextRight}>245</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
          <View style={styles.boxWrapper}>
            <View style={styles.box}>
              <Text style={styles.boxTextLeft}>S2</Text>
              <Text style={styles.boxTextRight}>3456</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxWrapper, styles.specialBoxWrapper]}>
            <View style={[styles.box, styles.specialBox]}>
              <Text style={styles.boxTextLeft}>S3</Text>
              <Text style={styles.boxTextRight}>103</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
          <View style={styles.boxWrapper}>
            <View style={styles.box}>
              <Text style={styles.boxTextLeft}>S4</Text>
              <Text style={styles.boxTextRight}>10</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.boxWrapper}>
            <View style={styles.box}>
              <Text style={styles.boxTextLeft}>S5</Text>
              <Text style={styles.boxTextRight}>245</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
          <View style={styles.boxWrapper}>
            <View style={styles.box}>
              <Text style={styles.boxTextLeft}>S6</Text>
              <Text style={styles.boxTextRight}>001</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.boxWrapper}>
            <View style={styles.boxLast}>
              <Text style={styles.boxTextLeft}>S7</Text>
              <Text style={styles.boxTextRight}>6789</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.boxWrapper}>
            <View style={styles.boxLast}>
              <Text style={styles.boxTextLeft}>S8</Text>
              <Text style={styles.boxTextRight}>245</Text>
            </View>
            <Text style={styles.bottomText}>Left top</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
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
    top: "40%",
    left: "36%",
    width: 90,
    height: 83,
  },
  info: {
    position: "relative",
    top: "7%",
    alignItems: "center",
    justifyContent: "center",
  },
  Active: {
    color: "#64BB0C",
  },
  boxContainer: {
    marginLeft: 24,
    marginTop: 60,
    flex: 1,
    flexDirection: "column",
  },
  row: {
    // flex: 1,
    flexDirection: "row",
    gap: 51,
    marginVertical: 10,
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
});

export default ActiveScreen;
