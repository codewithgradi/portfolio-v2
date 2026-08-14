"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuGithub, LuExternalLink, LuSearch, LuLoader } from "react-icons/lu";
import baseUrl from "@/Utils";

interface Project {
  id: number | string;
  title: string;
  problem?: string;
  solution?: string;
  gitHub?: string;
  liveDemo?: string;
  tools: string[];
  updatedAt?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/project`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to load projects.");
        }

        const data: Project[] = await response.json();
        setProjects(data || []);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="text-white w-full max-w-4xl mx-auto font-sans">
      {/* Search Header Bar */}
      <div className="flex bg-neutral-800 p-3 justify-between rounded-t-xl border-b border-neutral-700">
        <div className="bg-neutral-900 rounded-lg px-4 py-1.5 w-full border border-neutral-700/50">
          <div className="flex items-center justify-center space-x-3 text-sm text-neutral-400">
            <LuSearch className="w-4 h-4 text-neutral-500" />
            <p className="font-mono text-xs sm:text-sm">
              gradipuata.vercel.app/projects
            </p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="p-6 bg-neutral-900/90 rounded-b-xl border border-neutral-800">
        <h1 className="opacity-70 font-bold text-xs tracking-wider text-neutral-300 mb-6">
          FEATURED PROJECTS
        </h1>

        {loading ? (
          <div className="flex items-center justify-center p-12 space-x-3 text-neutral-400">
            <LuLoader className="animate-spin w-5 h-5 text-sky-500" />
            <span className="text-sm font-medium">Loading projects...</span>
          </div>
        ) : error ? (
          <div className="p-4 my-2 text-sm text-rose-400 bg-rose-950/30 border border-rose-900/50 rounded-xl">
            {error}
          </div>
        ) : projects.length === 0 ? (
          <p className="text-sm opacity-50 my-4 text-center py-8">
            No projects found.
          </p>
        ) : (
          /* Single-column vertical list: displays projects one after the other */
          <div className="flex flex-col space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-neutral-800 bg-neutral-950 rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-colors w-full"
              >
                <div>
                  {/* Title & GitHub Link */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-sky-400 font-bold text-xl">
                      {project.title}
                    </h2>
                    {project.gitHub && (
                      <Link
                        href={project.gitHub}
                        target="_blank"
                        className="text-neutral-400 hover:text-white transition-colors text-xl p-1"
                      >
                        <LuGithub />
                      </Link>
                    )}
                  </div>

                  {/* Tech Tools Tags */}
                  {project.tools && project.tools.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 my-3">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="border border-neutral-800 rounded-full px-2.5 py-0.5 text-xs bg-neutral-900 text-sky-300/90 font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Problem & Solution */}
                  <div className="space-y-2 text-sm text-neutral-300 mt-3">
                    {project.problem && (
                      <p>
                        <strong className="text-neutral-400 font-semibold">
                          Problem:
                        </strong>{" "}
                        {project.problem}
                      </p>
                    )}
                    {project.solution && (
                      <p>
                        <strong className="text-neutral-400 font-semibold">
                          Solution:
                        </strong>{" "}
                        {project.solution}
                      </p>
                    )}
                  </div>
                </div>

                {/* Live Demo Link */}
                {project.liveDemo && (
                  <div className="pt-3 border-t border-neutral-900">
                    <Link
                      target="_blank"
                      href={project.liveDemo}
                      className="inline-block"
                    >
                      <motion.div
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                        className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold text-sm"
                      >
                        <span>Live Demo</span>
                        <LuExternalLink className="w-3.5 h-3.5" />
                      </motion.div>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
