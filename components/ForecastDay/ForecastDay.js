import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

function ForecastDay({ day, minTemp, maxTemp, icon }) {
    return(
        <View>
            <Text>{ day }</Text>
            <Image
              style={styles.smallIcon}
              source={{
                uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
              }}
            />
            <Text style={styles.forecastTemps}>{Math.round(maxTemp)} ºC</Text>
            <Text style={styles.forecastTemps}>{Math.round(minTemp)} ºC</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    smallIcon: {
        smallIcon: {
            width: 100,
            height: 100,
          }
    },
    forecastTemps: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      },  
})

export default ForecastDay;