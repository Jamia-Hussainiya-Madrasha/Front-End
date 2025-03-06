import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNotices = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://server-alpha-fawn.vercel.app/api/v1/notices/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);

      if (Array.isArray(data)) {
        setNotices(data);
      } else {
        setNotices([]);
        setError("কোনো নোটিশ পাওয়া যায়নি!");
      }
    } catch (err) {
      console.error("API Fetch Error:", err);
      setError("ডাটা লোড করতে সমস্যা হয়েছে!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="max-w-[1144px] w-[95%] mx-auto py-8">
      <Helmet>
        <title>নোটিশ</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center mb-8">নোটিশ সমূহ</h2>

      {loading && <p className="text-center text-blue-500">লোড হচ্ছে...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && notices.length === 0 && (
        <p className="text-center text-gray-500">কোনো নোটিশ পাওয়া যায়নি।</p>
      )}

      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">
              <Link to={`/notice/${notice.id}`}>{notice.title}</Link>
            </h3>
            <p className="text-sm text-gray-500">
              🗓️ প্রকাশের তারিখ: {formatDate(notice.created_at)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notice;