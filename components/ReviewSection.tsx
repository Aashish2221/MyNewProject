"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import toast from "react-hot-toast";
import ReviewForm from "./ReviewForm";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface Review {
  _id: string;
  name: string;
  rating: number;
  service: string;
  reviewText: string;
  createdAt: string;
  isFeatured: boolean;
}

interface ReviewStats {
  avgRating: number;
  totalReviews: number;
  fiveStar: number;
  fourStar: number;
  threeStar: number;
  twoStar: number;
  oneStar: number;
}

function StarDisplay({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= rating ? "text-[#c9a84c] fill-[#c9a84c]" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function RatingBar({ label, count, total }: { label: string; count: number; total: number }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-gray-500 w-12 text-right">{label}</span>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: "linear-gradient(90deg, #c9a84c, #e8c97e)" }}
        />
      </div>
      <span className="text-gray-400 w-6 text-right">{count}</span>
    </div>
  );
}

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState<ReviewStats | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fetchReviews = useCallback(async (page = 1) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/reviews?page=${page}&limit=6`);
      const data = await res.json();
      if (data.success) {
        setReviews(data.data);
        setStats(data.stats);
        setTotalPages(data.pagination.totalPages);
        setCurrentPage(page);
      }
    } catch {
      // Backend not connected — show placeholder UI
      setReviews([]);
      setStats(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews(1);
  }, [fetchReviews]);

  const handleReviewSubmitted = () => {
    setShowForm(false);
    toast.success("Thank you! Your review will appear after approval.");
    fetchReviews(1);
  };

  const avgFormatted = stats ? stats.avgRating.toFixed(1) : "4.9";

  return (
    <section
      id="reviews"
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#c9a84c] mb-3">
            Client Love
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-white mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            What My Clients Say
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto"
        >
          {/* Big number */}
          <div className="flex flex-col items-center justify-center bg-white/5 border border-[#c9a84c]/20 rounded-sm p-8">
            <span
              className="text-7xl font-bold leading-none mb-2"
              style={{
                fontFamily: "var(--font-cormorant)",
                background: "linear-gradient(135deg, #c9a84c, #e8c97e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {avgFormatted}
            </span>
            <StarDisplay rating={5} size={20} />
            <p className="text-gray-400 text-sm mt-2">
              {stats ? stats.totalReviews : "250+"}+ verified reviews
            </p>
          </div>

          {/* Bar chart */}
          <div className="flex flex-col justify-center gap-3 bg-white/5 border border-white/10 rounded-sm p-8">
            {stats && (
              <>
                <RatingBar label="5 ★" count={stats.fiveStar} total={stats.totalReviews} />
                <RatingBar label="4 ★" count={stats.fourStar} total={stats.totalReviews} />
                <RatingBar label="3 ★" count={stats.threeStar} total={stats.totalReviews} />
                <RatingBar label="2 ★" count={stats.twoStar} total={stats.totalReviews} />
                <RatingBar label="1 ★" count={stats.oneStar} total={stats.totalReviews} />
              </>
            )}
            {!stats && (
              <div className="text-gray-500 text-sm text-center py-4">
                Connect your MongoDB to see live stats
              </div>
            )}
          </div>
        </motion.div>

        {/* Review Cards */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-sm p-6 animate-pulse h-48"
              />
            ))}
          </div>
        ) : reviews.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {reviews.map((review, i) => (
                <motion.div
                  key={review._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-6 rounded-sm border transition-all hover:-translate-y-1 ${
                    review.isFeatured
                      ? "border-[#c9a84c]/40 bg-[#c9a84c]/5"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <Quote size={24} className="text-[#c9a84c]/30 mb-4" />
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                    {review.reviewText}
                  </p>
                  <StarDisplay rating={review.rating} />
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium text-sm">{review.name}</p>
                      <p className="text-[#c9a84c] text-xs tracking-wide">{review.service}</p>
                    </div>
                    <p className="text-gray-600 text-xs">
                      {new Date(review.createdAt).toLocaleDateString("en-IN", {
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mb-10">
                <button
                  onClick={() => fetchReviews(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 border border-white/20 text-white/60 hover:border-[#c9a84c] hover:text-[#c9a84c] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-gray-400 text-sm">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() => fetchReviews(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-white/20 text-white/60 hover:border-[#c9a84c] hover:text-[#c9a84c] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg mb-2">No reviews yet.</p>
            <p className="text-sm">Be the first to share your experience!</p>
          </div>
        )}

        {/* Write a review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="px-10 py-4 text-sm tracking-widest uppercase text-[#1a1a1a] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a84c]/30 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)" }}
            >
              Write a Review
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <ReviewForm
                onSuccess={handleReviewSubmitted}
                onCancel={() => setShowForm(false)}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
