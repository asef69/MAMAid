
import React from "react";

function Blog() {
	// Dummy blog data for demonstration
	const blog = {
		title: "How to Start Web Development",
		content: `Web development is a great skill to learn. Start with HTML, CSS, and JavaScript!\n\nHere are some tips to get started:\n- Learn the basics of HTML and CSS.\n- Practice by building small projects.\n- Move on to JavaScript for interactivity.\n- Explore frameworks like React or Vue.\n\nHappy coding!`,
		author: "Alice",
		week: 1,
		date: "September 19, 2025"
	};

	return (
		<div className="container mx-auto py-10 max-w-2xl">
			<div className="bg-white rounded-xl shadow-lg p-8">
				<h1 className="text-4xl font-bold mb-4 text-pink-600">{blog.title}</h1>
				<div className="flex justify-between items-center mb-6">
					<span className="text-sm text-gray-500">By {blog.author}</span>
					<span className="text-sm text-yellow-500">Week {blog.week}</span>
					<span className="text-sm text-gray-400">{blog.date}</span>
				</div>
				<div className="prose prose-lg text-gray-800 whitespace-pre-line">
					{blog.content}
				</div>
			</div>
		</div>
	);
}

export default Blog;
