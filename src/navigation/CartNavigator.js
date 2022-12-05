import {COLORS, FONTSIZE} from "../assets/constant/colors";

import CartScreen from "../screens/CartScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default CartNavigator = () =>{
    return (
            <Stack.Navigator initialRouteName="Categories" screenOptions={{
                headerStyle: {backgroundColor: COLORS.primary},
                headerTintColor: COLORS.white,
                headerTitleStyle: {fontSize: FONTSIZE.h4, fontFamily:'RobotoRegular',},
                headerTitleAlign:'center',
            }}>
            <Stack.Screen 
                name="Cart" 
                component={CartScreen}
                options={{title: "Carrito"}}
            />
            </Stack.Navigator>
    );
};