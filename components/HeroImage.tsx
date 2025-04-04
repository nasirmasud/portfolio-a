import Image from "next/image";

export default function HeroImage() {
  return (
    <div className='flex items-center p-4'>
      <div className='w-24 h-24 overflow-hidden rounded-full border-4 border-gray-200'>
        <Image
          src='/proPic.jpeg'
          alt='Profile Picture'
          width={96}
          height={96}
          className='object-cover'
        />
      </div>
      <div
        className='relative z-10 bg-white text-black -ml-4 -mt-8 py-1 px-2 rounded-full border-none cursor-pointer text-base flex items-center shadow-md transform rotate-345'
        style={{ transformOrigin: "center center" }}
      >
        nasirMasud <span className='ml-1 text-sm'>👋</span>
      </div>
    </div>
  );
}

// className='w-[100px] '
