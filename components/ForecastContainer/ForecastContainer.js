import { StyleSheet, Text, ScrollView, View } from 'react-native';
import React from 'react';
import ForecastDay from '../ForecastDay/ForecastDay';

function ForecastContainer({ minTemp, maxTemp, icon }) {
    const days = ["mie", "jue", "vie", "sab", "dom"];

    return(
        <View style={styles.forecastContainer}>
            <Text style={styles.subtitle}>Proximos 5 dias</Text>
            <ScrollView>
                <View>
                    {
                        days.map((day) => {
                            return(
                                <ForecastDay
                                    key={day}
                                    minTemp={minTemp}
                                    maxTemp={maxTemp}
                                    icon={icon}
                                    day={day}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle:{
        fontSize: 24,
        marginVertical: 12,
        marginLeft: 4,
        color: '#e96e50',
    },
    forecastContainer: {
        marginTop: 16,
        height: 325,
    }
})

export default ForecastContainer;