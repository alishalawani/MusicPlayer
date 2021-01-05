import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, View, StyleSheet, Text } from 'react-native';

export default function Song(props) {
	return (
		<View style={styles.container}>
			<View style={styles.songDetails}>
				<Image
					style={styles.image}
					source={require('../assets/download.jpeg')}
				/>
				<View style={styles.song}>
					<Text style={styles.title}>Song Title</Text>
					<Text style={styles.artist}> Artist Name</Text>
				</View>
			</View>

			<Ionicons name='md-heart' size={24} color='#1DB954' style={styles.heart}/>
			<Text style={styles.dots}>...</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
		width: '100%',
        height: 60,
        width:'90%',
        marginTop:15
	},
	songDetails: {
		flexDirection: 'row',
		flex: 5,
        height: '100%',
        alignItems:'center'
	},
	image: {
		width: 50,
		height: '100%',
		marginRight: 20,
	},
	song: {
		alignItems: 'center',
		marginLeft: -10,
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
	},
	artist: {
		color: 'white',
		fontSize: 16,
    },
    heart:{
        marginTop:10
    },
	dots: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		right: -27,
		flex: 1,
    },
});
