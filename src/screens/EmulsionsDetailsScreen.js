import { Button, StyleSheet, Text, View } from 'react-native'
import {COLORS, FONTSIZE} from '../assets/constant/colors'

import React from 'react'

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
        backgroundColor:COLORS.acento,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'DancingBold',
        color:COLORS.white,
        fontSize:FONTSIZE.h1,
    },
})