// components/Preview.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import { UserData } from "@/lib/types";
import { generateMarkdown } from "@/lib/utils";

interface PreviewProps {
  userData: UserData;
}

export default function Preview({ userData }: PreviewProps) {
  const markdown = generateMarkdown(userData);

  return (
    <div className="prose prose-invert max-w-none">
      <div className="bg-gray-900/50 p-6 rounded-lg overflow-auto min-h-[calc(100vh-300px)]">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold text-white mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-medium text-white mt-6 mb-3">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-gray-300 mb-4">{children}</p>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 no-underline"
              >
                {children}
              </a>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside text-gray-300 mb-4">
                {children}
              </ul>
            ),
            li: ({ children }) => <li className="mb-2">{children}</li>,
            img: ({ src, alt }) => (
              <img
                src={src}
                alt={alt}
                className="rounded-lg max-w-full h-auto my-4"
              />
            ),
            code: ({ children }) => (
              <code className="bg-gray-800 text-purple-300 px-1 py-0.5 rounded text-sm">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
                {children}
              </pre>
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
