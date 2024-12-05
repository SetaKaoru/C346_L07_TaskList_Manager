import React, {useState} from 'react';
import {Image, StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {datasource} from "./Data";

const styles = StyleSheet.create({
    boxTask: {
        borderWidth: 1,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lavender',
        padding:'auto',
        flexDirection: 'row'
    },
    content:{
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    nameStyleNotDone: {
        fontSize: 20,
        margin: 10,
        fontWeight:700,
        color: 'crimson'
    },
    nameStyleDone: {
        fontSize: 20,
        margin: 10,
        fontWeight:500,
        color: 'green',
    },
    header: {
        fontSize: 40,
        marginTop: 5,
        marginHorizontal: 20,
        margin: 20,
        textAlign: "center",
        fontWeight: 'bold',
        fontFamily: "HelveticaNeue-Bold"
    }
});

const Home = ({navigation, route}) => {

    const renderItem = ({item=datasource, index, section}) => {
        return (
            <View style={[styles.boxTask]}>
                <TouchableOpacity style={styles.content} onPress={() => navigation.navigate('Edit', {
                    index: index,
                    key: item.key,
                    status: item.status
                })}>
                    <Text style={ item.status === 'Not Done' ? styles.nameStyleNotDone : styles.nameStyleDone }>{item.key} | {item.status}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={{marginTop: 44, marginBottom: 50}}>
            <StatusBar/>
            <Text style={styles.header}>TO-DO LIST</Text>
            <SectionList sections={datasource} renderItem={renderItem} style={{marginBottom: 30}}/>
            <Button title='Add Task' onPress={() => {navigation.navigate('Add')}}/>
        </View>
    );
};

export default Home;
