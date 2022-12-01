import {COLORS, FONTSIZE} from '../assets/constant/colors'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { CATEGORIES } from '../data/categories'
import GridItem from '../components/GridItem'
import React from 'react'

const CategoriesScreen = ({navigation}) => {

    const handleSelectedCategory = (item) =>{
        navigation.navigate('Emulsions',{ 
            categoryID: item.id,
            name: item.title,
        })
    }

    const renderGridItem = ({ item }) => (
        <GridItem item={item} onSelected={handleSelectedCategory}/>
        );
    
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Nuestras emulsiones</Text>
            </View>
            <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
            />
        </View>
    );
};

export default CategoriesScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.back,
    },
    titleContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    title:{
        fontFamily: 'DancingBold',
        color: COLORS.secondary,
        fontSize:FONTSIZE.h2,
    },
})