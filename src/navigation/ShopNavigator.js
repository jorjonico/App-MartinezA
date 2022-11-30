import {COLORS, FONTSIZE} from "../assets/constant/colors";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryEmulsionsScreen from "../screens/CategoryEmulsionsScreen";
import EmulsionsDetailsScreen from "../screens/EmulsionsDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default ShopNavigator = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Categories" screenOptions={{
                headerStyle: {backgroundColor: COLORS.primary},
                headerTintColor: COLORS.white,
                headerTitleStyle: {fontSize: FONTSIZE.h3, fontFamily:'RobotoRegular',},
                headerTitleAlign:'left',
            }}>
                <Stack.Screen name="Categories" component={CategoriesScreen} options={{
                    title: 'Categorías',
                }}/>
                <Stack.Screen name="Emulsions" component={CategoryEmulsionsScreen}/>
                <Stack.Screen name="Details" component={EmulsionsDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};