// Dependencies
import { FlatList, Image, View } from 'react-native';

// Assets
import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard } from '../../components/GameCard';

// Components
import { Heading } from '../../components/Heading';

// Utils
import { GAMES } from '../../utils/games';

// Styles
import { styles } from './styles';

export function Home() {
	return (
		<View style={styles.container}>
			<Image
				source={logoImg}
				style={styles.logo}
			/>

			<Heading
				title='Encontre seu duo!'
				subtitle='Selecione o game que deseja jogar...'
			/>

			<FlatList
				horizontal
				data={GAMES}
				contentContainerStyle={styles.contentList}
				showsHorizontalScrollIndicator={false}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<GameCard
						data={item}
					/>
				)}
			/>

		</View>
	);
}