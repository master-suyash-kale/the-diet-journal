import IS_DEV from 'configs/is_dev';

let BASE_SERVICE_URL: string = '/APIs';
let BASE_SERVICE_URL_DEV: string = '/APIs';

let BASE_ROUTER_PATH: string = '/';
let BASE_ROUTER_PATH_DEV: string = '/';

const PRIVATE_REDIRECT = '/';

if (IS_DEV) {
    BASE_SERVICE_URL = BASE_SERVICE_URL_DEV;
    BASE_ROUTER_PATH = BASE_ROUTER_PATH_DEV;
}

export {
    IS_DEV,
    BASE_SERVICE_URL,
    BASE_ROUTER_PATH,
    PRIVATE_REDIRECT
};