// Dependencies
import * as React from 'react';
import { 
	TouchableOpacity, 
	TouchableOpacityProps,
	ImageBackground, 
	ImageSourcePropType,
	Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Utils
import { THEME } from '../../theme';

// Styles
import { styles } from './styles';

export interface  GameCardProps {
	id: string;
	name: string;
	ads: string;
	cover: ImageSourcePropType;
}

interface CardProps extends TouchableOpacityProps {
	data: GameCardProps;
}

export function GameCard({ data, ...rest }: CardProps) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<ImageBackground 
				style={styles.cover} 
				source={data.cover} 
			>
				<LinearGradient
					colors={THEME.COLORS.FOOTER}
					style={styles.footer}
				>
					<Text style={styles.name}>
						{data.name}
					</Text>

					<Text style={styles.ads}>
						{data.ads} anúncios
					</Text>
				</LinearGradient>
			</ImageBackground>
		</TouchableOpacity>
	);
}