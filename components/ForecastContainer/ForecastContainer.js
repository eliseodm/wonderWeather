import { StyleSheet, Text, ScrollView, View } from 'react-native';
import React from 'react';
import ForecastDay from '../ForecastDay/ForecastDay';
import { dayNames } from "../../constants";


function ForecastContainer({ forecastInfo }) {
    return(
        <View style={styles.forecastContainer}>
            <Text style={styles.subtitle}>Proximos 5 dias</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    {
                        forecastInfo.map((day) => {
                            return(
                                <ForecastDay
                                    key={day.dayNum}
                                    minTemp={day.minTemp}
                                    maxTemp={day.maxTemp}
                                    icon={day.icon}
                                    day={dayNames[day.dayNum]}
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
        height: 300,
    }
})

export default ForecastContainer;