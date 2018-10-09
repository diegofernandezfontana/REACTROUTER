import React from 'react';
import Songs from './Songs';




class SingleAlbum extends React.Component{
    componentDidMount(){
        this.props.selectAlbum(this.props.albumId);
    }

    render(){
        const {album, albumId, selectAlbum, selectedSong, start} = this.props;
        return(
            <div className="album">
            <div>
            <h3>{album.name}</h3>
            <img src={`/api/albums/${album.id}/image`} className="img-thumbnail" />
            </div>
            <Songs
            songs={album.songs}
            start={start}
            selectedSong={selectedSong}
            />
            </div>
        )
    }
}

export default SingleAlbum;
