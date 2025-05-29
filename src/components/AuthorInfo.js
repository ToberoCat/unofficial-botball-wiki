import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const authors = {
    tobero: {
        name: 'Tobias Madlberger',
        url: 'https://github.com/ToberoCat',
        email: 'tobias.madlberger@gmail.com',
        image: '/img/authors/tobias-madlberger.jpg',
    },
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '1rem',
        padding: '1rem',
        border: '1px solid var(--ifm-border-color)',
        borderRadius: '8px',
        backgroundColor: 'var(--ifm-card-background-color)',
        boxShadow: 'var(--ifm-shadow-level-1)',
    },
    avatar: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '1rem',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
    },
    name: {
        fontSize: '1.1rem',
        fontWeight: '600',
        marginBottom: '0.25rem',
        color: 'var(--ifm-heading-color)',
    },
    link: {
        textDecoration: 'none',
        color: 'var(--ifm-link-color)',
    },
    email: {
        fontSize: '0.9rem',
        color: 'var(--ifm-font-color-secondary)',
        textDecoration: 'none',
    },
};

export default function AuthorInfo({ author }) {
    const data = authors[author];
    if (!data) return null;

    const { name, url, email, image } = data;
    const imgSrc = useBaseUrl(image);

    return (
        <div style={styles.container}>
            <img src={imgSrc} alt={name} style={styles.avatar} />
            <div style={styles.info}>
                {url ? (
                    <a
                        href={url}
                        style={styles.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <div style={styles.name}>{name}</div>
                    </a>
                ) : (
                    <div style={styles.name}>{name}</div>
                )}
                {email && (
                    <a href={`mailto:${email}`} style={styles.email}>
                        {email}
                    </a>
                )}
            </div>
        </div>
    );
}