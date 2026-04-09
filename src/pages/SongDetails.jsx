import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { songs } from '../data/songs';

export default function SongDetails() {
    const { id } = useParams();
    const song = songs.find(s => s.id === id);

    const [likes, setLikes] = useState(0);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([
        "This song brings back so many memories.",
        "Absolutely love the production on this!"
    ]);

    if (!song) {
        return <div style={{ marginTop: '50px', textAlign: 'center' }}><h2>Song not found!</h2><Link to="/">Go back home</Link></div>;
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (commentText.trim() === "") return;
        setComments([...comments, commentText]);
        setCommentText(""); 
    };

    return (
        <div className="song-page">
            <section className="song-header">
                <small className="news-tag">SONG</small>
                <h1 className="hero-headline">{song.title}</h1>
                <p style={{ fontSize: '22px', color: 'var(--text-color)', marginBottom: '20px', fontWeight: '500' }}>
                    by <Link to={`/artist/${song.artistId}`} style={{ textDecoration: 'underline' }}>{song.artistName}</Link>
                </p>
            </section>

            <section className="song-layout">
                <div className="lyrics-box">
                    <div style={{ marginBottom: '40px', fontSize: '20px', lineHeight: '1.8' }}>
                        {song.lyrics.map((line, index) => (
                            <div key={index}>{line === "" ? <br /> : line}</div>
                        ))}
                    </div>

                    <div className="premium-comments-card">
                        <h3>Fan Zone</h3>
                        <div style={{ margin: '20px 0' }}>
                            <button onClick={() => setLikes(likes + 1)} className="premium-btn">
                                💖 Like Song ({likes})
                            </button>
                        </div>

                        <form onSubmit={handleCommentSubmit} className="premium-form-row">
                            <input 
                                type="text" 
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Add a comment..."
                                className="premium-input-field"
                            />
                            <button type="submit" className="premium-submit-btn">Post</button>
                        </form>

                        <div style={{ marginTop: '30px' }}>
                            {comments.map((text, index) => (
                                <div key={index} style={{ padding: '15px 0', borderTop: '1px solid #ddd' }}>
                                    <strong>👤 User:</strong> {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <aside className="song-info">
                    <div className="song-cover" style={{ backgroundImage: `url(${song.cover})` }} />
                    <div className="modern-card">
                        <h4>Song Info</h4>
                        <p><strong>Artist:</strong> {song.artistName}</p>
                        <p><strong>Album:</strong> {song.album}</p>
                        <p><strong>Released:</strong> {song.released}</p>
                        <p><strong>Genre:</strong> {song.genre}</p>
                        <p><strong>Views:</strong> {song.views}</p>
                    </div>
                </aside>
            </section>
        </div>
    );
}
