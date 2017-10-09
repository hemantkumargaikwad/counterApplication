import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Button
} from 'react-native';
const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 70,
    },
    red: {
        color: 'red',
    },
});

const CounterApp = props =>{
    return(
        <View style={{flex: 1, flexDirection: 'column' ,alignItems:'center'}}>
            <View style={{flex:0.5,flexDirection: 'row',alignItems:'center', justifyContent:'space-between'}}>
                <Text style={styles.bigblue}>{props.state}</Text>
            </View>
            <View style={{flex:0.5,flexDirection: 'row'}}>
                <View style={{flex:0.5, alignItems:'center',justifyContent:'flex-start'}}>
                    <Button
                        title="Increment"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={props.onIncrementClick}
                    />
                </View>
                <View style={{flex:0.5, alignItems:'center',justifyContent:'flex-start'}}>
                    <Button
                        title="Decrement"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={props.onDecrementClick}
                    />
                </View>
            </View>
        </View>
    );
};
export default CounterApp;