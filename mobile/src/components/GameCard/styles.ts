// Dependencies
import { StyleSheet } from 'react-native';
// Utils
import { THEME } from '../../theme';


export const styles = StyleSheet.create({
	container: {
		alignItems: 'baseline',
		justifyContent: 'flex-start',
		marginRight: 24,
		marginTop: 0,
	},
	cover: {
		justifyContent: 'flex-end',
		borderRadius: 8,
		overflow: 'hidden',
		width: 240,
		height: 320,
	},
	footer: {
		justifyContent: 'flex-end',
		width: "100%",
		height: 206,
		padding: 16,
	},
	name: {
		color: THEME.COLORS.TEXT ,
		fontFamily: THEME.FONT_FAMILY.BOLD,
		fontSize: THEME.FONT_SIZE.MD,
	},
	ads: {
		color: THEME.COLORS.CAPTION_300 ,
		fontFamily: THEME.FONT_FAMILY.REGULAR,
		fontSize: THEME.FONT_SIZE.MD,
	}
});