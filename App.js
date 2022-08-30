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
import useSelectedCityForecastInfo from './hooks/useSelectedCityForecastInfo';

const App = () => {
  const [isCurrentLocation, setIsCurrentLocation] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);
  const { publicIpV4 } = usePublicIp();
  const { locationData } = useLocationInfo(publicIpV4);
  const { forecastInfo, todayInfo, loading } = useForecastInfo(
    locationData.lat,
    locationData.lon
  );
  const [selectedCityName, setSelectedCityName] = useState({
    name: "Berlin",
    country: "DE",
  });
  const {
    selectedCityForecastInfo,
    selectedTodayForecastInfo,
  } = useSelectedCityForecastInfo(selectedCityName);

  const onSetSelectedCityName = useCallback((option) => {
    setSelectedCityName(option);
    setIsCurrentLocation(false);
  }, []);

  useEffect(() => {
    setSelectedCity({
      city: locationData.city,
      country: locationData.country,
      temp: todayInfo.temp,
      minTemp: todayInfo.minTemp,
      maxTemp: todayInfo.maxTemp,
      icon: todayInfo.icon,
      forecastInfo: [...forecastInfo],
    });
  }, [locationData, forecastInfo]);

  useEffect(() => {
    setSelectedCity({
      city: selectedCityName.name,
      country: selectedCityName.country,
      temp: selectedTodayForecastInfo && selectedTodayForecastInfo.temp,
      minTemp: selectedTodayForecastInfo && selectedTodayForecastInfo.minTemp,
      maxTemp: selectedTodayForecastInfo && selectedTodayForecastInfo.maxTemp,
      icon: selectedTodayForecastInfo && selectedTodayForecastInfo.icon,
      forecastInfo: [...selectedCityForecastInfo],
    });
  }, [selectedCityForecastInfo, selectedTodayForecastInfo]);

  if(loading){
    return <SafeAreaView style={styles.loading}>
              <ActivityIndicator size="large" />
          </SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Wonder Weather</Text>
      <MainWeatherCard
        cityInfo={selectedCity}
      />
      <ForecastContainer
        cityInfo={selectedCity}
      />
      <SelectedCityModal selectedCity={onSetSelectedCityName} />
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
