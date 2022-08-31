import 'react-native';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { toHaveTextContent } from '@testing-library/jest-native/extend-expect';
import { mock_cityInfo, mock_forecastInfo } from "../__mockData__/index"
import App from '../App';
import MainWeatherCard from '../components/MainWeatherCard/MainWeatherCard';
import ForecastContainer from '../components/ForecastContainer/ForecastContainer';

it('Generates a Snapshot of <App/>', () => {
  const { toJSON } =render(<App />);
  expect(toJSON()).toMatchSnapshot()
});

const mainComponent = <App />;

//show ActivityIndicator before fetch data
it('Show ActivityIndicator before fetch fata', () => {
  const { getByTestId } = render(mainComponent);
  
  expect(getByTestId('App.ActivityIndicator')).toBeTruthy();
});

//show current location info
describe('Show current location info', () => {
  it('City', () => {
    const { getByTestId } = render(
      <MainWeatherCard  cityInfo={mock_cityInfo} isCurrentLocation={true} />
    )
    expect(getByTestId("MainWeatherCard.city")).toHaveTextContent("San Miguel de Tucumán");
  })
  
  it('Country', () => {
    const { getByTestId } = render(
      <MainWeatherCard  cityInfo={mock_cityInfo} isCurrentLocation={true} />
    )
    expect(getByTestId("MainWeatherCard.country")).toHaveTextContent("Argentina");
  })
})
  it('Temp', () => {
    const { getByTestId } = render(
      <MainWeatherCard  cityInfo={mock_cityInfo} isCurrentLocation={true} />
    )
    expect(getByTestId("MainWeatherCard.temp")).toHaveTextContent("24");
  })

//show current location next 5 days forecast
  it('Get current location next 5 days forecast', () => {
    render(<ForecastContainer forecastInfo={mock_forecastInfo} />)
    expect(screen.getAllByTestId("ForecastContainer.days").length).toBe(5);
  })
