import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

// Define screen types for navigation
type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

// Explicitly define navigation type
type DrawerNavProps = DrawerNavigationProp<RootStackParamList>;  

export default function Index() {
  const navigation = useNavigation<DrawerNavProps>(); // Fix navigation type

  return (
    <View style={{flex: 1, backgroundColor: "black", zIndex: 0}}>
      <Image 
        source={images.bg} 
        style={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          resizeMode: "cover",
        }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header with Menu & Logo */}
        <View 
          style={{ 
            flexDirection: "row", 
            alignItems: "center", 
            padding: 10 
          }}
        >

          {/* Hamburger Menu */}
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={32} color="white" />
          </TouchableOpacity>

          {/* Logo */}
          <Image 
            source={icons.logo}
            style={{
              width: 32,
              height: 32,
              marginLeft: 10, // Spacing between menu and logo
            }}
          />
        </View>

        {/* Scrollable Content */}
        <ScrollView 
          style={{
            flex: 1,
            paddingHorizontal: 20
          }}
        >
          <Text style={{ color: "white" }}>Content below logo</Text>
          <Link 
            href="/map" 
            style={{
              color: "red", 
              fontWeight: "600",
              fontSize: 24
            }}
          >
            This is a link to the maps
          </Link>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
