import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';

const Q1 = () => {
    return (
        <View style={{backgroundColor: '#fca0a6'}}>
            <StatusBar style='auto' />
            <ScrollView style={styles.scrollView}>
                <View style={styles.upper}>
                    <AntDesign name="question" size={40} color="white" />
                    <Text style={styles.upperTitle}>Answer To Questions</Text>
                </View>

                <View style={styles.middle}>
                    <Text style={styles.Text1}>Q1. Why we celebrate Diwali</Text>
                    <Text style={styles.Text}><Text style={styles.Text1}>Ans.</Text> Diwali is a festival of lights and one of the major festivals celebrated by Hindus, Jains, Sikhs and some Buddhists, notably Newar Buddhists. The festival usually lasts five days and is celebrated during the Hindu lunisolar month Kartika (between mid-October and mid-November).One of the most popular festivals of Hinduism, Diwali symbolizes the spiritual "victory of light over darkness, good over evil, and knowledge over ignorance". The festival is widely associated with Lakshmi, goddess of prosperity, with many other regional traditions connecting the holiday to Sita and Rama, Vishnu, Krishna, Yama, Yami, Durga, Kali, Hanuman, Ganesha, Kubera, Dhanvantari, or Vishvakarman. Furthermore, it is, in some regions, a celebration of the day Lord Rama returned to his kingdom Ayodhya with his wife Sita and his brother Lakshmana after defeating Ravana in Lanka and serving 14 years of exile.In the lead-up to Diwali, celebrants will prepare by cleaning, renovating, and decorating their homes and workplaces with diyas (oil lamps) and rangolis (colorful art circle patterns). During Diwali, people wear their finest clothes, illuminate the interior and exterior of their homes with diyas and rangoli, perform worship ceremonies of Lakshmi, the goddess of prosperity and wealth,light fireworks, and partake in family feasts, where mithai (sweets) and gifts are shared. Diwali is also a major cultural event for the Hindu, Sikh and Jain diaspora.</Text>
                </View>

                <View style={styles.middle}>
                    <Text style={styles.Text1}>Q2. When we celebrate Diwali?</Text>
                    <Text style={styles.Text}><Text style={styles.Text1}>Ans.</Text> Diwali follows the Hindu lunar calendar and its date changes annually – it's celebrated on a moonless night in October or November..</Text>
                </View>

                <View style={styles.middle}>
                    <Text style={styles.Text1}>Q3. How we celebrate Diwali??</Text>
                    <Text style={styles.Text}><Text style={styles.Text1}>Ans.</Text> During Diwali, people wear their finest clothes, illuminate the interior and exterior of their homes with diyas and rangoli, perform worship ceremonies of Lakshmi, the goddess of prosperity and wealth, light fireworks, and partake in family feasts, where mithai (sweets) and gifts are shared.</Text>
                </View>

                <View style={styles.middle}>
                    <Text style={styles.Text1}>Q4. How we celebrate Diwali??</Text>
                    <Text style={styles.Text}><Text style={styles.Text1}>Ans.</Text> According to the Jain tradition, this practice of lighting lamps first began on the day of Mahavira's nirvana in 527 BCE, when 18 kings who had gathered for Mahavira's final teachings issued a proclamation that lamps be lit in remembrance of the "great light, Mahavira".</Text>
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
        marginTop:-70,
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
        marginTop: 40,
        marginLeft: 15,
        width: 400,
        shadowOpacity: 0.5,
        shadowColor: '#2b2929',
        shadowOffset: { width: 0, height: 5 },
    },
    Text: {
        color: '#fff',
        padding: 40,
        fontSize: 20
    },
    Text1: {
        color: '#fff',
        fontSize: 24,
        padding: 40,
        marginBottom: -70,
        fontWeight: 'bold'
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
})

export default Q1
