import React from 'react';
import './Article.css'
const Article = () => {
    const myStyle = {
        backgroundColor: 'red',
        fontWeight: 'bold',
        fontSize: '3rem',
    }
    return (
        <div>
            <article className='blog'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, iure.
            <p style={
                {color: 'red', fontWeight: 'bold', textAlign: 'center', fontSize:'4rem'}
            }>hello word</p>
             </article>
            <h2 style={myStyle}>hello</h2>
        </div>
    );
};

export default Article;