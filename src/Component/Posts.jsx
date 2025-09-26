import React, { useState, useEffect } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.posts));
    }, []);

    return (
        <>

            <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Posts ro‘yxati
            </h1>
            <div className='flex'>
                <div className="min-h-screen bg-gray-100 py-8 px-4">


                    <ul className="max-w-3xl w-100 mx-auto space-y-4">
                        {posts.map(post => (
                            <li
                                key={post.id}
                                className="bg-white border border-gray-300 rounded-md p-4"
                            >
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {post.body}
                                </p>
                                <div className="mt-3">
                                    <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-500">
                                        Batafsil
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Posts;
