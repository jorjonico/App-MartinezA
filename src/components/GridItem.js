import {COLORS, FONTSIZE} from '../assets/constant/colors'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const GridItem = ({item, onSelected}) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity style={{...styles.container, backgroundColor: item.colors}}
            onPress={() => onSelected(item)}
            >
                <View style={styles.itemContainer}>
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
        margin: 10,
        height: 220,
    },
    container:{
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    title:{
        fontFamily: 'RobotoRegular',
        fontSize: 15,
        textAlign:'center',
        color:COLORS.primary,
    },
    image:{
        width: 150, 
        height: 170,
    },
    itemContainer:{
        justifyContent:'center',
        alignItems:'center',
    }
});