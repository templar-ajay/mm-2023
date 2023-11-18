import Link from "next/link";

const Error = ({ statusCode, errorMessage, goto }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 items-center justify-center">
      <h1 className="text-6xl font-extrabold text-white mb-4">
        {statusCode || 500}
      </h1>
      <p className="text-2xl text-gray-500 mb-8">
        {errorMessage || "Internal Server Error"}
      </p>
      {goto && (
        <Link rel="noopener noreferrer" href={goto}>
          <div className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Go Home
          </div>
        </Link>
      )}
    </div>
  );
};

export default Error;
