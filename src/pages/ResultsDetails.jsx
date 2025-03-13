import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../constants/env.constants";

const ResultDetails = () => {
    const { id } = useParams();
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResultDetails = async () => {
            try {
                const response = await fetch(`${baseUrl}/results/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch result details");
                }
                const data = await response.json();
                setResult(data);
            } catch (error) {
                console.error("Error fetching result details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchResultDetails();
    }, [id]);

    if (loading) {
        return <h2 className="text-center text-lg font-semibold">Loading...</h2>;
    }

    if (!result) {
        return <h2 className="text-center text-lg font-semibold">কোনো রেজাল্ট পাওয়া যায় নি</h2>;
    }

    return (
        <div className="max-w-[1144px] w-[95%] mx-auto mt-28">
            <h1 className="text-2xl font-bold text-center mb-8">{result.studentClassName} জামাতের ফলাফল</h1>
            <div className="border p-4 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center">{result.studentClassName}</h2>
                <p className="text-gray-600 text-center">{result.studentClassDescription}</p>
                <p className="text-sm text-gray-500 text-center">
                    এড করার তারিখ : {new Date(result.resultCreatedAt).toLocaleString()}
                </p>
                <br />

                {/* Images */}
                {Array.isArray(result.images) && result.images.length > 0 ? (
                    <div className="mt-2">
                        <h3 className="font-medium text-lg"><b>ফলাফলের সিট :</b> </h3>
                        <br />
                        <div className="flex gap-2 overflow-x-auto">
                            {result.images.map((img) => (
                                <a key={img.id} href={img.resultsSheetImg} target="_blank" rel="noopener noreferrer">
                                    <img src={img.resultsSheetImg} alt="Result Sheet" className="h-32 w-32 object-cover border rounded" />
                                </a>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-sm" style={{ color: "red" }}><b>❌ কোনো ফলাফল প্রকাশ করা হয় নি</b></p>
                )}
                {/* Back Button */}
                <div className="mt-4">
                    <Link to="/results" className="bg-blue-600 text-white px-4 py-2 rounded">🔙 ফিরে যান</Link>
                </div>
            </div>
        </div>
    );
};

export default ResultDetails;