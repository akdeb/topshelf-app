import { View, StyleSheet, Text, ListRenderItem } from 'react-native';
import React from 'react';
import BottomSheet, { BottomSheetFlatList, BottomSheetFlatListMethods } from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import BookExpandedCard from './BookExpandedCard';

interface BottomSheetBookSearchPageProps {
    bookResults: any[];
    loading: boolean;
}

const transformOpenLibraryResponse = (data: OpenLibraryResponse): IBookData => {
    return {
        title: data.title,
        authors: data.author_name.join(', '),
        average_rating: 0,
        num_pages: 0,
        reviews: 0,
        publisher: '',
        price: 0,
        pic: undefined,
        is_staff_pick: false,
        publish_date: data.first_publish_year.toString(),
        price_before: 0,
    };
};

const BottomSheetBookSearchPage: React.FC<BottomSheetBookSearchPageProps> = ({
    bookResults,
    loading,
}) => {
    const bottomSheetRef = React.useRef<BottomSheet>(null);
    const snapPoints = React.useMemo(() => ['10%', '77%'], []);
    const listRef = React.useRef<BottomSheetFlatListMethods>(null);

    console.log(loading);

    // const showMap = () => {
    //     bottomSheetRef.current?.collapse();
    // };

    const renderRow: ListRenderItem<OpenLibraryResponse> = ({ item }) => {
        return <BookExpandedCard {...transformOpenLibraryResponse(item)} coverID={item.cover_i} />;
    };

    return (
        <BottomSheet
            index={1}
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            handleIndicatorStyle={{
                backgroundColor: '#eee',
            }}
            enablePanDownToClose={false}
        >
            <BottomSheetFlatList
                ref={listRef}
                data={loading ? [] : bookResults}
                renderItem={renderRow}
                keyExtractor={(item) => item.key}
                onEndReachedThreshold={0.5}
                onScrollToIndexFailed={() => {
                    console.log('scroll failed');
                }}
                ListHeaderComponent={
                    <Text
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            fontWeight: '600',
                            marginBottom: 10,
                        }}
                    >
                        Showing 10 books
                    </Text>
                }
            />
            {/* <Text>{JSON.stringify(bookResults)}</Text> */}
            {/* <View style={styles.absoluteBtn}>
                <TouchableOpacity style={styles.mapBtn} onPress={showMap}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>Map</Text>
                    <Ionicons name="map" size={20} color="#fff" />
                </TouchableOpacity>
            </View> */}
        </BottomSheet>
    );
};

export default BottomSheetBookSearchPage;
