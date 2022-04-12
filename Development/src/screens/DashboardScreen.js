import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';

const DashboardScreen = () => {
    return(
        <View>
            <View style ={styles.cardHeader}>
            <View style = {styles.card}>
                <Text style = {styles.cardText}>Machine Issues</Text>
                <Text style = {styles.cardText}>0</Text>
            </View>

            <View style = {styles.card}>
            <Text style = {styles.cardText}>Income Errors</Text>
            <Text style = {styles.cardText}>0</Text>
            </View>

            <View style = {styles.card}>
            <Text style = {styles.cardText}>New Feedback</Text>
            <Text style = {styles.cardText}>0</Text>
            </View>
            </View>
            
            <View>
            <Text style = {styles.heading}>Washing Machine Details</Text>
            </View>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Location</th>
                    <th>Bookings</th>
                    <th>Errors</th>
                    <th>Feedback</th>
                    <th>View</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Port Villa</td>
                    <td>101,102</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </View>
    );
}

const styles = StyleSheet.create({
   
    cardHeader:{
        flexDirection: "row", 
        justifyContent: "space-around",
        padding: 50,
    },
    
    card:{
        backgroundColor: '#F9E5B4',
        height:100,
        width:200,
        justifyContent: 'center',
        
    },
    
    cardText:{
        textAlign: 'center',
        fontSize: 20,
    },

    heading:{
        fontSize: 30,
        padding: 40,
        fontWeight: '500',
    },

});

export default DashboardScreen;