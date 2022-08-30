import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

function ForecastDay({ day, minTemp, maxTemp, icon }) {
    
    return(
        <View style={styles.forecastDay}>
            <Text>{ day }</Text>
            <Image
                    style={styles.largeIcon}
                    source={{
                    uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
                    }}
            />
            <Text style={styles.forecastTemps}>{Math.round(maxTemp)} ºC</Text>
            <Text style={styles.forecastTemps}>{Math.round(minTemp)} ºC</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    forecastDay:{
      marginBottom: 10,
    },  
    smallIcon: {
        smallIcon: {
            width: 150,
            height: 150,
          }
    },
    forecastTemps: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      },  
})

export default ForecastDay;