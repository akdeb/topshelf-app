import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';

interface BookExpandedCardProps extends IBookData {
    coverID: number;
}

const generateOpenLibraryCoverURL = (coverID: number) => {
    return `http://covers.openlibrary.org/b/id/${coverID}-L.jpg`;
};

const BookExpandedCard: React.FC<BookExpandedCardProps> = (props) => {
    const { title, authors, is_staff_pick, average_rating, reviews, price, pic, coverID } = props;
    return (
        <TouchableOpacity
            style={{
                backgroundColor: Colors.dark.tabIconSelected,
                padding: 10,
                borderRadius: 8,
                marginRight: 10,
                flexDirection: 'row',
                gap: 10,
                flex: 1,
                height: 200,
                // width: 150,
            }}
        >
            <Image
                style={styles.image}
                source={
                    pic
                        ? (pic as ImageSourcePropType)
                        : { uri: generateOpenLibraryCoverURL(coverID) }
                }
            />
            <View style={styles.description}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
                    {title}
                </Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.authors}>
                    {authors}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '30%',
        height: 150,
        borderRadius: 10,
    },
    description: {
        flexDirection: 'column',
        gap: 2,
        padding: 10,
        width: '70%',
    },
    title: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
    },
    authors: {
        color: '#666',
        fontSize: 12,
        fontWeight: '300',
    },
});

export default BookExpandedCard;
