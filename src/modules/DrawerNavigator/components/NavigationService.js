/* @flow */
import { NavigationActions } from 'react-navigation';

let navigator;

// Set new navigator reference to navigator
export function setTopLevelNavigator(navigatorRef: any) {
  navigator = navigatorRef;
}

// Use navigator to open drawer. Requires drawer navigator reference
export function openDrawer() {
  navigator._navigation.openDrawer()
}

// Use navigator to close drawer. Requires drawer navigator reference
export function closeDrawer() {
  navigator._navigation.closeDrawer()
}

// Use navigator to go back
export function goBack() {
  navigator._navigation.goBack()
}