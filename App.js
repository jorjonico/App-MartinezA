import BootomTabNavigator from './src/navigation/BottomTabNavigator';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'DancingRegular': require('./src/assets/font/DancingScript-Regular.ttf'),
    'DancingBold': require('./src/assets/font/DancingScript-Bold.ttf'),
    'RobotoRegular': require('./src/assets/font/Roboto-Regular.ttf'),
    'RobotoBold': require('./src/assets/font/Roboto-Bold.ttf'),
  });

  if(!fontsLoaded){
    return null
  }
  
  return <BootomTabNavigator />
}