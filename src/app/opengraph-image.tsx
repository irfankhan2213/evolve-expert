import { ImageResponse } from "next/og";

export const alt = "EvolveExpert — 24/7 AI Lead-to-Booking System";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAF9F5",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(#d1cfc7 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
            opacity: 0.35,
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#111111",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FAF9F5",
                fontWeight: 800,
                fontSize: 24,
              }}
            >
              EE
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#111111",
              }}
            >
              EvolveExpert Studio
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              backgroundColor: "white",
              borderRadius: 9999,
              border: "1px solid #E5E3DC",
              fontSize: 15,
              fontWeight: 600,
              color: "#059669",
            }}
          >
            Lead-to-Booking System · Sub-60s Response
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            position: "relative",
            maxWidth: 1050,
          }}
        >
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.08,
              color: "#111111",
            }}
          >
            24/7 AI Lead-to-Booking System.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#525252",
              lineHeight: 1.4,
              maxWidth: 880,
            }}
          >
            Every inbound call, WhatsApp message, and web lead answered in under 60 seconds, qualified by AI, and booked into your calendar 24/7. Live in 14 days.
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            borderTop: "1px solid #E5E3DC",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 13, color: "#737373", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Speed to Lead
            </span>
            <span style={{ fontSize: 28, fontWeight: 800, color: "#059669" }}>
              &lt; 60 Seconds
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 13, color: "#737373", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Delivery Velocity
            </span>
            <span style={{ fontSize: 28, fontWeight: 800, color: "#111111" }}>
              14 Days Fixed
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 13, color: "#737373", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Milestone Escrow
            </span>
            <span style={{ fontSize: 28, fontWeight: 800, color: "#059669" }}>
              50 / 50 Escrow
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 13, color: "#737373", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Acceptance Test
            </span>
            <span style={{ fontSize: 28, fontWeight: 800, color: "#111111" }}>
              20 Live Calls
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
