import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../assets/constant/colors'
import fontSize from '../assets/constant/fontSize'

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
        backgroundColor: colors.back,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'DancingBold',
        color: colors.primary,
        fontSize:fontSize.h1,
    },
})