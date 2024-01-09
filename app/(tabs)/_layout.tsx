import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { FontAwesome5, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import TopshelfHeader from '@/components/TopshelfHeader';

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.light.tabIconSelected,
                headerTransparent: true,
                // tabBarLabelStyle: {}
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    // header: () => null,
                    header: () => <TopshelfHeader />,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="wishlist"
                options={{
                    // headerShown: false,
                    tabBarLabel: 'Wishlist',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    headerShown: false,
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="camera-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default Layout;
