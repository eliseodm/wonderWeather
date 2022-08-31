import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';


function MainWeatherCard({ cityInfo, isCurrentLocation }) {

  const { city, country, temp, minTemp, maxTemp, icon } = cityInfo;
  return (
      <>
          <Text style={styles.city}>{city}</Text>
          <Text style={styles.country}>{country}</Text>
          {isCurrentLocation === true && (
            <Text>
              Uicación actual
            </Text>
          )}
          <View style={styles.current}>
              <Image
                  style={styles.largeIcon}
                  source={{
                  uri: `https://openweathermap.org/img/wn/${icon}@4x.png`,
                  }}
              />
              <Text style={styles.currentTemp}>{Math.round(temp)}°C</Text>
              <Text style={styles.maxTemp}>Max {Math.round(maxTemp)}°C</Text>
              <Text style={styles.minTemp}>Min {Math.round(minTemp)}°C</Text>
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