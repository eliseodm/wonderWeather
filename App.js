import React, { useState, useEffect, useCallback } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import MainWeatherCard from './components/MainWeatherCard/MainWeatherCard';
import ForecastContainer from './components/ForecastContainer/ForecastContainer';
import SelectedCityModal from './components/SelectedCityModal/SelectedCityModal';

import usePublicIp from "./hooks/usePublicIp";
import useLocationInfo from "./hooks/useLocationInfo";
import useForecastInfo from './hooks/useForecastInfo';
import { listOfCities } from "./constants";

const App = () => {
  const [citiesList, setCitiesList] = useState(listOfCities);
  const [selectedCity, setSelectedCity] = useState({});
  const { publicIpV4 } = usePublicIp();
  const { locationData } = useLocationInfo(publicIpV4);
  const { forecastInfo, todayInfo, loading } = useForecastInfo(
    selectedCity.lat,
    selectedCity.lon
  );
  
  const isCurrentLocation = locationData && locationData.city === selectedCity.city;

  useEffect(() => {
    if (
      locationData !== null &&
      locationData.city &&
      citiesList[0].city !== locationData.city
    ) {
      setCitiesList([locationData, ...citiesList]);
      setSelectedCity(locationData);
    }
  }, [locationData, setCitiesList, citiesList]);

  const onSelectCity = useCallback((option) => {
    setSelectedCity(option);
  }, []);

  if(loading){
    return <SafeAreaView style={styles.loading}>
              <ActivityIndicator testID="App.ActivityIndicator" size="large" />
          </SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Wonder Weather</Text>
      <MainWeatherCard
        isCurrentLocation={isCurrentLocation}
        cityInfo={{ ...todayInfo, ...selectedCity }}
      />
      <ForecastContainer
        forecastInfo={forecastInfo}
      />
      <SelectedCityModal
        onSelectCity={onSelectCity}
        citiesList={citiesList}
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
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,


  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
