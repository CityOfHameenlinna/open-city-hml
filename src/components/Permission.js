import { PermissionsAndroid } from 'react-native';

// Permission.js contains permission requests that are needed.
// Ask and receive permission result: await PermissionsAndroid.request( ANDROID_PERMISSION );
// Use 'granted === PermissionsAndroid.RESULTS.GRANTED' in to check if permission was granted and manualy handle them if needed.

// Creates and displays a default Android permission request to access fine location of the device.
export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
  } catch (error) {
    console.warn(error);
  }
}