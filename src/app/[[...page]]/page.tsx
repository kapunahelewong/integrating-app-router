// For PAGES and SECTIONS, goes in src/app/[[...page]/page.tsx]
// For SECTIONS, just change the model to "announcement-bar"
import { builder } from "@builder.io/sdk";
import Head from "next/head";
import { RenderBuilderContent } from "@/components/builder";

// Replace with your Public API Key
// For pages, and sections this must be here or you'll get an API key null error.
builder.init("2b5ffc858d74425485135b88d2fc307a");

// Define the expected shape of the props
// object passed to the Page function
interface PageProps {
  params: {
    page: string[];
  };
}

// Async function called Page takes a single
// argument called props of type PageProps
export default async function Page(props: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      // Set prerender to false to prevent infinite rendering loops
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      <Head>
        <title>{content?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} />
    </>
  );
}

// SECTION - this returns a 404 with a generated app

// import React from "react";
// import { builder } from "@builder.io/sdk";
// import Head from "next/head";
// import { RenderBuilderContent } from "@/components/builder";

// // Replace with your Public API Key
// builder.init("2b5ffc858d74425485135b88d2fc307a");

// interface PageProps {
//   params: {
//     page: string[];
//   };
// }

// export default async function Page(props: PageProps) {
//   const content = await builder
//     .get("announcement-bar", {
//       prerender: false,
//     })
//     .toPromise();

//   return (
//     <>
//       <Head>
//         <title>{content?.data.title}</title>
//       </Head>
//       {/* Render the Builder page */}
//       <RenderBuilderContent content={content} />
//     </>
//   );
// }

// NAV LINK

// For links, goes in src/app/[[...page]/page.tsx]. Comment out the above code.
// "use client";
// import Home from "../links/page";

// export default function HomePage() {
//   return <Home />;
// }
