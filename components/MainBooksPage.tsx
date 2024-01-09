import { View, Text, StyleSheet, FlatList, ScrollView, ListRenderItem } from 'react-native';
import React from 'react';
import BookTileCard from './BookTileCard';
import { bookData as BookData, Genres } from '@/constants/BookData';
import BookExpandedCard from './BookExpandedCard';
import BottomSheetBookSearchPage from './BottomSheetBookSearchPage';

interface MainBooksPageProps {
    genre: IBookStrings;
}

const MainBooksPage: React.FC<MainBooksPageProps> = (props) => {
    const { genre } = props;

    const renderRow: ListRenderItem<IBookData> = ({ item }) => {
        return <BookExpandedCard {...item} />;
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 300 }}>
                {BookData[genre].books.map((book, index) => {
                    return <BookTileCard key={index} {...book} />;
                })}
            </ScrollView>
            <FlatList
                // ref={listRef}
                style={styles.verticallyScrollable}
                data={BookData[genre].books}
                renderItem={renderRow}
                keyExtractor={(item) => item.title}
                onEndReachedThreshold={0.5}
                onScrollToIndexFailed={() => {
                    console.log('scroll failed');
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 180,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    verticallyScrollable: {
        marginTop: 10,
    },
});

export default MainBooksPage;
