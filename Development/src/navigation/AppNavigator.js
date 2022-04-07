import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { creativeNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen';
import BookingsScreen from '../screens/BookingsScreen';
import IncomeScreen from '../screens/IncomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ReportScreen from '../screens/ReportsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UsersScreen from '../screens/UsersScreen';


// Following this documentation, rather than the udemy code:
// https://reactnavigation.org/docs/hello-react-navigation
// https://reactnavigation.org/docs/tab-based-navigation/

function DashboardScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Dashboard screen</Text>
        </View>
    );
}

function BookingsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Bookings screen</Text>
        </View>
    );
}

function IncomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Income screen</Text>
        </View>
    );
}

function ReportScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Reports screen</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings screen</Text>
        </View>
    );
}

function UsersScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Users screen</Text>
        </View>
    );
}

const Stack = creativeNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{title: 'Dashboard'}}
                />
                <Stack.Screen
                    name="Bookings"
                    component={BookingsScreen}
                    options={{title: 'Bookings'}}
                />
                <Stack.Screen
                    name="Income"
                    component={IncomeScreen}
                    options={{title: 'Income'}}
                />
                <Stack.Screen
                    name="Reports"
                    component={ReportScreen}
                    options={{title: 'Reports'}}
                />
                <Stack.Screen
                    name="Users"
                    component={UsersScreen}
                    options={{title: 'Users'}}
                />
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{title: 'Settings'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;