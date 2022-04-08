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

const Drawer = createDrawerNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                useLegacyImplementation
                defaultStatus='open'
                initialRouteName='Dashboard'
                goBack='none'
                screenOptions={
                    {drawerType: 'permanent', overlayColor: null}
                }
            >
                <Drawer.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{title: 'Dashboard'}}
                />
                <Drawer.Screen
                    name="Bookings"
                    component={BookingsScreen}
                    options={{title: 'Bookings'}}
                />
                <Drawer.Screen
                    name="Income"
                    component={IncomeScreen}
                    options={{title: 'Income'}}
                />
                <Drawer.Screen
                    name="Reports"
                    component={ReportScreen}
                    options={{title: 'Reports'}}
                />
                <Drawer.Screen
                    name="Users"
                    component={UsersScreen}
                    options={{title: 'Users'}}
                />
                <Drawer.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{title: 'Settings'}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;