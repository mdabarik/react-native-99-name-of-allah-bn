
import React from 'react';
import { Text, Button, View, Image, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { AdMobBanner } from 'react-native-admob';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from './data/names-bn.json';

class HomeScreen extends React.Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  renderNames = (names) => {
    return names.map(name => {
      return (    
        <View style={styles.alignContentCenter}>
          <Text key={name.id} style={styles.number}>{name.id}</Text>
          <Text key={name.arn} style={styles.arabicText}>{name.arn}</Text>
          <Text key={name.ensp} style={styles.enSpelling}>{name.ensp}</Text>
          <Text key={name.enm} style={styles.enMeaning}>{name.enm}</Text>
        </View>  
      )
    })
  }

  render() {
    return (
      <>
        <ScrollView>
          <View style={styles.alignCenter}> 
            {this.renderNames(data)}
          </View>
        </ScrollView>
        <View>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-9082337666591788/7477236743"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)}
          />
        </View>
      </>
    )
  }
}

class NotificationsScreen extends React.Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <ScrollView>
          <View style={styles.container}>
              <Image source={require('./Images/mdabarik.jpg')} style={{ width: 220, height: 220, borderRadius: 220, borderWidth: 1, borderColor: 'grey', marginTop: 10}} />
              <Text style={styles.aboutHead}>ABOUT DEVELOPER</Text>
              <Text style={styles.aboutText}>
                আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহু।সকল প্রশংসা কেবলমাত্র এক আল্লাহর জন্য। আল্লাহর অশেষ মেহেরবানী তে এই অ্যাপটি তৈরি করতে পারলাম। আমি বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় এর একজন ছাত্র। আল্লাহর ৯৯ টি নাম দিয়ে তৈরী করলাম প্রথম ইসলামিক অ্যাপ। এবং এটিই আমার প্রথম প্লে স্টরে পাবলিশ করা প্রথম অ্যাপ। আমার একটি প্রোগ্রামিং ইউটিউব চ্যানেল "" এবং আমার আরেক টি ইউটিউব চ্যানেল আছে "" যেখানে আমি ইসলামিক ভিডিও তৈরী করি। আমার জন্য দোয়া করবেন যেন আমি নিজের প্রোগ্রামিং স্ক্রিল ইসলামের জন্য ব্যয় করতে পারি। - মোঃ আঃ বারিক 
              </Text>
          </View>
        </ScrollView>
        <View>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-9082337666591788/7477236743"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)}
          />
        </View>
      </>
    );
  }
}


const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    aboutText: {
      fontSize: 18, 
      color: '#777777',
      flex: 1,
      justifyContent: "center",
      alignItems: "center", 
      margin: 10, 
      marginTop: 7, 
      textAlign: 'center', 
      marginBottom: 20
    },
    aboutHead: {
      fontSize: 20, 
      fontWeight: 'bold', 
      paddingTop: 10, 
      color: 'orangered'
    },
    alignCenter: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    alignContentCenter: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      width: '95%', 
      height: 220, 
      borderRadius: 20, 
      borderWidth: 2, 
      borderColor: 'grey', 
      marginTop: 10
    },
    number: {
      fontSize: 20,
      color: 'green'
    },
    arabicText: {
      fontSize: 40,
      color: '#DC4C3F'
    },
    enSpelling: {
      fontSize: 30,
      color: 'red'
    },
    enMeaning: {
      fontSize: 20
    }
}

class Exit extends React.Component {

  componentDidMount() {
    BackHandler.exitApp();
  }

  render() {
    return (
      <Text>See you next time!</Text>
    )
  }
}

const Stack = createStackNavigator();

function RootScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'আল্লাহর ৯৯ টি নাম',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer() }>
              <Icon name="bars" size={22} style={{ marginLeft: 20 }} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}

function AboutScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Notifications">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
        name="Notifications" 
        component={NotificationsScreen} 
        options={{
          title: 'About',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer() }>
              <Icon name="bars" size={22} style={{ marginLeft: 20 }} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerStyle={{
          backgroundColor: '#F4511E'
        }}
        drawerContentOptions={{
          activeTintColor: '#ffffff',
          inactiveTintColor: '#ffffff'
        }}>
        <Drawer.Screen 
          name="Home" 
          component={RootScreen}
          options={{ drawerIcon: ({ tintColor }) => <Icon name="home" size={17} color="#fff" /> }}
        />
        <Drawer.Screen 
          name="About" 
          component={AboutScreen} 
          options={{ drawerIcon: ({ tintColor }) => <Icon name="user" size={17} color="#fff" /> }}/>
        <Drawer.Screen 
          name="Exit" 
          component={Exit} 
          options={{drawerIcon: ({ tintColor }) => <Icon name="power-off" size={17} color="#fff" />}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}