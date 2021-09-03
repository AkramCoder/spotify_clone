export const authEndPoint = "https://accounts.spotify.com/authorize"

const redirectUri = "https://spotify-clone-cbb1b.web.app/"

const clientId = "c0ea5ae1793846f7b5cd5a5691ee2ea6"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-modify-private",
    "playlist-read-private",
    "playlist-read-collaborative",
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])
            
            return initial
        }, {})
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`