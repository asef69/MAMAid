import { blogPost } from '@/services/blogPostService';
import userStore from '@/state/userState';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

function PostBlog() {
    const [author, setAuthor] = useState('');
    const [week, setWeek] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { user } = userStore();
    const id = user ? user.details.id : null;
    console.log("User ID: ", id);

    useEffect(() => {
        setAuthor(id);
    }, [id]);

    const postMutation = useMutation({
        mutationFn: (data) => blogPost(data),
        onSuccess: (data) => {
            console.log("Blog posted successfully: ", data);
            setAuthor('');
            setWeek(null);
            setTitle('');
            setContent('');
        },
        onError: (error) => {
            console.log("Error posting blog: ", error);
        }
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        const blogData = {
            author,
            week,
            title,
            content
        };

        postMutation.mutate(blogData);

    }

    return (
        <div className="container mx-auto p-6 bg-gradient-to-b from-[#FF7A8B] to-[#FDCB82]">
            <h1 className="text-5xl font-bold mb-6">Post a Blog</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-lg font-semibold">Week Number</label>
                    <input 
                        type="number" 
                        id="week" 
                        value={week} 
                        onChange={(e) => setWeek(e.target.value)} 
                        className="w-full p-3 border-2 border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter the title of the blog"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="title" className="block text-lg font-semibold">Blog Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="w-full p-3 border-2 border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter the title of the blog"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block text-lg font-semibold">Blog Content</label>
                    <textarea 
                        id="content" 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        className="w-full p-3 border-2 border-gray-300 rounded-md shadow-sm" 
                        rows="10" 
                        placeholder="Write your blog content here..." 
                        required
                    />
                </div>
                <div>
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700">
                        Post Blog
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PostBlog;
