import {Router} from './Router';
import { SettingsProvider } from './providers/SettingsProvider';
import {ThemeProvider} from './providers/ThemeProvider';

export const App = () => {
	return (
		<ThemeProvider>
			<SettingsProvider>
				<Router />
			</SettingsProvider>
		</ThemeProvider>
	);
};
