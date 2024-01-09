import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Pill = ({
    isSelected,
    pickGenre,
    pill,
}: {
    pill: {
        genre: IBookStrings;
        displayName: string;
    };
    isSelected: boolean;
    pickGenre: (genre: IBookStrings) => void;
}) => {
    return (
        <TouchableOpacity
            style={[styles.pill, isSelected && styles.selectedPill]}
            onPress={() => pickGenre(pill.genre)}
        >
            <Text style={[styles.pillText, isSelected && styles.selectedPillText]}>
                {pill.displayName}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    pill: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 5,
        height: 40,
        // height: 0,
    },
    selectedPill: {
        borderColor: '#3498db',
    },
    pillText: {
        color: '#333',
        fontSize: 14,
        fontWeight: '400',
    },
    selectedPillText: {
        color: '#3498db',
        fontWeight: '500',
    },
});

export default Pill;
