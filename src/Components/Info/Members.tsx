import Image from "next/image";
import React from "react";
import Instagram from "../Icon/Instagram";

interface MemberProps {
  name: string;
  Pedi: string;
  src: string;
  instagram: string;
  role: string;
}

interface MembersProps {
  data: MemberProps[];
}

export default function Members({ data }: MembersProps) {
  return (
    <div className="items-center space-y-4 mt-16 mb-10 p-4">
      {data.map((member, index) => {
        return (
          <div
            key={index}
            className="flex items-center max-w-md p-2 border-2 rounded-2xl border-secondary justify-between mx-auto "
          >
            <div>
              <h3 className="text-[18px] text-secondary font-bold mt-4">
                {member.name}
              </h3>
              <p className="text-success text-[14px] leading-relaxed">
                Prodi: {member.Pedi}
              </p>
              <p className="text-success text-[14px] leading-relaxed">
                {member.role}
              </p>
              <a
                href={`https://instagram.com/${member.instagram}`}
                className="flex items-center space-x-2"
              >
                <Instagram
                  fill=""
                  height="30"
                  lineColor=""
                  width="30"
                  className=""
                />
                <p className="font-semibold text-4 text-primary">
                  @{member.instagram}
                </p>
              </a>
            </div>
            <div>
              <Image
                src={member.src}
                alt="Profile Picture"
                width={200}
                height={200}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
