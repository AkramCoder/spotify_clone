import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer'

import './SidebarOption.css'

const spotify = new SpotifyWebApi()

function SidebarOption({ title, Icon, playlist_id }) {
    const [{}, dispatch] = useDataLayerValue()

    const loadPlaylist = () => {
        console.log(playlist_id)
        spotify.getPlaylist(playlist_id).then((response) => {
            dispatch({
              type: "SET_DISCOVER_WEEKLY",
              discover_weekly: response
            })
        })
    }
    return (
        <div className="sidebarOption" onClick={loadPlaylist}>
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
