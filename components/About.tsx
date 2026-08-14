"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import {
  LuGlobe,
  LuGithub,
  LuLinkedin,
  LuTwitter,
  LuMail,
  LuLoader,
  LuUser,
} from "react-icons/lu";
import baseUrl from "@/Utils";

interface SocialLink {
  link: string;
  name?: string;
  platform?: string;
}

interface PersonalData {
  firstName: string;
  lastName: string;
  role: string;
  location: string;
  image?: string;
  bio?: string;
  hobbies?: string[];
  skills?: string[];
  programmingLanguages?: string[];
  techStack?: string[];
  socials?: SocialLink[];
}

const About = () => {
  const [data, setData] = useState<PersonalData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPersonalData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/personal/1`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to load profile details.");
        }

        const result: PersonalData = await response.json();
        setData(result);
      } catch (err: any) {
        setError(
          err.message || "An error occurred while fetching profile info.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPersonalData();
  }, []);

  const getSocialIcon = (name?: string, link?: string) => {
    const strToTest = `${name || ""} ${link || ""}`.toLowerCase();

    if (strToTest.includes("github"))
      return <LuGithub className="w-4 h-4 text-white" />;
    if (strToTest.includes("linkedin"))
      return <LuLinkedin className="w-4 h-4 text-blue-400" />;
    if (strToTest.includes("twitter") || strToTest.includes("x.com"))
      return <LuTwitter className="w-4 h-4 text-sky-400" />;
    if (strToTest.includes("email") || strToTest.includes("mail"))
      return <LuMail className="w-4 h-4 text-rose-400" />;

    return <LuGlobe className="w-4 h-4 text-neutral-400" />;
  };

  const initials = data
    ? `${data.firstName?.[0] || ""}${data.lastName?.[0] || ""}`.toUpperCase()
    : "";

  return (
    <section className="lg:flex justify-between w-full max-w-6xl mx-auto overflow-x-hidden  border border-neutral-800 rounded-xl">
      {/* Sidebar / Navigation */}
      <div className="p-4 space-y-3 border-b lg:border-b-0 lg:border-r border-neutral-800 min-w-[200px]">
        <h1 className="text-xs text-neutral-400 font-semibold tracking-wider">
          FAVOURITES
        </h1>
        <div className="space-y-2 sm:flex sm:space-y-0 sm:space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
          <div className="flex items-center space-x-2 rounded-md px-3 py-1.5 font-bold bg-blue-950/80 border border-blue-900/50 text-blue-400 text-sm">
            <MdPerson className="w-4 h-4" />
            <p className="whitespace-nowrap">About me</p>
          </div>
          <div className="flex items-center space-x-2 text-neutral-300 rounded-md px-3 py-1.5 text-sm hover:cursor-pointer hover:bg-neutral-800 hover:text-white transition-colors">
            <FaShoppingBag className="w-3.5 h-3.5" />
            <p>Documents</p>
          </div>
          <div className="flex items-center space-x-2 text-neutral-300 rounded-md px-3 py-1.5 text-sm hover:cursor-pointer hover:bg-neutral-800 hover:text-white transition-colors">
            <FaSearch className="w-3.5 h-3.5" />
            <p>Recent</p>
          </div>
        </div>
      </div>

      {/* Dynamic Profile Section */}
      <div className="text-white p-6 flex-1 space-y-6">
        {loading ? (
          <div className="flex items-center justify-center p-12 space-x-3 text-neutral-400">
            <LuLoader className="animate-spin w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium">
              Loading profile from API...
            </span>
          </div>
        ) : error || !data ? (
          <div className="p-4 text-center text-rose-400 bg-rose-950/30 border border-rose-900/50 rounded-xl text-sm">
            {error || "Unable to load profile info."}
          </div>
        ) : (
          <>
            {/* Profile Avatar & Header Info */}
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              {data.image && !imageError ? (
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-neutral-700 shadow-lg">
                  <img
                    src={data.image}
                    alt={`${data.firstName} ${data.lastName}`}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center text-blue-400 font-semibold text-2xl shadow-lg">
                  {initials || (
                    <LuUser className="w-10 h-10 text-neutral-400" />
                  )}
                </div>
              )}

              <h1 className="text-3xl font-bold opacity-90">
                {`${data.firstName} ${data.lastName}`}
              </h1>
              <p className="text-blue-400 font-medium text-sm">{data.role}</p>
              <p className="opacity-60 text-xs text-neutral-400">
                {data.location}
              </p>
            </div>

            {/* Overview / Bio */}
            {data.bio && (
              <div className="p-3 bg-neutral-900/50 border border-neutral-800/80 rounded-xl">
                <h2 className="text-xs font-bold text-neutral-400 tracking-wider mb-2 border-b border-neutral-800 pb-1">
                  OVERVIEW
                </h2>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {data.bio}
                </p>
              </div>
            )}

            {/* Hobbies */}
            {data.hobbies && data.hobbies.length > 0 && (
              <div className="p-3 bg-neutral-900/50 border border-neutral-800/80 rounded-xl">
                <h2 className="text-xs font-bold text-neutral-400 tracking-wider mb-2 border-b border-neutral-800 pb-1">
                  HOBBIES & INTERESTS
                </h2>
                <div className="flex flex-wrap gap-2 mt-1">
                  {data.hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full border border-neutral-700"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Social Links */}
            {data.socials && data.socials.length > 0 && (
              <div className="p-3 bg-neutral-900/50 border border-neutral-800/80 rounded-xl">
                <h2 className="text-xs font-bold text-neutral-400 tracking-wider mb-3 border-b border-neutral-800 pb-1">
                  CONNECT
                </h2>
                <div className="flex flex-wrap gap-3">
                  {data.socials.map((social, idx) => (
                    <Link
                      key={idx}
                      href={social.link || "#"}
                      target="_blank"
                      className="flex items-center space-x-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs py-2 px-3.5 rounded-lg transition-colors border border-neutral-700"
                    >
                      {getSocialIcon(
                        social.name || social.platform,
                        social.link,
                      )}
                      <span>{social.name || social.platform || "Link"}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default About;
