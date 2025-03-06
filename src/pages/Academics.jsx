import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Academics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://server-alpha-fawn.vercel.app/api/v1/academics/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        let sortedData = [];

        if (result.results && Array.isArray(result.results.data)) {
          sortedData = result.results.data;
        } else if (Array.isArray(result.data)) {
          sortedData = result.data;
        } else {
          console.error("Invalid API Response Structure", result);
        }

        // ডেট অনুসারে সর্ট করা (পুরাতন আগে, নতুন পরে)
        sortedData.sort((a, b) => new Date(a.class_created) - new Date(b.class_created));

        setData(sortedData);
      } catch (err) {
        console.error("API Fetch Error:", err);
        setError("ডাটা লোড করতে সমস্যা হয়েছে!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <section className="max-w-[1144px] w-[95%] mx-auto py-8">
      <Helmet>
        <title>একাডেমিক</title>
      </Helmet>
      <h2 className="text-2xl font-semibold mb-4 text-center">একাডেমিক তথ্য</h2>

      {loading && <p className="text-center">📡 লোড হচ্ছে...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && data.length === 0 && <p className="text-center">❌ কোনো তথ্য পাওয়া যায়নি।</p>}

      {selectedItem ? (
        <div className="p-4 border rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold">{selectedItem.class_name}</h1>
          <br />
          <div className="leading-12">
            <h3 className="text-xl font-semibold">{selectedItem.class_title}</h3>
            <p>{selectedItem.class_description}</p>
            <p>আসন সংখ্যা: {selectedItem.number_seat} | ছাত্র সংখ্যা: {selectedItem.student_count}</p>
            <p>🗓️ এড করার তারিখ: {formatDate(selectedItem.class_created)} | আপডেট করার তারিখ: {formatDate(selectedItem.class_update)}</p>
          </div>
          <button onClick={() => setSelectedItem(null)}>🔙 ফিরে যান</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((item) => (
            <div key={item.uuid} className="p-5 border rounded-lg shadow-2xl cursor-pointer hover:bg-gray-600">
              <div className="leading-14">
                <h3 className="text-2xl font-semibold">{item.class_name}</h3>
                <h3 className="text-md font-semibold">{item.class_title}</h3>
              </div>
              <button onClick={() => handleItemClick(item)}>বিস্তারিত দেখুন</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Academics;