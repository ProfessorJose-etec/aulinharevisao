import { View, StyleSheet } from 'react-native';

import Pegar from './Info'

export default function HomeScreen() {
  return (
   <View style={styles.container}>
    <Pegar nome="Ericão Romero" idade="50"/>
   </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
});
