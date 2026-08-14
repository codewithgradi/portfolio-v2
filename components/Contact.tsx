import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  LuMapPin,
  LuGithub,
  LuLinkedin,
  LuGlobe,
  LuLoader,
  LuPhone,
  LuMail,
  LuTwitter,
  LuUser,
} from "react-icons/lu";
import baseUrl from "@/Utils";

interface SocialLink {
  link: string;
  platform: string;
}

interface ContactData {
  firstName: string;
  lastName: string;
  role: string;
  location: string;
  image?: string;
  socials: SocialLink[];
}

const Contact = () => {
  const [data, setData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState<boolean>(false);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/personal/1`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to load contact information");
        }

        const result = await response.json();

        setData({
          firstName: result.firstName,
          lastName: result.lastName,
          role: result.role,
          location: result.location,
          image: result.image,
          socials: result.socials || [],
        });
      } catch (err: any) {
        setError(err.message || "Error fetching contact details");
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  const getSocialIcon = (platform?: string, link?: string) => {
    const strToTest = `${platform || ""} ${link || ""}`.toLowerCase();

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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-3 text-neutral-400">
        <LuLoader className="animate-spin w-6 h-6 text-blue-500" />
        <p className="text-sm font-medium">Loading contact details...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-4 text-center text-rose-400 bg-rose-950/30 border border-rose-900/50 rounded-xl">
        <p className="text-sm font-medium">
          {error || "Unable to load contact info."}
        </p>
      </div>
    );
  }

  // Get initials for fallback (e.g., "GP")
  const initials =
    `${data.firstName?.[0] || ""}${data.lastName?.[0] || ""}`.toUpperCase();

  return (
    <div className="text-white max-w-xl mx-auto space-y-5 p-4">
      {/* Profile Header */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-4">
        {data.image && !imageError ? (
          <img
            src={data.image}
            alt={`${data.firstName} ${data.lastName}`}
            onError={() => setImageError(true)}
            className="w-14 h-14 rounded-full object-cover border border-neutral-700 shrink-0"
          />
        ) : (
          /* Default Avatar Fallback */
          <div className="w-14 h-14 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-blue-400 font-semibold text-lg shrink-0">
            {initials || <LuUser className="w-6 h-6 text-neutral-400" />}
          </div>
        )}
        <div>
          <h2 className="font-bold text-white text-lg">{`${data.firstName} ${data.lastName}`}</h2>
          <p className="text-xs text-blue-400 font-medium">{data.role}</p>
        </div>
      </div>

      {/* Direct Contact Info */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 space-y-3">
        <div className="flex justify-between items-center text-sm border-b border-neutral-800 pb-2">
          <span className="flex items-center gap-2 text-neutral-400">
            <LuPhone className="w-4 h-4 text-blue-400" /> Phone:
          </span>
          <a
            href="tel:+27680488872"
            className="font-semibold text-neutral-200 hover:text-blue-400 transition-colors"
          >
            +27 680 488 872
          </a>
        </div>

        <div className="flex justify-between items-center text-sm border-b border-neutral-800 pb-2">
          <span className="flex items-center gap-2 text-neutral-400">
            <LuMail className="w-4 h-4 text-blue-400" /> Email:
          </span>
          <a
            href="mailto:gradipuata@mail.com"
            className="font-semibold text-neutral-200 hover:text-blue-400 transition-colors"
          >
            gradipuata@mail.com
          </a>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="flex items-center gap-2 text-neutral-400">
            <LuMapPin className="w-4 h-4 text-neutral-500" /> Location:
          </span>
          <span className="font-semibold text-neutral-200">
            {data.location}
          </span>
        </div>
      </div>

      {/* Social Links */}
      {data.socials.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.socials.map((social, idx) => (
            <Link
              key={idx}
              href={social.link || "#"}
              target="_blank"
              className="flex items-center justify-center space-x-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm py-2.5 px-4 rounded-lg transition-colors border border-neutral-700"
            >
              {getSocialIcon(social.platform, social.link)}
              <span>{social.platform || "Link"}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contact;
