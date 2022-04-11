import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DashboardScreen from '../screens/DashboardScreen';
import BookingsScreen from '../screens/BookingsScreen';
import IncomeScreen from '../screens/IncomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ReportScreen from '../screens/ReportsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UsersScreen from '../screens/UsersScreen';
import { DrawerSidebar } from 'react-navigation-drawer';

// Create a base 'Theme' for the navigator using our predefined colour scheme
// Is available for use, but does not allow for specificity of how colours are applied
const NavTheme = {
    dark: false,
    colors: {
        primary: '#89AFB4',
        card: '#A8C6CA',
        border: '#A8C6CA',
        text: 'black',
        background: '#EFFCFF',
        notification: 'black',
    },
};

// Options required for drawer component
const NavOptions = {
    title: 'EWB Nappy Washing Admin Portal',
    drawerType: 'permanent',
    overlayColor: null,
    drawerActiveTintColor: 'white',
    drawerActiveBackgroundColor: '#F7D47A',
    drawerInactiveTintColor: 'black',
    drawerInactiveBackgroundColor: '#89AFB4',
    headerShown: true,
    headerStyle: {
        height: 80,
        backgroundColor: null,
        borderBottomColor: null,
        borderBottomWidth: 0,
        drawerIcon: false,
    }
}

const Drawer = createDrawerNavigator();

function AppNavigator() {
    return (
        <NavigationContainer theme={NavTheme}>
            <Drawer.Navigator
                useLegacyImplementation
                defaultStatus='open'
                initialRouteName='Dashboard'
                goBack='none'
                screenOptions={NavOptions}
            >
                <Drawer.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{title: 'Dashboard', headerLeft: () => null}}
                />
                <Drawer.Screen
                    name="Bookings"
                    component={BookingsScreen}
                    options={{title: 'Bookings', headerLeft: () => null}}
                />
                <Drawer.Screen
                    name="Income"
                    component={IncomeScreen}
                    options={{title: 'Income', headerLeft: () => null}}
                />
                <Drawer.Screen
                    name="Reports"
                    component={ReportScreen}
                    options={{title: 'Reports', headerLeft: () => null}}
                />
                <Drawer.Screen
                    name="Users"
                    component={UsersScreen}
                    options={{title: 'Users', headerLeft: () => null}}
                />
                <Drawer.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{title: 'Settings', headerLeft: () => null}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;