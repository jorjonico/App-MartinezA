import {COLORS, FONTSIZE} from '../assets/constant/colors'
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'

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

    const image = {uri: "https://raw.githubusercontent.com/jorjonico/App-MartinezA/main/src/assets/img/logo-og.png"};
    
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={image} resizeMode='cover'>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Categorías</Text>
                </View>
                <FlatList 
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderGridItem}
                numColumns={2}
                />
            </ImageBackground>
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
    image: {
        flex: 1,
        justifyContent: "center",
    },
})