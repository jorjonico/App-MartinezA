import {COLORS, FONTSIZE} from '../assets/constant/colors';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const EmulsionsItem = ({item, onSelected}) => {
    return (
        <TouchableOpacity
        onPress={() => onSelected(item)}>
            <View style={styles.emulsionsItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>Precio: ${item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default EmulsionsItem

const styles = StyleSheet.create({
    emulsionsItem:{
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
})