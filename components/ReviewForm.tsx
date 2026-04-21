"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Star, X, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const services = [
  "Bridal Makeup",
  "Party Makeup",
  "Editorial Makeup",
  "Natural/Everyday Makeup",
  "Special Effects Makeup",
  "Airbrush Makeup",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  service: string;
  reviewText: string;
}

interface Props {
  onSuccess: () => void;
  onCancel: () => void;
}

export default function ReviewForm({ onSuccess, onCancel }: Props) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (rating === 0) {
      toast.error("Please select a rating.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, rating }),
      });

      const result = await res.json();

      if (result.success) {
        reset();
        setRating(0);
        onSuccess();
      } else {
        const errorMsg = result.errors?.[0]?.msg || result.message || "Something went wrong.";
        toast.error(errorMsg);
      }
    } catch {
      toast.error("Could not submit review. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors";

  return (
    <div className="bg-white/5 border border-white/10 rounded-sm p-8 text-left">
      <div className="flex items-center justify-between mb-6">
        <h3
          className="text-2xl font-light text-white"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Share Your Experience
        </h3>
        <button onClick={onCancel} className="text-gray-500 hover:text-white transition-colors">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Star Rating */}
        <div>
          <label className="block text-xs tracking-widest uppercase text-gray-400 mb-3">
            Your Rating *
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  size={32}
                  className={
                    star <= (hoverRating || rating)
                      ? "text-[#c9a84c] fill-[#c9a84c]"
                      : "text-gray-600"
                  }
                />
              </button>
            ))}
          </div>
        </div>

        {/* Name & Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <input
              {...register("name", { required: "Name is required", maxLength: 100 })}
              placeholder="Your Name *"
              className={inputClass}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Valid email required" },
              })}
              type="email"
              placeholder="Your Email *"
              className={inputClass}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Service */}
        <div>
          <select
            {...register("service", { required: "Please select a service" })}
            className={`${inputClass} cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>
              Service You Availed *
            </option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-[#1a1a1a]">
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>
          )}
        </div>

        {/* Review Text */}
        <div>
          <textarea
            {...register("reviewText", {
              required: "Review is required",
              minLength: { value: 20, message: "Review must be at least 20 characters" },
              maxLength: { value: 1000, message: "Review cannot exceed 1000 characters" },
            })}
            rows={4}
            placeholder="Share your experience (minimum 20 characters) *"
            className={inputClass}
          />
          {errors.reviewText && (
            <p className="text-red-400 text-xs mt-1">{errors.reviewText.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-xs tracking-widest uppercase font-medium text-[#1a1a1a] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97e, #a07830)" }}
          >
            {submitting ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Submitting…
              </>
            ) : (
              "Submit Review"
            )}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-4 text-xs tracking-widest uppercase border border-white/20 text-gray-400 hover:border-white/40 hover:text-white transition-all"
          >
            Cancel
          </button>
        </div>

        <p className="text-gray-600 text-xs">
          Reviews are moderated and will appear after approval. Your email will not be displayed.
        </p>
      </form>
    </div>
  );
}
