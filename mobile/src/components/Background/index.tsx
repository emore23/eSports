// Dependencies
import { ImageBackground } from 'react-native';

// Styles
import { styles } from './styles';

// Assets
import backgroundImg from '../../assets/background-galaxy.png';

interface BackgroundProps {
	children: React.ReactNode;
}

export function Background({ children }: BackgroundProps) {
	return (
		<ImageBackground 
			source={backgroundImg}
			style={styles.container}
			defaultSource={backgroundImg}
		>
			{children}
		</ImageBackground>
	);
}