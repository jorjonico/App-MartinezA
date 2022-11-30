import { Button, StyleSheet, Text, View } from 'react-native'
import {COLORS, FONTSIZE} from '../assets/constant/colors'

import React from 'react'

const CategoryEmulsionsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Emulsiones</Text>
        <Button title='Ver Detalles' onPress={() => navigation.navigate('Details')}/>
        </View>
    )
}

export default CategoryEmulsionsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.back,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'DancingBold',
        color: COLORS.primary,
        fontSize:FONTSIZE.h1,
    },
})