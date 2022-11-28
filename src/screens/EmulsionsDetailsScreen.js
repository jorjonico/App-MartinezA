import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const EmulsionsDetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Detalles</Text>
        <Button title='Volver a Categorías' onPress={() => navigation.navigate('Categories')}/>
        </View>
    )
}

export default EmulsionsDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#DFF3E3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'DancingBold',
        color: '#D68060',
        fontSize: 40,
    },
})