import React, { useState, useRef } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
} from 'react-native';
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
	const scrollViewRef = useRef();
	const [tracks, setTracks] = useState([
		new Track(
			'Titanium',
			'Sia',
			'https://upload.wikimedia.org/wikipedia/commons/7/7c/AppleMusicIcon_macOS.png',
			'../assets/SiaTitanium.mp4'
		),
		new Track(
			'Unstoppable',
			'Sia',
			'https://upload.wikimedia.org/wikipedia/commons/7/7c/AppleMusicIcon_macOS.png',
			'app/assets/sia_unstoppable.mp4'
		),
		new Track(
			'Snowman',
			'Sia',
			'https://upload.wikimedia.org/wikipedia/commons/7/7c/AppleMusicIcon_macOS.png',
			'../assets/sia_snowman.mp4'
		),
		new Track(
			'Courage To Change',
			'Sia',
			'https://upload.wikimedia.org/wikipedia/commons/7/7c/AppleMusicIcon_macOS.png',
			'../assets/sia_courage_to_change.mp4'
		),
		new Track(
			'Trampoline',
			'SHAED',
			'https://upload.wikimedia.org/wikipedia/commons/7/7c/AppleMusicIcon_macOS.png',
			'../assets/shaed_trampoline.mp4'
		),
		new Track(
			'Miracle',
			'Labrinth',
			'https://upload.wikimedia.org/wikipedia/commons/7/7c/AppleMusicIcon_macOS.png',
			'../assets/labrinth_miracle.mp4'
		),
		new Track(
			'Imagination',
			'Labrinth',
			'https://upload.wikimedia.org/wikipedia/commons/7/7c/AppleMusicIcon_macOS.png',
			'../assets/labrinth_imagination.mp4'
		),
		new Track(
			'Natural',
			'Imagine Dragons',
			'https://upload.wikimedia.org/wikipedia/commons/7/7c/AppleMusicIcon_macOS.png',
			'../assets/ImagineDragons_Natural.mp4'
		),
		new Track(
			'Chandelier',
			'Sia',
			'https://upload.wikimedia.org/wikipedia/commons/7/7c/AppleMusicIcon_macOS.png',
			'../assets/chandelierSia.mp4'
		),
		new Track(
			'Time Machine',
			'Alicia Keys',
			'https://upload.wikimedia.org/wikipedia/commons/7/7c/AppleMusicIcon_macOS.png',
			'../assets/alicia_keys_time_machine.mp4'
		),
	]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.likedSongs}>Liked Songs</Text>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonTitle}>SHUFFLE PLAY</Text>
			</TouchableOpacity>

			<ScrollView
				ref={scrollViewRef}
				onContentSizeChange={() =>
					scrollViewRef.current.scrollToEnd({ animated: true })
				}
				style={{ width: '90%', flex: 4 }}>
				<View>
					{tracks.map(({title, artist,image, song}, i) => {
						return (
							<Song
								key={i}
								title={title}
								artist={artist}
								image={image}
								song={song}
							/>
						);
					})}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	likedSongs: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 22,
		marginBottom: 24,
		marginTop: 40,
	},
	buttonTitle: { color: 'white', fontWeight: 'bold', fontSize: 16 },
	button: {
		backgroundColor: '#1DB954',
		paddingVertical: 12,
		paddingHorizontal: 40,
		borderRadius: 20,
		marginBottom: 10,
	},
});
