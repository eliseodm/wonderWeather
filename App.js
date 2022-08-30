import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
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
  const { temperatureInfo, loading } = useTemperatureInfo(
    locationData.lat,
    locationData.lon
    );
  
  if(loading){
    return <SafeAreaView style={styles.loading}>
              <ActivityIndicator size="large" />
          </SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Wonder Wether</Text>
      <MainWeatherCard
        city={locationData.city}
        countryCode={locationData.country}
        temperature={temperatureInfo.temperature}
        minTemp={temperatureInfo.minTemp}
        maxTemp={temperatureInfo.maxTemp}
        icon={temperatureInfo.icon}
      />
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
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
