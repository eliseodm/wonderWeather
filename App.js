import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import MainWeatherCard from './components/MainWeatherCard/MainWeatherCard';
import usePublicIp from "./hooks/usePublicIp";
import useLocationInfo from "./hooks/useLocationInfo";
import useTemperatureInfo from "./hooks/useTemperatureInfo";

const App = () => {
  const { publicIpV4 } = usePublicIp();
  const { locationData } = useLocationInfo(publicIpV4);
  const { temperatureInfo } = useTemperatureInfo(
    locationData.lat,
    locationData.lon
    );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.appTitle}>Wonder Wether</Text>
        <MainWeatherCard
          city={locationData.city}
          countryCode={locationData.country}
          temperature={temperatureInfo.temperature}
          minTemp={temperatureInfo.minTemp}
          maxTemp={temperatureInfo.maxTemp}
          icon={temperatureInfo.icon}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  appTitle: {
    fontSize: 16
  }
});

export default App;
