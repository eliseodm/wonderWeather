import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

function ForecastDay({ day, minTemp, maxTemp, icon }) {
    
    return(
        <View style={styles.forecastDay}>
            <Text>{ day }</Text>
            <Image
                    style={{width: 50, height: 50}}
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      marginBottom: 10,
    },  
    forecastTemps: {
        marginHorizontal: 4,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },  
})

export default ForecastDay;