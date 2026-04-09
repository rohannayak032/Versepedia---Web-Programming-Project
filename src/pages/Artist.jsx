import { useParams, Link } from 'react-router-dom';
import { artists } from '../data/artists';
import { songs } from '../data/songs';

export default function Artist() {
    const { id } = useParams();
    const artist = artists.find(a => a.id === id);
    const artistSongs = songs.filter(s => s.artistId === id);

    if (!artist) {
        return <div style={{ marginTop: '50px', textAlign: 'center' }}><h2>Artist not found!</h2><Link to="/artists">Go back to Artist Directory</Link></div>;
    }

    return (
        <div className="artist-page">
            <div className="artist-header">
                <div className="artist-image" style={{ backgroundImage: `url(${artist.image})` }} />
                <div className="artist-info">
                    <h2>{artist.name}</h2>
                    <p className="artist-bio">{artist.bio}</p>
                    <div className="artist-stats">
                        <div className="stat-box">
                            <strong>{artist.monthlyListeners}</strong>
                            <span>Monthly Listeners</span>
                        </div>
                        <div className="stat-box">
                            <strong>{artist.followers}</strong>
                            <span>Followers</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="artist-songs" style={{ marginTop: '50px' }}>
                <h3>Popular Songs</h3>
                <div className="charts-list">
                    {artistSongs.map((song, index) => (
                        <div className="chart-row" key={song.id}>
                            <div className="rank">{index + 1}</div>
                            <div className="chart-title">
                                <Link to={`/song/${song.id}`}>
                                    {song.title}
                                </Link>
                                <span>LYRICS</span>
                            </div>
                            <div className="chart-views">{song.views}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
