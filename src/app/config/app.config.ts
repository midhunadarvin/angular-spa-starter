export class AppConfig {

    public static sidebarNormalConfig = {
        'normal': true,
        'main': {
        },
        'inner-wrap': {
        }
    };

    public static sidebarFixedConfig = {
        'main': {
        },
        'inner-wrap': {
            'width': '250px',
            'position': 'fixed'
        }
    };

    public static sidebarOverlayConfig = {
        'overlay': true,
        'inner-wrap': {
            'position': 'relative'
        }
    };

    public static sidebarCompressedConfig = {
        'compress': true,
        'main': {
        },
        'inner-wrap': {
        }
    };

    public static API_ENDPOINT = 'https://api.github.com/';
}