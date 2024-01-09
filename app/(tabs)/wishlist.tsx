import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    ScrollView,
    ListRenderItem,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import BookTileCard from '@/components/BookTileCard';
import BookExpandedCard from '@/components/BookExpandedCard';
import Pill from '@/components/Pill';
import ExploreHeader from '@/components/ExploreHeader';
import MainBooksPage from '@/components/MainBooksPage';
import BottomSheetBookSearchPage from '@/components/BottomSheetBookSearchPage';

const wishlist = () => {
    const [genre, setGenre] = React.useState<IBookStrings>('modern');

    const pickGenre = (genre: IBookStrings) => {
        setGenre(genre);
    };

    const [loading, setLoading] = React.useState<boolean>(false); // loading state
    const [searchQuery, setSearchQuery] = React.useState('');
    const [bookData, setBookData] = React.useState<any[]>([]);

    const handleSearch = async () => {
        setLoading(true);
        const response = await fetch(
            `https://openlibrary.org/search.json?q=${searchQuery}&limit=10&fields=key,cover_i,title,author_name,isbn,first_publish_year,id_goodreads`
        );
        const data = await response.json();
        setBookData(data.docs); // update the book data with the results
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    header: () => (
                        <ExploreHeader
                            genre={genre}
                            pickGenre={pickGenre}
                            setSearchQuery={setSearchQuery}
                            handleSearch={handleSearch}
                        />
                    ),
                }}
            />
            <MainBooksPage genre={genre} />
            <BottomSheetBookSearchPage bookResults={bookData} loading={loading} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        // marginTop: 40,
    },
});

export default wishlist;
