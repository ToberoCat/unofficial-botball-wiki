import React from 'react';
import AuthorInfo from './AuthorInfo';

export default function AuthorGrid({ authors }) {
    if (!authors?.length) return null;

    return (
        <div>
            <h2>Meet the Authors</h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '1.5rem',
                    marginTop: '2rem',
                }}>
                {authors.map((author, idx) => (
                    <AuthorInfo key={idx} author={author} />
                ))}
            </div>
        </div>
    );
}