import React from "react";
import ContentLoader, { Facebook } from "react-content-loader";

export const Loader = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <ContentLoader
        uniqueKey="products1"
        speed={2}
        width={400}
        height={90}
        viewBox="0 0 400 90"
        backgroundColor="#64748B"
        foregroundColor="#ecebeb"
      >
        <rect x="30" y="6" rx="4" ry="4" width="343" height="38" />
      </ContentLoader>

      <ContentLoader
        uniqueKey="products2"
        className="w-11/12"
        speed={2}
        backgroundColor="#64748B"
        foregroundColor="#ecebeb"
        height={200}
        viewBox="0 0 800 200"
      >
        <rect x="0" y="6" rx="10" ry="4" width="800" height="200" />
      </ContentLoader>

      <ContentLoader
        uniqueKey="products3"
        className="w-11/12"
        height="400"
        backgroundColor="#64748B"
        foregroundColor="#ecebeb"
        viewBox="0 0 800 400"
      >
        <rect x="0" y="40" rx="4" ry="4" width="800" height="25" />
        <rect x="0" y="80" rx="2" ry="2" width="800" height="400" />
      </ContentLoader>
    </div>
  );
};
