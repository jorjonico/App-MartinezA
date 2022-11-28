import { Button, StyleSheet, Text, View } from 'react-native'

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
        backgroundColor: '#DFF3E3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'DancingBold',
        color: '#86ABA1',
        fontSize: 40,
    },
})