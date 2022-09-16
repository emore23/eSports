// Dependencies
import { View, ActivityIndicator } from 'react-native';

// Styles
import { styles } from './styles';

// Utils
import { THEME } from '../../theme';

export function Loading() {
	return (
		<View style={styles.container}>
			<ActivityIndicator color={THEME.COLORS.PRIMARY} />
		</View>
	);
}