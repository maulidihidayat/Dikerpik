import Image from "next/image";
import React from "react";

interface footerProps {
  className: string;
}

const Footer: React.FC<footerProps> = ({ className }) => {
  return (
    <footer className={`flex flex-col lg:flex-row-reverse items-center justify-center bg-background p-4 w-full ${className}`}>
      <div className="mb-4 hidden lg:flex lg:w-56 mx-auto mt-10 lg:mt-0">
        <Image
          src={"/image/logoPAPAYA.png"}
          alt={"logo"}
          width={630}
          height={630}
          objectFit="cover"
          className="rounded-3xl transition duration-300 ease-in-out"
        />
      </div>

      <div className="text-baseline lg:text-left lg:ml-4">
        <h2 className="text-2xl md:text-3xl text-secondary font-bold mt-4 text-success">
          Keripik Pepaya
        </h2>
        <p className="text-success text-sm md:text-base leading-relaxed mt-2 break-words">
          KKN Bina Desa, Desa Tebaban Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Hamzanwadi
        </p>
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-success hover:underline hover:text-primary"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-success hover:underline hover:text-primary"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-success hover:underline hover:text-primary"
          >
            Instagram
          </a>
        </div>
        <div className="mt-6">
          <p className="text-primary text-sm underline cursor-pointer">Syarat & ketentuan</p>
          <p className="text-primary text-sm underline cursor-pointer">Kebijakan Privacy</p>
        </div>
        <div className="footer-bottom text-success mt-8 text-center lg:text-left">
          <p className="mt-4 text-sm">
            &copy; {new Date().getFullYear()} KKN Bina Desa Tebaban Universitas Hamzanwadi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;