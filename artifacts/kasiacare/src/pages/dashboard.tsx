import { useUser } from "@clerk/react";
import { Link } from "wouter";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-[#e8e0d4] flex flex-col items-center justify-center px-6 py-16">
      <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(26,58,92,0.1)] p-10 max-w-md w-full text-center">
        <div className="text-4xl mb-4">🌸</div>
        <h1 className="font-serif text-2xl font-semibold text-[#102940] mb-2">
          Welcome, {user?.firstName ?? "there"}!
        </h1>
        <p className="text-[#4a3828] text-sm leading-relaxed mb-8">
          Your KasiaCare dashboard is coming soon. You're signed in and ready to go.
        </p>
        <div className="text-xs text-[#8aaac8] mb-6">
          Signed in as <strong>{user?.primaryEmailAddress?.emailAddress}</strong>
        </div>
        <Link
          href="/"
          className="inline-block bg-[#1a3a5c] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#2c6fad] transition-colors"
        >
          ← Back to Website
        </Link>
      </div>
    </div>
  );
}
