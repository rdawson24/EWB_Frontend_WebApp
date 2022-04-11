import { StyleSheet, Text, View } from 'react-native';

const AppHeader = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>EWB Nappy Washing Admin Portal</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#D9E0E1',
        padding: 30,
        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 40,
        textAlign: 'start',
        fontSize: 24,
    }
});

export default AppHeader;