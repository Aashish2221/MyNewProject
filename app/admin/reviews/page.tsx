"use client";

import { useState, useEffect, useCallback } from "react";
import { CheckCircle, XCircle, Star, Trash2, Award, Loader2, LogOut, RefreshCw } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface Review {
  _id: string;
  name: string;
  email: string;
  rating: number;
  service: string;
  reviewText: string;
  createdAt: string;
  isApproved: boolean;
  isFeatured: boolean;
}

function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          className={s <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
        />
      ))}
    </div>
  );
}

export default function AdminReviewsPage() {
  const [apiKey, setApiKey] = useState("");
  const [keyInput, setKeyInput] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionId, setActionId] = useState<string | null>(null);
  const [error, setError] = useState("");

  const headers = { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` };

  const fetchPending = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/reviews/pending`, { headers: { Authorization: `Bearer ${apiKey}` } });
      if (res.status === 401 || res.status === 403) { setError("Invalid API key."); setApiKey(""); return; }
      const data = await res.json();
      setReviews(data.data || data || []);
    } catch {
      setError("Could not connect to backend.");
    } finally {
      setLoading(false);
    }
  }, [apiKey]);

  useEffect(() => {
    if (apiKey) fetchPending();
  }, [apiKey, fetchPending]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyInput.trim()) return;
    setApiKey(keyInput.trim());
  };

  const doAction = async (id: string, action: "approve" | "reject" | "feature" | "delete") => {
    setActionId(id);
    try {
      const url = `${API_URL}/api/reviews/${id}${action === "delete" ? "" : `/${action}`}`;
      const method = action === "delete" ? "DELETE" : "PATCH";
      await fetch(url, { method, headers });
      setReviews((prev) => prev.filter((r) => r._id !== id));
    } catch {
      setError("Action failed. Try again.");
    } finally {
      setActionId(null);
    }
  };

  // Login screen
  if (!apiKey) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-2">Admin Access</p>
            <h1 className="text-3xl font-light text-white" style={{ fontFamily: "var(--font-cormorant)" }}>
              Review Dashboard
            </h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="Enter Admin API Key"
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
              autoFocus
            />
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 text-sm tracking-widest uppercase font-medium text-[#1a1a1a] transition-all"
              style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-[#0d0d0d] px-4 py-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-1">Admin Panel</p>
            <h1 className="text-3xl font-light text-white" style={{ fontFamily: "var(--font-cormorant)" }}>
              Pending Reviews
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchPending}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase border border-white/20 text-gray-400 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all disabled:opacity-50"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
            <button
              onClick={() => setApiKey("")}
              className="flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase border border-red-500/30 text-red-400 hover:border-red-500 transition-all"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Stats bar */}
        <div className="mb-6 p-4 border border-white/10 bg-white/5 text-sm text-gray-400">
          {loading ? "Loading reviews..." : `${reviews.length} review${reviews.length !== 1 ? "s" : ""} pending approval`}
        </div>

        {/* Review cards */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={32} className="text-[#c9a84c] animate-spin" />
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <CheckCircle size={40} className="mx-auto mb-4 text-green-500/50" />
            <p className="text-lg text-white font-light">All caught up!</p>
            <p className="text-sm mt-1">No pending reviews at the moment.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="border border-white/10 bg-white/5 p-6 rounded-sm"
              >
                {/* Review header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-white font-medium">{review.name}</p>
                      <StarDisplay rating={review.rating} />
                    </div>
                    <p className="text-[#c9a84c] text-xs tracking-wide">{review.service}</p>
                    <p className="text-gray-600 text-xs mt-0.5">{review.email}</p>
                    <p className="text-gray-600 text-xs">
                      {new Date(review.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric", month: "short", year: "numeric",
                        hour: "2-digit", minute: "2-digit",
                      })}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <button
                      onClick={() => doAction(review._id, "approve")}
                      disabled={actionId === review._id}
                      className="flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider uppercase bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 transition-all disabled:opacity-50"
                    >
                      {actionId === review._id ? <Loader2 size={12} className="animate-spin" /> : <CheckCircle size={14} />}
                      Approve
                    </button>
                    <button
                      onClick={() => doAction(review._id, "feature")}
                      disabled={actionId === review._id}
                      className="flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider uppercase bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/30 transition-all disabled:opacity-50"
                    >
                      <Award size={14} />
                      Feature
                    </button>
                    <button
                      onClick={() => doAction(review._id, "reject")}
                      disabled={actionId === review._id}
                      className="flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider uppercase bg-orange-500/20 border border-orange-500/40 text-orange-400 hover:bg-orange-500/30 transition-all disabled:opacity-50"
                    >
                      <XCircle size={14} />
                      Reject
                    </button>
                    <button
                      onClick={() => { if (confirm("Permanently delete this review?")) doAction(review._id, "delete"); }}
                      disabled={actionId === review._id}
                      className="flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider uppercase bg-red-500/20 border border-red-500/40 text-red-400 hover:bg-red-500/30 transition-all disabled:opacity-50"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                </div>

                {/* Review text */}
                <p className="text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                  &ldquo;{review.reviewText}&rdquo;
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
