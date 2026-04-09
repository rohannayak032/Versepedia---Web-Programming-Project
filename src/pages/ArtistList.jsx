import { Link } from 'react-router-dom';
import { artists } from '../data/artists';

export default function ArtistList() {
    return (
        <div className="artist-list-container">
            <h1 style={{ fontSize: '48px', margin: '40px 0', fontWeight: '900' }}>Artists</h1>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
                Browse our directory of the world's most influential artists and read their full lyric discography.
            </p>
            
            <div className="artist-grid">
                {artists.map((artist) => (
                    <Link to={`/artist/${artist.id}`} key={artist.id} className="artist-card-link">
                        <article className="artist-card-v2">
                            <div className="artist-image-circle">
                                <img src={artist.image} alt={artist.name} />
                            </div>
                            <h3>{artist.name}</h3>
                            <span className="listeners">{artist.monthlyListeners} monthly listeners</span>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}
