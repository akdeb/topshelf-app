import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { Entypo } from '@expo/vector-icons';

import Colors from '@/constants/Colors';

const styles = StyleSheet.create({
    container: { backgroundColor: 'transparent' },
    actionBar: {
        marginTop: 10,
        flexDirection: 'row',
        // height: 80,
        backgroundColor: 'transparent',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: '500',
        color: 'black',
    },
});

const TopshelfHeader: React.FC<{}> = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.actionBar, { backgroundColor: 'transparent' }]}>
                <Entypo name="book" size={24} color="black" />
                <Text style={styles.header}>Topshelf</Text>
            </View>
        </SafeAreaView>
    );
};

export default TopshelfHeader;
