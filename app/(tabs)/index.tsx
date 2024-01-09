import { Alert, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import CameraView from '@/components/CameraView';
import React, { useState } from 'react';
import { supabase } from '@/config/initSupabase';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Sign in with email and password
    const onSignInPress = async () => {
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) Alert.alert(error.message);
        setLoading(false);
    };

    // Create a new user
    const onSignUpPress = async () => {
        setLoading(true);
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) Alert.alert(error.message);
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Spinner visible={loading} />
            <TextInput
                autoCapitalize="none"
                placeholder="john@doe.com"
                value={email}
                onChangeText={setEmail}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.inputField}
            />

            <TouchableOpacity onPress={onSignInPress} style={styles.button}>
                <Text style={{ color: '#fff' }}>Sign in</Text>
            </TouchableOpacity>
            <Button onPress={onSignUpPress} title="Create Account" color={'#000'}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
        padding: 20,
        // backgroundColor: '#151515',
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        margin: 50,
        color: '#000',
    },
    inputField: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderColor: '#2b825b',
        borderRadius: 4,
        padding: 10,
        color: '#fff',
        backgroundColor: '#363636',
    },
    button: {
        marginVertical: 15,
        alignItems: 'center',
        backgroundColor: '#2b825b',
        padding: 12,
        borderRadius: 4,
    },
});
