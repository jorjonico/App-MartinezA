import { Button, StyleSheet, Text, View } from 'react-native'
import {COLORS, FONTSIZE} from '../assets/constant/colors'

import React from 'react'

const CategoriesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>CategoriesScreen</Text>
        <Button title='Ver Emulsiones' onPress={() => navigation.navigate('Emulsions')}/>
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.back,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'DancingBold',
        color: COLORS.secondary,
        fontSize:FONTSIZE.h1,
    },
})