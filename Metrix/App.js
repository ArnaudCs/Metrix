import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AboutComp from './components/AboutComp';
import { ImageBackground } from 'react-native';
import ReductionComp from './components/ReductionComp';
import ProrataComp from './components/ProrataComp';


const tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.navigationContainer}>
      <tab.Navigator
        screenOptions={({route}) => {
          return {
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Reductions') {
                iconName = 'cart-outline';
              } else if (route.name === 'Prorata') {
                iconName = 'cash-outline';
              } else if (route.name === 'About') {
                iconName = 'information-circle-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: styles.tabBar,
            tabBarItemStyle: styles.tabBarItem,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#376895',
            tabBarLabelStyle: styles.tabLabel,
            tabBarHideOnKeyboard: true,
          }
        }}>
        <tab.Screen name="Reductions" component={ReductionComp} options={{ headerShown: false }}/>
        <tab.Screen name="Prorata" component={ProrataComp} options={{ headerShown: false }}/>
        <tab.Screen name="About" component={AboutComp} options={{ headerShown: false }}/>
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationContainer: {
    backgroundColor: '#f2f2f2'
  },
  tabBarItem: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor: '#0D2438',
    height: '10%',
    borderTopWidth: 0,
    paddingTop: 10,
    paddingBottom: 30,
  }
    
});
