import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { images } from "@/constants/images"
import { Tabs } from 'expo-router'
import { icons } from '@/constants/icons'

const TabIcon = ({focused, icon, title}) => {
    if(focused) {
        return (
            <ImageBackground
                source ={images.highlight}
                style={{
                    flexDirection: 'row',
                    minWidth: 112,
                    minHeight: 64,
                    marginTop: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    overflow: 'hidden'
                }}
            >
                <Image 
                    source={icon} 
                    style={{
                        width: 20,
                        height: 20,
                        tintColor:'#151312'
                    }}
                />
                <Text 
                    style={{
                        color: '#A8B5DB',
                        fontSize: 16,
                        fontWeight: "600",
                        marginLeft: 8
                    }}
                >
                    {title}
                </Text>
            </ImageBackground>
        )
    }
    return (
        <View 
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 16,
                backgroundColor: 'transparent',
                borderRadius: 50,
            }}
        >
            <Image 
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor:'#A8B5DB'
                }}
            />
        </View>
    )
}
const _layout = () => {
  return (
    <Tabs
        screenOptions={{ 
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            },
            tabBarStyle : {
                backgroundColor: "#0f0d23",
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: "absolute",
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#0f0d23",
            }
        }}
    >
        {/* Hide header */}
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <TabIcon 
                        focused={focused}
                        icon={icons.home} 
                        title="Home"
                    />
                )
            }}
        />
        <Tabs.Screen
            name="reports"
            options={{
                title: 'Reports',
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.reports} 
                        title="Reports"
                    />
                )
            }}
        />
        <Tabs.Screen
            name="map"
            options={{
                title: 'Map',
                headerShown: false, 
                tabBarIcon:({focused}) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.maps} 
                        title="Maps"
                    />
                )
            }}
        />
        <Tabs.Screen
            name="activities"
            options={{
                title: 'Activities',
                headerShown: false, 
                tabBarIcon:({focused}) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.activities} 
                        title="Activities"
                    />
                )
            }}
        />
        <Tabs.Screen
            name="news"
            options={{
                title: 'News',
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.news} 
                        title="News"
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout
