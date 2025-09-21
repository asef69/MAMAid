
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/services/blogFetchService";


function BlogList() {
    const { data: blogs, isLoading, isError, error } = useQuery({
        queryKey: ['blogs'],
        queryFn: () => fetchBlogs(),
        cacheTime: 0,
        staleTime: 0,
    });

        
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-96">
                <span className="text-2xl font-semibold text-gray-500">Loading blogs...</span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-96">
                <span className="text-2xl font-semibold text-red-500">{error}</span>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">All Blogs</h1>
            <div className="flex flex-col gap-8">
                {blogs.length === 0 ? (
                    <div className="text-center text-xl text-gray-400">No blogs found.</div>
                ) : (
                    blogs.map((blog) => (
                        <div key={blog.id} className="bg-white mt-5 rounded-xl shadow-lg p-8 hover:scale-[1.01] transition-transform duration-300">
                            <h2 className="text-3xl font-bold mb-2 text-pink-600">{blog.title}</h2>
                            <div className="flex flex-wrap gap-4 items-center mb-4">
                                <span className="text-sm text-gray-500">By <span className="font-semibold">{blog.author_name}</span></span>
                                <span className="text-sm text-yellow-500">Week {blog.week}</span>
                                {blog.date && <span className="text-sm text-gray-400">{blog.date}</span>}
                            </div>
                            <div className="prose prose-lg text-gray-800 whitespace-pre-line mb-4">
                                {blog.content}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default BlogList;