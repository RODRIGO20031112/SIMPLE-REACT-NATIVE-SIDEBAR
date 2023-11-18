import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Sidebar } from "./components/Sidebar/sidebar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Sidebar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcc00",
  },
});
