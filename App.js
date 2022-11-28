import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
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
  
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Hola, Coder!</Text>
      <Text>Primer prueba de emulador!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
    fontSize: 30,
    fontFamily: 'DancingBold',
  },
});
