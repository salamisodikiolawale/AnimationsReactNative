import React, { Component } from 'react';
import { StyleSheet, View, Animated , TouchableWithoutFeedback} from 'react-native';

export default class Animations_Opacity extends Component {

    constructor(props){
        super(props)
        this.state = {
            animation : new Animated.Value(1) //Default value
        }
    };

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 0,
            duration: 350,
            useNativeDriver: true
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        });
    }

    render() {
        const animatedStyles = {
            opacity:this.state.animation,
        }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box, animatedStyles]}/>
                </TouchableWithoutFeedback>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: "center",
        justifyContent:"center",
    },
    box : {
        width: 150,
        height: 150,
        backgroundColor: "tomato",
    }
})