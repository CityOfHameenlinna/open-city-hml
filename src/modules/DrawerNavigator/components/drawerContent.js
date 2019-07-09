/* @flow */
import React from 'react';
import {View, ScrollView, Text, FlatList} from 'react-native';

import { DrawerItems } from "react-navigation";

import { DrawerHeader } from './header';
import styles from '../styles';

const DrawerContent = (props: any) => {
    return (
    <View style={styles.headerMenu}>
        <View>
            <DrawerHeader/>
        </View>
        <ScrollView>
                <DrawerItems labelStyle={styles.headerItems} {...props} />
        </ScrollView>
    </View>
    );

}

export default DrawerContent
