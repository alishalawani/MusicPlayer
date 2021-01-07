import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PlayList from './app/screens/PlayList';
import { Audio, Video } from 'expo-av';

class Track {
	constructor(title, artist, image, song) {
		this.title = title;
		this.artist = artist;
		this.image = image;
		this.song = song;
	}
}

export default function App() {
	// #1DB954 the spotify green color
	let player = new Audio.Sound();
	const [currentlyPlaying, setCurrentlyPlaying] = useState('')
	const [initialStatus, setInitialStatus] = useState({
		shouldPlay: false,
		rate: 1.0,
		shouldCorrectPitch: true,
		volume: 1.0,
		isMuted: false,
		isLooping: false,
	});
	useEffect(() => {
		Audio.setAudioModeAsync({
			allowsRecordingIOS: true,
			playsInSilentModeIOS: true,
		});
	}, []);

	const [tracks, setTracks] = useState([
		new Track(
			'Titanium',
			'Sia',
			require('./app/assets/songImage.png'),
			require('./app/assets/SiaTitanium.mp4')
		),
		new Track(
			'Unstoppable',
			'Sia',
			require('./app/assets/songImage.png'),
			require('./app/assets/sia_unstoppable.mp4')
		),
		new Track(
			'Snowman',
			'Sia',
			require('./app/assets/songImage.png'),
			require('./app/assets/sia_snowman.mp4')
		),
		new Track(
			'Courage To Change',
			'Sia',
			require('./app/assets/songImage.png'),
			require('./app/assets/sia_courage_to_change.mp4')
		),
		new Track(
			'Trampoline',
			'SHAED',
			require('./app/assets/songImage.png'),
			require('./app/assets/shaed_trampoline.mp4')
		),
		new Track(
			'Miracle',
			'Labrinth',
			require('./app/assets/songImage.png'),
			require('./app/assets/labrinth_miracle.mp4')
		),
		new Track(
			'Imagination',
			'Labrinth',
			require('./app/assets/songImage.png'),
			require('./app/assets/labrinth_imagination.mp4')
		),
		new Track(
			'Natural',
			'Imagine Dragons',
			require('./app/assets/songImage.png'),
			require('./app/assets/ImagineDragons_Natural.mp4')
		),
		new Track(
			'Chandelier',
			'Sia',
			require('./app/assets/songImage.png'),
			require('./app/assets/chandelierSia.mp4')
		),
		new Track(
			'Time Machine',
			'Alicia Keys',
			require('./app/assets/songImage.png'),
			require('./app/assets/alicia_keys_time_machine.mp4')
		),
	]);

	function play(song) {
		player.getStatusAsync().then((res) => {
			console.log(res);
			if (res.isLoaded) {
				player.replayAsync();
			} else {
				player.loadAsync(song, initialStatus).then((res) => {
					player.playAsync().then((res) => {
						console.log(res);
					});
				});
			}
		});
	}
	return (
		<LinearGradient
			colors={['#321E90', '#191414', '#191414', '#191414', '#191414']}
			style={styles.container}>
			<PlayList tracks={tracks} player={player} play={play} currentlyPlaying={currentlyPlaying} setCurrentlyPlaying={setCurrentlyPlaying}/>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
