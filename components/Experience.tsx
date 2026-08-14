"use client";

import React, { useEffect, useState } from "react";
import { FaCertificate } from "react-icons/fa";
import { LuLoader } from "react-icons/lu";
import baseUrl from "@/Utils";

interface ExperienceItem {
  id?: number | string;
  fromYear: number;
  toYear?: number;
  company: string;
  role: string;
  currentlyHere: boolean;
  description?: string;
}

export default function Experience() {
  const [experienceData, setExperienceData] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Certifications list retained as static
  const certifications = [
    { id: 1, name: "IBM Web Development Fundamentals", issuedBy: "IBM" },
    { id: 2, name: "Full Stack Web Development", issuedBy: "FNB APP ACADEMY" },
    { id: 4, name: "Fundamental C# With Microsoft", issuedBy: "FREECODECAMP" },
   
  ];

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/experience`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to load work experience details.");
        }

        const data: ExperienceItem[] = await response.json();
        setExperienceData(data || []);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching experience.");
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div className="bg-white text-neutral-900 rounded-xl p-4">
      {/* Header */}
      <div className="flex justify-between p-2 font-bold items-center border-b border-neutral-100 pb-3">
        <h1 className="font-bold opacity-70 text-2xl">Work Experience</h1>
        <p className="text-red-500 text-sm font-semibold">Today</p>
      </div>

      {/* Experience Section */}
      <div className="p-3">
        {loading ? (
          <div className="flex items-center justify-center p-6 space-x-2 text-neutral-500">
            <LuLoader className="animate-spin w-5 h-5 text-red-500" />
            <span className="text-sm font-medium">Loading experience...</span>
          </div>
        ) : error ? (
          <div className="p-3 my-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
            {error}
          </div>
        ) : experienceData.length === 0 ? (
          <p className="text-sm opacity-50 my-4">No work experience found.</p>
        ) : (
          experienceData.map((exp, index) => (
            <div
              key={exp.id || index}
              className="px-6 border-l-2 border-l-red-400 my-5"
            >
              <p className="opacity-60 font-bold text-xs tracking-wide">
                {exp.fromYear} - {exp.currentlyHere ? "PRESENT" : exp.toYear}
              </p>
              <h2 className="text-xl font-bold opacity-85 mt-0.5">
                {exp.role}
              </h2>
              <p className="opacity-60 font-medium text-sm">{exp.company}</p>
              {exp.description && (
                <p className="px-3 bg-neutral-100 text-neutral-700 opacity-90 py-2 mt-2 rounded-md text-sm border border-neutral-200">
                  {exp.description}
                </p>
              )}
            </div>
          ))
        )}
      </div>

      {/* Certifications Section */}
      <div className="p-3 text-sm">
        <h2 className="font-bold text-lg opacity-70 border-t py-2 border-t-neutral-200">
          Certifications
        </h2>
        <div>
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex justify-between items-center w-fit space-x-3 my-2 px-1"
            >
              <FaCertificate className="text-yellow-500 shrink-0" />
              <p className="opacity-80 font-medium">
                {cert.name} -{" "}
                <span className="opacity-60">{cert.issuedBy}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
