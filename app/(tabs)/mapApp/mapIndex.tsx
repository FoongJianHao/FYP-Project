import React, { useEffect, useRef } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'expo-router';

const INITIAL_REGION = {
  latitude: 3.0674,
  longitude: 101.6044,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

const markers = [
  {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: "San Francisco City Center"
  },
  {
    latitude: 3.80777,
    longitude: -122.475,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    name: "Golden Gate Bridge"
  }
];

export default function App() {
  const mapRef = useRef<any>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={focusMap}>
          <View style={{ padding: 10 }}>
            <Text>Focus</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, []);

  const focusMap = () => {
    const IPOH = {
      latitude: 4.5975,
      longitude: 101.0901,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    mapRef.current.animateCamera({ center: IPOH, zoom: 10 }, { duration: 2000 }); // 2 second animation
  }

  const onRegionChange = (region: Region) => {
    console.log(region);
  }

  const onMarkerSelected = (marker: any) => {
    Alert.alert(marker.name);
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onRegionChangeComplete={onRegionChange}
        ref={mapRef}
      >
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker}>
            <Callout>
              <View style={{padding: 10}}>
                <Text style={{fontSize: 12}}>{marker.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
} 