import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US");
};

const Teachers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://server-alpha-fawn.vercel.app/api/v1/teacher/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.results && Array.isArray(result.results.data)) {
          setData(result.results.data);
        } else if (Array.isArray(result.data)) {
          setData(result.data);
        } else {
          setData([]);
          console.error("Invalid API Response Structure", result);
        }
      } catch (err) {
        console.error("API Fetch Error:", err);
        setError("ডাটা লোড করতে সমস্যা হয়েছে!");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <section className="max-w-[1144px] w-[95%] mx-auto py-8">
      <Helmet>
        <title>শিক্ষকবৃন্দ</title>
      </Helmet>
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
        আমাদের শিক্ষকবৃন্দ
      </h2>

      {loading && <p className="text-blue-500 text-center">লোড হচ্ছে...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && data.length === 0 && (
        <p className="text-gray-500 text-center">কোনো তথ্য পাওয়া যায়নি।</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {data.map((teacher) => (
          <div key={teacher.id} className="p-4 border rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="./image/avater.png"
              alt={teacher.name}
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <h3 className="text-xl font-semibold whitespace-nowrap">{teacher.name}</h3>
            <p className="text-gray-600">{teacher.designation}</p>
            <p className="text-sm text-gray-500">যোগাযোগ: {teacher.phone_number}</p>
            <p className="text-sm text-gray-500">
              এড করার তারিখ: {formatDate(teacher.created_at)} |
              আপডেট করার তারিখ: {formatDate(teacher.updated_at)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;