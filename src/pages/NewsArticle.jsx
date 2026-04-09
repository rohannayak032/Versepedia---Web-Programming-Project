import { useParams, Link } from 'react-router-dom';
import { news } from '../data/news';

export default function NewsArticle() {
    const { id } = useParams();
    
    // Find the specific news article based on the URL ID
    const article = news.find(n => n.id === id);

    if (!article) {
        return <div style={{ marginTop: '50px', textAlign: 'center' }}><h2>Article not found!</h2><Link to="/">Go back home</Link></div>;
    }

    return (
        <div className="news-article-page" style={{ marginTop: '50px', maxWidth: '800px', margin: '50px auto' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', color: 'var(--text-color)', opacity: 0.8, textDecoration: 'none' }}>
                ← Back to Featured
            </Link>
            <div style={{ marginBottom: '30px' }}>
                <small className="news-tag" style={{ display: 'block', marginBottom: '10px' }}>{article.category}</small>
                <h1 style={{ fontSize: '46px', fontWeight: '900', lineHeight: '1.2', marginBottom: '15px' }}>{article.headline}</h1>
                <p style={{ fontSize: '20px', color: 'var(--text-color)', opacity: 0.8, marginBottom: '15px' }}>{article.subheadline}</p>
                <span className="meta" style={{ display: 'block', color: 'var(--text-color)', opacity: 0.6, fontStyle: 'italic' }}>
                    By {article.author} · {article.date}
                </span>
            </div>
            
            <img 
                src={article.image} 
                alt={article.headline} 
                style={{ width: '100%', borderRadius: '12px', marginBottom: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
            />

            <div style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-color)' }}>
                <p>{article.content}</p>
            </div>
        </div>
    );
}
