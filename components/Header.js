import React from "react";
import { Text, View } from "react-native";
import { styles } from '../styles/appStyles';

// Simple Header Component that Displays APP Title
const Header = () => {
    return(
        <View style={styles.HeaderView}>
            <Text style={styles.HeaderTitle}>MoEVing TODO App</Text>
        </View>
    );
}

export default Header;