import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AboutComp from './components/AboutComp';
import { ImageBackground, useWindowDimensions } from 'react-native';
import ReductionComp from './components/ReductionComp';
import ProrataComp from './components/ProrataComp';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();

export default function App() {
  const styles = useStyles();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer style={styles.navigationContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => {
            return {
              tabBarIcon: ({ focused, color, size }) => {
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
            };
          }}
        >
          <Tab.Screen name="Reductions" component={ReductionComp} options={{ headerShown: false }} />
          <Tab.Screen name="Prorata" component={ProrataComp} options={{ headerShown: false }} />
          <Tab.Screen name="About" component={AboutComp} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

function useStyles() {
  const {width, height} = useWindowDimensions();

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
      fontWeight: 'bold',
    },
    tabBar: {
      backgroundColor: '#0D2438',
      height: height/9,
      borderTopWidth: 0,
      paddingBottom: (Platform.OS === 'ios') ? 30 : 10,
    }
      
  });

  return styles;
}
