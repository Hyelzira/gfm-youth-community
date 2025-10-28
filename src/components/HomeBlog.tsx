import { Link } from "react-router-dom"; // ✅ import Link
import blog1 from "../assets/images/dance.jpg";
import blog2 from "../assets/images/pray.jpg";
import blog3 from "../assets/images/flan.jpg";
const HomeBlog = () => {
  const posts = [
    { title: "Give Him Praise", desc: "Lorem ipsum...", image: blog1 },
    { title: "Experience Healing", desc: "Lorem ipsum...", image: blog2 },
    { title: "Word of Light", desc: "Lorem ipsum...", image: blog3 },
  ];

  return (
    <section
      id="blog"
      className="py-16 px-6 text-center bg-gray-50 font-Algerian"
    >
      <h2 className="text-2xl font-bold text-fuchsia-700 mb-4">
        LATEST BLOG POSTS
      </h2>
      <p className="max-w-1xl mx-auto text-gray-500 mb-10">
        Stay updated with our latest news, stories, and insights from the community.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="h-64 w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>

            <div className="p-5 text-left">
              <h4 className="text-purple-500 font-bold text-lg mb-2">{post.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{post.desc}</p>

              {/* ✅ Updated to Link */}
              <Link
                to="/blog"
                className="text-purple-400 font-semibold hover:text-fuchsia-400"
              >
                READ MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBlog;
