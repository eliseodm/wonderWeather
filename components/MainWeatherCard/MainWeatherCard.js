import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';


function MainWeatherCard({current}) {
    return (
        <>
            <Text style={styles.city}>{current.city}</Text>
            <Text style={styles.country}>{current.country}</Text>
            <View style={styles.current}>
                <Image
                    style={styles.largeIcon}
                    source={{
                    uri: `https://openweathermap.org/img/wn/${current.icon}@4x.png`,
                    }}
                />
                <Text style={styles.currentTemp}>{Math.round(current.temp)}°C</Text>
                <Text style={styles.maxTemp}>Max {Math.round(current.maxTemp)}°C</Text>
                <Text style={styles.minTemp}>Min {Math.round(current.minTemp)}°C</Text>
            </View>
        </>
    );
}

export default MainWeatherCard;

const styles = StyleSheet.create({
    city: {
        width: '100%',
        textAlign: 'center',
        fontSize: 32,
        color: '#e96e50'
    },
    country: {
        width: '100%',
        textAlign: 'center',
        fontSize: 24,
        color: '#d6a99e'
    },
    current: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        alignContent: 'center',
    },
    largeIcon: {
        width: 250,
        height: 200,
      },
      currentTemp: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      maxTemp: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      minTemp: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },  


})