import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Song from './Song';

class Track {
	constructor(title, artist, image, song) {
		this.title = title;
		this.artist = artist;
		this.image = image;
		this.song = song;
	}
}

export default function PlayList(props) {
	const [tracks, setTracks] = useState([
		new Track(
			'Titanium',
			'Sia',
			'../assets/download.jpeg',
			'../app/assets/SiaTitanium.mp4'
		),
		new Track(
			'Unstoppable',
			'Sia',
			'../assets/download.jpeg',
			'app/assets/sia_unstoppable.mp4'
		),
		new Track(
			'Snowman',
			'Sia',
			'../assets/download.jpeg',
			'../app/assets/sia_snowman.mp4'
		),
		new Track(
			'Courage To Change',
			'Sia',
			'../assets/download.jpeg',
			'../app/assets/sia_courage_to_change.mp4'
		),
		new Track(
			'Trampoline',
			'SHAED',
			'../assets/download.jpeg',
			'../app/assets/shaed_trampoline.mp4'
		),
		new Track(
			'Miracle',
			'Labrinth',
			'../assets/download.jpeg',
			'../app/assets/labrinth_miracle.mp4'
		),
		new Track(
			'Imagination',
			'Labrinth',
			'../assets/download.jpeg',
			'../app/assets/labrinth_imagination.mp4'
		),
		new Track(
			'Natural',
			'Imagine Dragons',
			'../assets/download.jpeg',
			'../app/assets/ImagineDragons_Natural.mp4'
		),
		new Track(
			'Chandelier',
			'Sia',
			'../assets/download.jpeg',
			'../app/assets/chandelierSia.mp4'
		),
		new Track(
			'Time Machine',
			'Alicia Keys',
			'../assets/download.jpeg',
			'../app/assets/alicia_keys_time_machine.mp4'
		),
	]);
    
    const track3 = new Track()

	return (
		<View style={styles.container}>
			<Text style={styles.likedSongs}>Liked Songs</Text>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonTitle}>SHUFFLE PLAY</Text>
			</TouchableOpacity>
			<Song />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	likedSongs: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 22,
		marginBottom: 15,
	},
	buttonTitle: { color: 'white', fontWeight: 'bold', fontSize: 16 },
	button: {
		backgroundColor: '#1DB954',
		paddingVertical: 12,
		paddingHorizontal: 40,
		borderRadius: 20,
	},
});
