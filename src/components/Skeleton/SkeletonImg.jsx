import { useState } from "react";

export function SkeletonImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="skeleton"
      style={{ background: loaded ? "transparent" : "" }}
    >
      {!loaded && <div className="skeleton absolute inset-0"></div>}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
    </div>
  );
}
