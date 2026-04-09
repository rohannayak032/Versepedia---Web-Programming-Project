import { useState } from 'react';
import { Link } from 'react-router-dom';
import { songs } from '../data/songs';

export default function Charts() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredSongs = songs.slice(0, 20).filter((song) => {
        const query = searchQuery.toLowerCase();
        return (
            song.title.toLowerCase().includes(query) ||
            song.artistName.toLowerCase().includes(query)
        );
    });

    return (
        <div className="charts-page">
            <div className="charts-top">
                <h2>Top 20 Songs</h2>
                
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Search songs or artists..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="premium-search-input"
                    />
                </div>
            </div>
            
            <div className="charts-list">
                {filteredSongs.length > 0 ? (
                    filteredSongs.map((song, index) => (
                        <div className="chart-row" key={song.id}>
                            <div className="rank">{index + 1}</div>
                            <div className="chart-title">
                                <Link to={`/song/${song.id}`}>
                                    {song.title}
                                </Link> 
                                <span>LYRICS</span>
                            </div>
                            <div className="chart-artist">
                                <Link to={`/artist/${song.artistId}`}>
                                    {song.artistName}
                                </Link>
                            </div>
                            <div className="chart-views">{song.views}</div>
                        </div>
                    ))
                ) : (
                    <div style={{ padding: '40px 0', textAlign: 'center', color: '#777' }}>
                        No results found for "{searchQuery}".
                    </div>
                )}
            </div>
        </div>
    );
}
