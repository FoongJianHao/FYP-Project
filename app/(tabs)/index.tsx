import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-6xl text-primary font-italic">Welcome!</Text>
      <Link href="/dropdown">Go to dropdown</Link>
    </View>
  );
}


// const styles