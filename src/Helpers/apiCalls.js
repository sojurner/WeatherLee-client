export const fetchWeatherData = async (location, locationType) => {
  if (locationType === 'geoLocation') {
    const response = await fetch(
      `/api/darksky?latitude=${location.coords.latitude}&longitude=${
        location.coords.longitude
      }`,
      null
    );
    return await response.json();
  }
  if (locationType === 'inputLocation') {
    const response = await fetch(
      `/api/darksky?latitude=${location.lat}&longitude=${location.lng}`,
      null
    );
    return await response.json();
  }
};
