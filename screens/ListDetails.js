import * as React from 'react';
import { Button, View, Text } from 'react-native';

function ListDetails({route}) {

    const { itemId } = route.params;
     const { otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>{otherParam}</Text>
        
      </View>
    );
}


export default ListDetails;