"use client";
import { builder } from "@builder.io/sdk";

// Replace with your Public API Key.
builder.init("2b5ffc858d74425485135b88d2fc307a");

export default async function Home() {
  const links = await builder.getAll("nav-link", { prerender: false });
  console.log("Rendering nav links:", links);
  return (
    <>
      <header>
        <nav>
          {content.map((link, index) => (
            <a key={index} href={link.data.url}>
              {link.data.label}
            </a>
          ))}
        </nav>
      </header>
      {/* <RestOfYourPage /> */}
    </>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { builder } from "@builder.io/sdk";

// // Replace with your Public API Key.
// builder.init("2b5ffc858d74425485135b88d2fc307a");

// interface NavLink {
//   data: {
//     label: string;
//     url: string;
//   };
// }

// export default function Home() {
//   const [links, setLinks] = useState<NavLink[]>([]);

//   useEffect(() => {
//     const fetchNavLinks = async (): Promise<NavLink[]> => {
//       try {
//         const response = await builder.getAll("nav-link", {
//           prerender: false,
//         });
//         const links = response.results || [];
//         return links as NavLink[];
//       } catch (error) {
//         console.error("Error fetching nav links:", error);
//         return [];
//       }
//     };

//     fetchNavLinks().then((data) => {
//       console.log("Fetched nav links:", data); // Add this line
//       setLinks(data);
//     });
//   }, []);

//   const renderNavLinks = (links: NavLink[]) => {
//     console.log("Rendering nav links:", links);
//     return links.map((link, index) => (
//       <a key={index} href={link.data.url}>
//         {link.data.label}
//       </a>
//     ));
//   };

//   return (
//     <>
//       <header>
//         <nav>{renderNavLinks(links)}</nav>
//       </header>
//     </>
//   );
// }
