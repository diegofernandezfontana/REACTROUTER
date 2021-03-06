import React from 'react';
import {Link} from 'react-router-dom'

class Artists extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
        <div>
            <h3>Artists</h3>
            <div className="list-group">
                {
                    this.props.artists.map(artist => {
                    return (
                        <div className="list-group-item" key={artist.id}>
                        {/* Determinaremos donde linkear luego */}
                        <Link to={`artist/${artist.id}`}>{ artist.name }</Link>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    )}
}

export default Artists;
