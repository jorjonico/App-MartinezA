import {COLORS, FONTSIZE} from '../assets/constant/colors';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const EmulsionsItem = ({item, onSelected}) => {
    return (
        <TouchableOpacity
        onPress={() => onSelected(item)}>
            <View style={styles.emulsionsItem}>
                <View>
                    <Image source={{uri: item.img}} 
                    style={styles.image} />
                </View>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.details}>Precio: ${item.price}</Text>
                    <Text>Peso: {item.weight}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default EmulsionsItem

const styles = StyleSheet.create({
    emulsionsItem:{
        flexDirection: 'row',
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: COLORS.white,
    },
    title:{
        fontSize: FONTSIZE.h3,
        fontFamily: 'DancingBold',
    },
    details:{
        fontFamily: 'RobotoRegular',
        fontSize: FONTSIZE.h4,
    },
    image:{
        width: 100, 
        height: 130,
    },
})