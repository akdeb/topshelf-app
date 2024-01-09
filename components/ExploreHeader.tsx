import { SafeAreaView, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { Genres } from '@/constants/BookData';
import { defaultStyles } from '@/constants/Styles';
import Pill from './Pill';

interface ExploreHeaderProps {
    genre: IBookStrings;
    pickGenre: (genre: IBookStrings) => void;
    setSearchQuery: (text: string) => void;
    handleSearch: () => void;
}

const ExploreHeader: React.FC<ExploreHeaderProps> = (props) => {
    const { genre, pickGenre, setSearchQuery, handleSearch } = props;
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                autoCapitalize="none"
                placeholder="✨ Search for a book for any occasion"
                style={[defaultStyles.inputField, { margin: 10 }]}
                onChangeText={(text) => setSearchQuery(text)}
                onSubmitEditing={handleSearch}
            />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Genres.map((genrePill, index) => {
                    return (
                        <Pill
                            pickGenre={pickGenre}
                            key={index}
                            pill={genrePill}
                            isSelected={genrePill.genre === genre}
                        />
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: '#fff', flexDirection: 'column' },
});

export default ExploreHeader;
