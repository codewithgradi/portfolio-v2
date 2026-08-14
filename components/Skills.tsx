"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuLoader } from "react-icons/lu";
import baseUrl from "@/Utils";

interface PersonalData {
  firstName?: string;
  lastName?: string;
  role?: string;
  skills?: string[];
  programmingLanguages?: string[];
  techStack?: string[];
}

export default function Skills() {
  const [data, setData] = useState<PersonalData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/personal/1`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to load skills details.");
        }

        const result: PersonalData = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching skills.");
      } finally {
        setLoading(false);
      }
    };

    fetchSkillsData();
  }, []);

  const username = data?.firstName?.toLowerCase() || "gradi";

  return (
    <section className="text-white opacity-90 font-mono p-4  rounded-xl border border-neutral-800">
      {/* Command Header */}
      <p className="mb-4">
        <span className="text-sky-400">{username}@macbook</span>
        <span className="text-green-400">:~$ list_skills.py</span>
      </p>

      <div className="px-4">
        {loading ? (
          <div className="flex items-center space-x-2 py-4 text-green-400">
            <LuLoader className="animate-spin w-4 h-4" />
            <span className="text-sm">Fetching skill sets...</span>
          </div>
        ) : error || !data ? (
          <p className="text-rose-400 text-sm py-2">
            # Error: {error || "Unable to parse skill list."}
          </p>
        ) : (
          <>
            {/* Programming Languages */}
            {data.programmingLanguages &&
              data.programmingLanguages.length > 0 && (
                <div className="py-2">
                  <h2 className="underline decoration-2 decoration-green-500 font-bold text-neutral-200">
                    Programming Languages:
                  </h2>
                  <ul className="flex flex-wrap gap-x-6 gap-y-1 list-disc pl-5 text-green-400 mt-1">
                    {data.programmingLanguages.map((lang, index) => (
                      <li key={index}>{lang}</li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Tech Stack */}
            {data.techStack && data.techStack.length > 0 && (
              <div className="py-2">
                <h2 className="underline decoration-2 decoration-green-500 font-bold text-neutral-200">
                  Tech Stack & Frameworks:
                </h2>
                <ul className="flex flex-wrap gap-x-6 gap-y-1 list-disc pl-5 text-green-400 mt-1">
                  {data.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* General Skills */}
            {data.skills && data.skills.length > 0 && (
              <div className="py-2">
                <h2 className="underline decoration-2 decoration-green-500 font-bold text-neutral-200">
                  Core Engineering Skills:
                </h2>
                <ul className="flex flex-wrap gap-x-6 gap-y-1 list-disc pl-5 text-green-400 mt-1">
                  {data.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>

      {/* Terminal Cursor Line */}
      <motion.div
        className="mt-4 flex items-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <span className="text-sky-400">{username}@macbook</span>
        <span className="text-green-400">:~$</span>
        <span className="mx-2 bg-neutral-400 w-2.5 h-5 inline-block"></span>
      </motion.div>
    </section>
  );
}
