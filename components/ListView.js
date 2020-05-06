import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ListView({item}) {

    const navigation = useNavigation();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{item.title}</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('ListDetails', {
            itemId: item.id,
            otherParam: item.title
        })}
      />
        
      </View>
    );
}


export default ListView;