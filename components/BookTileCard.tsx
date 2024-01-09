import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';

interface BookTileCardProps extends IBookData {}

const BookTileCard: React.FC<BookTileCardProps> = (props) => {
    const { title, authors, is_staff_pick, average_rating, reviews, price, pic } = props;
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={pic as ImageSourcePropType} />
            <View style={styles.description}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.authors}>{authors}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.tabIconSelected,
        padding: 10,
        borderRadius: 8,
        marginRight: 10,
        flexDirection: 'column',
        gap: 10,
        flex: 1,
        // alignItems: 'center',
        width: 150,
    },
    description: {
        flexDirection: 'column',
        gap: 2,
        padding: 5,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    title: {
        color: 'black',
        fontSize: 14,
        fontWeight: '600',
    },
    authors: {
        color: '#666',
        fontSize: 12,
        fontWeight: '300',
    },
});

export default BookTileCard;
