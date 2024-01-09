import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdffff',
        // padding: 26
    },
    inputField: {
        height: 50,
        // borderWidth: 1,
        // borderColor: '#ABABAB',
        fontSize: 16,
        borderRadius: 30,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    btn: {
        backgroundColor: Colors.dark.tabIconSelected,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
    btnIcon: {
        position: 'absolute',
        left: 10,
    },
    footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopColor: '#ABABAB',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    roundButton: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.dark.tabIconSelected,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.dark.tabIconSelected,
    },
});
