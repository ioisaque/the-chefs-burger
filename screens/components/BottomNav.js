import React from 'react'
import { Icon } from 'expo';
import { Platform, View, Text, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/otherStyles';
import commonStyles from '../../assets/styles/commonStyles';

export default props => {
    const { navigate } = props.navigation
    
    return (
        <View style={styles.navBarBottom}>
            <TouchableOpacity onPress={() => {
                
                if (props.firstLink.screen == 'Logout')
                    _handleLogOut()
                else
                    navigate(props.firstLink.screen)

                }}
                style={props.firstLink.state ? styles.tabButtonPrimary : styles.tabButtonSecondary}>
                
                <Icon.Ionicons
                    name={Platform.OS === 'ios' ? `ios-${props.firstLink.icon}` : `md-${props.firstLink.icon}`}
                    size={26}
                    style={ styles.tabIcon }
                    color={commonStyles.colors.white}
                />
                <Text style={styles.tabText}>{props.firstLink.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate(props.secondLink.screen) } style={props.secondLink.state ? styles.tabButtonPrimary : styles.tabButtonSecondary}>
                <Icon.Ionicons
                    name={Platform.OS === 'ios' ? `ios-${props.secondLink.icon}` : `md-${props.secondLink.icon}`}
                    size={26}
                    style={ styles.tabIcon }
                    color={commonStyles.colors.white}
                />
                <Text style={styles.tabText}>{props.secondLink.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate(props.thirdLink.screen) } style={props.thirdLink.state ? styles.tabButtonPrimary : styles.tabButtonSecondary}>
                <Icon.Ionicons
                    name={Platform.OS === 'ios' ? `ios-${props.thirdLink.icon}` : `md-${props.thirdLink.icon}`}
                    size={26}
                    style={ styles.tabIcon }
                    color={commonStyles.colors.white}
                />
                <Text style={styles.tabText}>{props.thirdLink.title}</Text>
            </TouchableOpacity>
        </View>
    )
}