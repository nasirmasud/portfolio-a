import { useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCopy,
  AiOutlineDownload,
} from "react-icons/ai";

export default function NavContact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("nasir.masud@ymail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCV = () => {
    // Replace with your actual CV download logic
    const cvUrl = "/cv.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <div className='ml-8 flex items-center gap-2'>
      {/* Email Section */}
      <div className='flex items-center gap-2 border border-gray-600/30 rounded-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700/10 transition-colors'>
        <span className='text-sm font-medium text-gray-700 dark:text-gray-300 truncate max-w-[180px]'>
          nasir.masud@ymail.com
        </span>
        <button
          onClick={handleCopy}
          className='p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
          aria-label='Copy email'
        >
          {copied ? (
            <AiOutlineCheckCircle className='h-4 w-4 text-green-500' />
          ) : (
            <AiOutlineCopy className='h-4 w-4 text-gray-500 dark:text-gray-400' />
          )}
        </button>
      </div>

      {/* CV Button */}
      <div className='flex items-center gap-2 border border-gray-600/30 rounded-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700/10 transition-colors'>
        <span className='text-sm font-medium'>CV</span>
        <button
          onClick={handleDownloadCV}
          className='p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
        >
          <AiOutlineDownload className='h-4 w-4 text-gray-500 dark:text-gray-400' />
        </button>
      </div>
    </div>
  );
}
