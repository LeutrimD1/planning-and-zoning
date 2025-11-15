import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  const [selectedValue, setSelectedValue] = useState('None')

  return (
    <View style={styles.container}>
      <Text>test</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label='None' value={'None'} />
        <Picker.Item label='Fort Worth' value={'Fort Worth'} />
      </Picker>
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
  picker: {
    width: 200,
    height: 50,
  },
});