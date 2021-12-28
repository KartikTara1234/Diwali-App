import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from 'react-native-app-intro-slider'
import { LinearGradient } from 'expo-linear-gradient';

const data = [
  {
    title: 'Happy Diwali',
    text: "Welcome to the app \n So Let's Explore",
    image: require('./assets/images/AkvV.gif'),
    bg: '#59b2ab',
  },
  {
    title: 'Lord Ram',
    text: 'In this app we are going to learn about why do we celebrate Diwali.',
    image: require('./assets/images/2.png'),
    bg: '#febe29',
  },
  {
    title: "Let's Start Exploring",
    text: "Click on done button to start exploring the app",
    image: require('./assets/images/3.png'),
    bg: '#22bcb5',
  },
];

const Intro = ({ navigation }) => {
  const renderItem =({item}) => {
    if(item.title == 'Happy Diwali')
    {
      return(
        <View style={styles.slide1}>
          <Image source={item.image} style={styles.image} height={350} />
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text1}>{item.text}</Text>
          </View>
        </View>
      )
    }
    return(
      <View style={styles.slide2}>
        <Image source={item.image} style={styles.image} height={350} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text2}>{item.text}</Text>
        </View>
      </View>
    )
  }

  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return(
        <View>
            <LinearGradient
                colors={['#fca0a6', '#28334aff']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.doneButtonWrapper}>
                <Text style={styles.doneButton}>Done</Text>
            </LinearGradient>
      </View>
    );
  };

  const renderNextButton = () => {
    return(
    <View style={styles.rightTextWrapper}>
      <Text style={styles.rightText}>Next</Text>
    </View>
    );
  };

  const renderPrevButton = () => {
    return(
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };

  return(
    <View style={{flex: 1}}>
    <StatusBar style="light" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          showPrevButton
          data={data}
          onDone={() => {navigation.navigate('Home')}}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22bcb5'
  },
  image: {
    marginVertical: 60,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 57,
    color: '#fff'
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 57,
    marginTop: 20,
    color: '#000'
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 57,
    marginTop: 20,
    color: '#fff'
  },
  rightTextWrapper: {
    width: 160,
    height: 50,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -40,
    backgroundColor: '#fca0a6',
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: '#2b2929',
    shadowOffset: { width: 0, height: 5 },
  },
  rightText: {
    color: '#fff',
    fontSize: 14
  },
  leftTextWrapper: {
    width: 160,
    height: 50,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -40,
    backgroundColor: '#fca0a6',
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: '#2b2929',
    shadowOffset: { width: 0, height: 5 },
  },
  leftText: {
    color: '#fff',
    fontSize: 14
  },
  doneButtonWrapper: {
      flex: 1,
      width: 160,
      height: 50,
      paddingLeft: 35,
      paddingRight: 50,
      borderRadius: 20,
      marginRight: -40
  },
  doneButton: {
      fontSize: 14,
      textAlign: 'center',
      justifyContent: 'center',
      margin: 10,
      color: '#fff',
  }
})

export default Intro;