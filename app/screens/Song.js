import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, View, StyleSheet, Text } from 'react-native';

export default function Song({ title, artist, image, song, player, play }) {
	const uri = '../assets/download.jpeg';
	const [titleStyle, setTitleStyle] = useState({
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
	});
	const playSong = () => {
		setTitleStyle({
			color: '#1DB954',
			fontWeight: 'bold',
			fontSize: 16,
		});
		console.log('yes playing');
		player.unloadAsync().then(() => {
			play(song);
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.songDetails}>
				<Image style={styles.image} source={image} />
				<View style={styles.song}>
					<Text style={titleStyle} onPress={playSong}>
						{title}
					</Text>
					<Text style={styles.artist}>{artist}</Text>
				</View>
			</View>

			<Ionicons
				name='md-heart'
				size={22}
				color='#1DB954'
				style={styles.heart}
			/>
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
		width: '90%',
		marginTop: 15,
	},
	songDetails: {
		flexDirection: 'row',
		flex: 7,
		height: '100%',
		alignItems: 'center',
	},
	image: {
		width: 50,
		height: '100%',
		marginRight: 20,
	},
	song: {
		marginLeft: -10,
	},
	artist: {
		color: 'white',
		fontSize: 16,
	},
	heart: {
		marginTop: 15,
	},
	dots: {
		color: 'white',
		fontSize: 30,
		left: 35,
		flex: 1,
	},
});
