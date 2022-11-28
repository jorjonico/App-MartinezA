import { Button, StyleSheet, Text, View } from 'react-native'

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