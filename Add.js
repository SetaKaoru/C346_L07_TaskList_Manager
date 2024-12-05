import React, {useState} from 'react';
import {datasource} from "./Data";
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import Navigation from "./Navigation";

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const stat = 'Not Done'
    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Task Description:</Text>
                <TextInput style={{borderWidth: 1,backgroundColor: 'lavender'}} onChangeText={(text) => setName(text)}/>
            </View>

            <Button title="SUBMIT"
                    onPress={() => {
                        const item = {key: name, status: stat};
                        datasource[0].data.push(item);
                        navigation.navigate('Home');
                    }}/>
        </View>

    );
};

export default Add;
