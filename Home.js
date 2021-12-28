import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import { Button, Searchbar } from 'react-native-paper';

const Home = ({ navigation }) => {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    
    return (
        <View style={{backgroundColor: '#fca0a6'}}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.upper}>
                <Text style={styles.upperTitle}>Welcome</Text>
                <Text style={styles.upperSubtitle}>So lets start Exploring</Text>
            </View>
            <View style={styles.questionWrapper}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Q1')}}
                    style={{ padding: 10,width: 300, backgroundColor: '#7c9eb7', borderRadius: 20, alignItems: 'center', marginLeft: 70, marginBottom: 10, marginTop: 40 }}>
                    <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>Why we celebrate Diwali</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Hello, world!')}
                    style={{ padding: 10,width: 300, backgroundColor: '#7c9eb7', borderRadius: 20, alignItems: 'center', marginLeft: 70, marginBottom: 10 }}>
                    <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>When we celebrate Diwali?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Hello, world!')}
                    style={{ padding: 10,width: 300, backgroundColor: '#7c9eb7', borderRadius: 20, alignItems: 'center', marginLeft: 70, marginBottom: 10 }}>
                    <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>How we celebrate Diwali?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Hello, world!')}
                    style={{ padding: 10,width: 300, backgroundColor: '#7c9eb7', borderRadius: 20, alignItems: 'center', marginLeft: 70, marginBottom: 10 }}>
                    <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>When we started celebrating Diwali?</Text>
                </TouchableOpacity>
            </View>
                <Searchbar
                placeholder="Enter your name "
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.Searchbar}
                icon="magnify"
                />
                <Button style={styles.share}><Text style={styles.Textshare}>Share it</Text></Button>
            <View>
            </View>
            <View style={styles.lower}>
                <Text style={styles.lowerTitle}>Made By</Text>
                <Text style={styles.lowerSubtitle}>Kartik Tara</Text>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    upper:{
        backgroundColor: '#edb313',
        borderRadius: 80,
        marginRight: 50,
        marginLeft: -70,
        marginTop:-30,
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
        color: '#fff'
    },
    upperSubtitle: {
        justifyContent: 'center',
        marginTop: 5,
        marginLeft: 20,
        fontSize: 20,
        marginBottom: 20,
        marginLeft: 100,
        color: '#fff'
    },
    questionWrapper: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 90,
        shadowOpacity: 0.5,
        shadowColor: '#2b2929',
        shadowOffset: { width: 0, height: 5 },
    },
    question:{
        alignItems: 'center',
        textAlign: 'center',
        borderBottomWidth: 10,
        borderRadius: 20,
        borderColor: '#000'
    },
    lower:{
        backgroundColor: '#edb313',
        borderRadius: 80,
        marginRight: -70,
        marginLeft: 40,
        marginTop:20,
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
    Searchbar: {
        marginTop: 110,
        borderRadius: 30,
        width: 250,
        marginLeft: 10,
        shadowOpacity: 0.5,
        shadowColor: '#2b2929',
        shadowOffset: { width: 0, height: 5 },
    },
    share: {
        borderRadius: 30,
        width: 150,
        padding: 8,
        backgroundColor: '#7c9eb7',
        marginTop: -50,
        marginLeft: 270,
        shadowOpacity: 0.5,
        shadowColor: '#2b2929',
        shadowOffset: { width: 0, height: 5 },
    },
    Textshare: {
        color: '#fff'
    }
})

export default Home
