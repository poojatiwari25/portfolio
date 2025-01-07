export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
      <input
        {...props}
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
    );
  }
  