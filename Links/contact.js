import React from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const contact = () => {
    return (
        <View style={{backgroundColor: '#fca0a6'}}>
            <StatusBar style='auto' />
            <ScrollView style={styles.scrollView}>
                <View style={styles.upper}>
                    <AntDesign name="question" size={40} color="white" />
                    <Text style={styles.upperTitle}>Contact Us</Text>
                </View>

                <View style={styles.middle}>
                    <Text style={styles.Text}>Name: </Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.middle}>
                    <Text style={styles.Text}>Email: </Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.compl}>
                    <Text style={styles.compText}>Description: </Text>
                    <TextInput style={styles.complaint} />
                </View>

                <Button style={styles.share}><Text style={styles.Textshare}>Submit</Text></Button>
            
                <View style={styles.lower}>
                    <Text style={styles.lowerTitle}>Made By</Text>
                    <Text style={styles.lowerSubtitle}>Kartik Tara</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 240,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
        marginLeft: 90,
        borderColor: '#9e9898',
        borderRadius: 20,
    },
    complaint: {
        height: 260,
        width: 240,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
        marginLeft: 90,
        marginTop: -80,
        borderColor: '#9e9898',
        borderRadius: 20,
    },
    upper:{
        backgroundColor: '#edb313',
        borderRadius: 80,
        marginRight: 50,
        marginLeft: -70,
        marginTop:-70,
        padding: 5,
        shadowOpacity: 0.5,
        shadowColor: '#2b2929',
        shadowOffset: { width: 0, height: 5 },
    },
    upperTitle: {
        justifyContent: 'center',
        marginTop: 40,
        marginLeft: 20,
        fontSize: 40,
        marginLeft: 100,
        marginTop: 80,
        color: '#fff',
        fontWeight: 'bold',
        padding: 10
    },
    middle: {
        backgroundColor: '#edb313',
        borderRadius: 80,
        alignItems: 'center', 
        marginTop: 30,
        marginLeft: 15,
        width: 400,
        shadowOpacity: 0.5,
        shadowColor: '#2b2929',
        shadowOffset: { width: 0, height: 5 },
    },
    compl: {
        backgroundColor: '#edb313',
        borderRadius: 80,
        alignItems: 'center', 
        marginTop: 20,
        marginLeft: 15,
        width: 400,
        padding: 20,
        shadowOpacity: 0.5,
        shadowColor: '#2b2929',
        shadowOffset: { width: 0, height: 5 },
    },
    Text: {
        color: '#fff',
        padding: 10,
        marginBottom: -58,
        marginLeft: -280,
        fontSize: 30
    },
    compText: {
        color: '#fff',
        padding: 10,
        marginBottom: -58,
        marginLeft: -270,
        marginTop: 100,
        fontSize: 20,
    },
    lower:{
        backgroundColor: '#edb313',
        borderRadius: 80,
        marginRight: -70,
        marginLeft: 40,
        marginTop:40,
        shadowOpacity: 0.5,
        shadowColor: '#2b2929',
        shadowOffset: { width: 0, height: 5 },
    },
    lowerTitle: {
        justifyContent: 'center',
        marginLeft: 10,
        fontSize: 20,
        marginLeft: 100,
        marginTop: 30,
        color: '#fff'
    },
    lowerSubtitle: {
        justifyContent: 'center',
        marginTop: 5,
        marginLeft: 20,
        fontSize: 40,
        marginBottom: 40,
        marginLeft: 100,
        color: '#fff'
    },
    share: {
        borderRadius: 30,
        width: 220,
        padding: 10,
        backgroundColor: '#7c9eb7',
        marginTop: 15,
        marginBottom: -25,
        marginLeft: 120,
        shadowOpacity: 0.5,
        shadowColor: '#2b2929',
        shadowOffset: { width: 0, height: 5 },
    },
    Textshare: {
        color: '#fff'
    }
})

export default contact
