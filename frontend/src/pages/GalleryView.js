import './GalleryView.css';

function GalleryView(props) {
  const artworks = props.artworks;
  const artists = props.artist;
  const index = 0;
  const currentArtist = props.artworks[0].artist;
  return (
    <div className="GalleryView">
      <span>{props.name}</span>
      <span>{artworks[index].description}</span>
      <img src={artworks[index].src} alt="Artwork"></img>
      <span>{artworks[index].title}</span>
      {artists.map((artist) => {
        <Artist name={artist.name} isSelected={artist.name == currentArtist}/>
      })}
    </div>
  );
}

export default GalleryView;