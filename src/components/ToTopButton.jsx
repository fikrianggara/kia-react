import { ArrowUpIcon } from "@heroicons/react/24/solid"

export const ToTopButton = ({ reference }) => {
  return (
    <a href={reference} className="fixed bottom-10 right-5 bg-white rounded-full p-3 shadow text-blue-400">
      <ArrowUpIcon className="w-4"></ArrowUpIcon>
    </a>
  );
};
