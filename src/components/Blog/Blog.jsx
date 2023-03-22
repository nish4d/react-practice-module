import React from 'react';

const Blog = (props) => {
    return (
        <div>
            <h2>this is blog component</h2>
            <h3>{props.name}</h3>
            <h3>{props.author}</h3>
        </div>
    );
};

export default Blog;