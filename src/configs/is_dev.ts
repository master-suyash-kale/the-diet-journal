let url: string = window.location.href;
let IS_DEV = false;

if (
    url.search("localhost") > -1 ||
    url.search("127.0.0.1") > -1
) {
    IS_DEV = true;
}

if (process.env.NODE_ENV === 'production') {
    IS_DEV = false;
}

export default IS_DEV;