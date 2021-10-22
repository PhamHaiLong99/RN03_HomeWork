import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { angry, care, haha, like, love, sad } from './images';
import Icon from './Icon';

export class sua extends Component {
    array = [angry, care, haha, like, love, sad];
    state = {
        selectedEmoji = care,
    };
    onPressIcon = icon => this.setState({ selectedEmoji: icon });
    renderEmoji = () => {
        return this.array.map(icon, index) => (
            <Icon key={index} iconSource = {icon} onPress={() => {this.onPressIcon(icon)}} />

        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Ban thay the nao?</Text>
                <Image style={styles.selectedEmoji} source ={this.state.selectedEmoji} />
                <View style={styles.emojiContainer}>{this.renderEmoji(())}</View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: '700',
        fontSize: 18,
    },
    selectedEmoji: {
        height: 150,
        width: 150,
        backgroundColor: 'gray',
        marginVertical: 20,
    },
    emojiContainer: {
        flexDirection: 'row',
    },

});
export default sua
