import {COLORS, FONTSIZE} from '../assets/constant/colors';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const EmulsionsItem = ({item, onSelected}) => {
    return (
        <TouchableOpacity
        onPress={() => onSelected(item)}>
            <View style={styles.emulsionsItem}>
                <View style={styles.title}>
                    <Text>{item.nema}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.price}</Text>
                    <Text  style={styles.details}>{item.weight}</Text>
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
        backgroundColor: COLORS.gris,
    },
    title:{
        fontSize: 20,
        fontFamily: 'DancingBold',
    },
    details:{
        fontFamily: 'RobotoRegular',
        fontSize: FONTSIZE.h3,
    },
})