import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-6xl font-bold mb-4">
          404
        </h1>

        <p className="text-muted mb-8">
          Page not found
        </p>

        <Link
          href="/"
          className="btn-primary"
        >
          Back Home
        </Link>

      </div>
    </div>
  );
}