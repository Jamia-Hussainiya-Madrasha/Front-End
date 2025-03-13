import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../constants/env.constants";

const Results = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch(`${baseUrl}/results`);
                if (!response.ok) {
                    throw new Error("Failed to fetch results");
                }
                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error("Error fetching results:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, []);

    if (loading) {
        return <h2 className="text-center text-lg font-semibold">Loading...</h2>;
    }

    return (
        <div className="max-w-[1144px] w-[95%] mx-auto mt-28">
            <h1 className="text-2xl font-bold text-center mb-8">অত্র জামিয়ার ছাত্রদের ফলাফল</h1>
            {results.length === 0 ? (
                <p className="text-center">No results found</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {results.map((result) => (
                        <div key={result.id} className="border p-4 shadow-lg rounded-lg">
                            <h2 className="text-xl font-semibold">{result.studentClassName}</h2>
                            <p className="text-gray-600">{result.studentClassDescription}</p>
                            <p className="text-sm text-gray-500">
                                এড করার তারিখ : {new Date(result.resultCreatedAt).toLocaleString()}
                            </p>

                            {/* Details Page Link */}
                            <Link to={`/results/${result.id}`} className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                                ফলাফল বিস্তারিত
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Results;