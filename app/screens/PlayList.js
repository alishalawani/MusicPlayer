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
import { Audio, Video } from 'expo-av';


export default function PlayList({tracks, player, play, currentlyPlaying, setCurrentlyPlaying}) {
	const scrollViewRef = useRef();
	

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.likedSongs}>Liked Songs</Text>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonTitle}>SHUFFLE PLAY</Text>
			</TouchableOpacity>

			<ScrollView
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
								player={player}
								play={play}
								currentlyPlaying={currentlyPlaying}
								setCurrentlyPlaying={setCurrentlyPlaying}
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
