import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 112,
          background: "#b8ffa4",
          color: "#08251b",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 290,
          fontWeight: 900,
          letterSpacing: "-0.12em",
          paddingRight: 34,
        }}
      >
        M
      </div>
    ),
    size,
  );
}
