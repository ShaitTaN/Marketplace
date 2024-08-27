declare module '*.svg' {
	import * as React from 'react';

	const ReactComponent: React.FunctionComponent<React.ComponentProps<'svg'> & {title?: string}>;

	export default ReactComponent;
}
declare module '*.module.scss' {
	const styles: {[className: string]: string};
	export default styles;
}

interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_SHOPS_STUB_ENABLED: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />
