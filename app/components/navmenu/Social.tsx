import Image from "next/image";
import React from "react";

const Social = () => {
  return (
    <div id="social-icons" className="flex flex-row gap-1">
      <a href="https://x.com/JRausell" className="opacity-60 hover:opacity-100">
        <Image
          src="/images/social/x.svg"
          width={20}
          height={20}
          className="h-6 rounded w-6 dark:bg-slate-400"
          alt="X"
        />
      </a>

      <a href="https://x.com/JRausell" className="opacity-60 hover:opacity-100">
        <Image
          src="/images/social/fb.svg"
          width={20}
          height={20}
          className="h-6 rounded w-6 dark:bg-slate-400"
          alt="FaceBook"
        />
      </a>

      <a href="https://x.com/JRausell" className="opacity-60 hover:opacity-100">
        <Image
          src="/images/social/in.svg"
          width={20}
          height={20}
          className="h-6 rounded w-6 dark:bg-slate-400"
          alt="LinkedIn"
        />
      </a>
    </div>
  );
};

export default Social;
