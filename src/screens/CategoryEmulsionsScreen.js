import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import {COLORS, FONTSIZE} from '../assets/constant/colors'

import {EMULSIONS} from '../data/emulsions'
import EmulsionsItem from '../components/EmulsionsItem'
import React from 'react'

const CategoryEmulsionsScreen = ({navigation, route}) => {
    
    const emulsions = EMULSIONS.filter(emul => emul.category === route.params.categoryID)
    
    const handleSelectedCategory = (item) =>{
        navigation.navigate('Details',{ 
            productID: item.id,
            name: item.name,
        })
    }

    const renderEmulsionsItem = ({ item }) => (
        <EmulsionsItem item={item} onSelected={handleSelectedCategory}/>
        );
    
    return (
        <FlatList 
                data={emulsions}
                keyExtractor={(item) => item.id}
                renderItem={renderEmulsionsItem}
                numColumns={2}
                />
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