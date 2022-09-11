import React from 'react';
import { styles } from './styles/appStyles';
import { View } from 'react-native';
import Home from './components/Home';
function App(){
  
  return (
    <View style={styles.Container}>
      <Home/>
    </View>
  );
};

export default App;
