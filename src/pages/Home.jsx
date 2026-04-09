import { Link } from 'react-router-dom';
import { news } from '../data/news';
import { artists } from '../data/artists';

export default function Home() {
    // Separate the hero article (first one) from the grid articles
    const heroArticle = news[0];
    const gridArticles = news.slice(1);
    
    // Get top 6 artists for trending section
    const trendingArtists = artists.slice(0, 6);

    return (
        <div className="home-content">
            {heroArticle && (
                <section className="hero-news-premium" style={{ backgroundImage: `url(${heroArticle.image})` }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content-wrapper" style={{ position: 'relative', zIndex: 2 }}>
                        <small className="news-tag">{heroArticle.category}</small>
                        <Link to={`/news/${heroArticle.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h1 className="hero-headline-static">
                                {heroArticle.headline}
                            </h1>
                        </Link>
                        <p className="hero-subtext">
                            {heroArticle.subheadline}
                        </p>
                        <span className="meta">
                            by {heroArticle.author} · {heroArticle.date}
                        </span>
                    </div>
                </section>
            )}
            
            <section className="news-grid-expanded">
                {gridArticles.map((article) => (
                    <article className="news-card-v3" key={article.id}>
                        <Link to={`/news/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="news-image-v3">
                                <img src={article.image} alt={article.headline}/>
                            </div>
                            <div className="card-inner">
                                <small>{article.category}</small>
                                <h3>{article.headline}</h3>
                                <span className="meta">{article.date}</span>
                            </div>
                        </Link>
                    </article>
                ))}
            </section>

            <section className="trending-section">
                <h2>Trending Artists</h2>
                <div className="trending-grid">
                    {trendingArtists.map((artist) => (
                        <Link to={`/artist/${artist.id}`} key={artist.id} className="trending-artist-card">
                            <div className="artist-avatar-container">
                                <img src={artist.image} alt={artist.name} />
                            </div>
                            <h4>{artist.name}</h4>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
