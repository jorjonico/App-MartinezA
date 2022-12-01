import {COLORS, FONTSIZE} from '../assets/constant/colors'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const GridItem = ({item, onSelected}) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity style={{...styles.container, backgroundColor: item.colors}}
            onPress={() => onSelected(item)}
            >
                <View>
                    <Image source={{uri: item.img}} 
                    style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem:{
        flex: 1, 
        borderRadius: 6,
        margin: 15,
        height: 250,
    },
    container:{
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8,
    },
    title:{
        fontFamily: 'RobotoRegular',
        fontSize: 15,
    },
    image:{
        width: 150, 
        height: 220,
    },
});