export class LayoutConfig {
	static sidebarNormalConfig = {
		normal: true,
		main: {
		},
		'inner-wrap': {
		}
	};

	static sidebarFixedConfig = {
		main: {
		},
		'inner-wrap': {
			width: '250px',
			position: 'fixed'
		}
	};

	static sidebarOverlayConfig = {
		overlay: true,
		'inner-wrap': {
			position: 'relative'
		}
	};

	static sidebarCompressedConfig = {
		compress: true,
		main: {
		},
		'inner-wrap': {
		}
	};
}
