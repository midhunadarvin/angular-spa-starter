export class AppConfig {

    public static EMAIL_VALIDATION_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    public static PHONE_VALIDATION_REGEX = /^[0-9]+$/;
    public static NUMBER_VALIDATION_REGEX = /^[0-9]+$/;

    public static LOCATION_ENDPOINT = 'https://maps.googleapis.com/maps/api';

    public static API_ENDPOINT = 'http://localhost:4200.com/api';
    public static API_ENDPOINT_EXT = '';

    // public static API_ENDPOINT = 'http://192.168.5.39:8085/api';
    // public static API_ENDPOINT_EXT = '';

}