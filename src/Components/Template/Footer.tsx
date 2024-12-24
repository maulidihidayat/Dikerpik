import Image from "next/image";
import React from "react";

interface footerProps {
  className: string;
}

const Footer: React.FC<footerProps> = ({className}) => {
  return (
    <footer className="flex  items-center justify-center bg-background p-4">
      <div className="mb-6">
        {/* <Image src={image.gambar3} alt="Logo" width={150} height={150} /> */}
      </div>

      <div className="">
        <h2 className="text-[28px] text-secondary font-bold mt-4 text-success">
          Keripik Pepaya
        </h2>
        <p className="text-success text-[14px] leading-relaxed mt-2">
          Himpunan Mahasiswa Pendidikan Informatika Universitas Hamzanwadi masa bakti 2024-2025 
        </p>
        <div className="flex space-x-4 mt-4">
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
      </div>

      <div className="footer-bottom text-success mt-8 ml-16">
        <p className="text-primary text-sm  underline cursor-pointer">Syarat & ketentuan</p>
        <p className="text-primary text-sm  underline cursor-pointer">Kebijakan Privacy</p>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} pendidikan informatika univeristas hamzanwadi
        </p>
      </div>
    </footer>
  );
};

export default Footer;