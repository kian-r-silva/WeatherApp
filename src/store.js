// store.js
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api.js';

// Async thunk for fetching weather data
export const fetchWeatherData = createAsyncThunk('fetchWeatherData', async (searchData) => {
  const [lat, lon] = searchData.value.split(' ');
  const city = searchData.label;

  const currentWeatherResponse = await fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
  const forecastResponse = await fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

  const currentWeather = await currentWeatherResponse.json();
  const forecast = await forecastResponse.json();

  return { city, currentWeather, forecast };
});

// Create a slice for currentWeather
const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState: { data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.data = action.payload.currentWeather;
    });
  },
});

// Create a slice for forecastWeather
const forecastWeatherSlice = createSlice({
  name: 'forecastWeather',
  initialState: { data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.data = action.payload.forecast.list;
    });
  },
});

// Create a slice for chartData
const chartDataSlice = createSlice({
  name: 'chartData',
  initialState: { data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.data = action.payload.forecast.list; 
    });
  },
});

// Combine reducers
const rootReducer = {
  currentWeather: currentWeatherSlice.reducer,
  forecastWeather: forecastWeatherSlice.reducer,
  chartData: chartDataSlice.reducer,
};

// Configure store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
