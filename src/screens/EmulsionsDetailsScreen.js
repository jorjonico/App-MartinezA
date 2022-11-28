import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../assets/constant/colors'
import fontSize from '../assets/constant/fontSize'

const EmulsionsDetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Detalles</Text>
        <Button title='Volver a Categorías' onPress={() => navigation.popToTop()}/>
        <Button title='Atras' onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default EmulsionsDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:colors.acento,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'DancingBold',
        color:colors.white,
        fontSize:fontSize.h1,
    },
})