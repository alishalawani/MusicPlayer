import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PlayList from './app/screens/PlayList';

export default function App() {
	// #1DB954
	return (
		<LinearGradient
			colors={[
				'#475499',
				'#191414',
				'#191414',
				'#191414',
				'#191414',
				'#191414',
			]}
			style={styles.container}>
			<PlayList />
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
