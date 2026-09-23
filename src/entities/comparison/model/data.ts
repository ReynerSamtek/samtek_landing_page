export interface ComparisonRow {
  aspect: string;
  onprem: string;
  onpremHighlight?: boolean;
  cloud: string;
}

export const comparisonRows: ComparisonRow[] = [
  {
    aspect: "Operational Expenses (OPEX)",
    onprem: "$0 monthly cloud hosting fees. Transparent perpetual licensing.",
    onpremHighlight: true,
    cloud: "Escalating monthly fees per camera stream plus cloud storage tiers.",
  },
  {
    aspect: "Internet Bandwidth Overhead",
    onprem: "0 MB video data sent out. Entire inference happens within local LAN.",
    onpremHighlight: true,
    cloud: "Heavy bandwidth strain (10–50 Mbps per camera) saturating facility internet.",
  },
  {
    aspect: "Internet Outage Resilience",
    onprem: "100% operational uninterrupted even during total internet blackouts.",
    onpremHighlight: true,
    cloud: "AI analytics and live alerts fail completely whenever connection drops.",
  },
  {
    aspect: "Data Privacy & Compliance",
    onprem: "Footage never leaves your building. Fully compliant with PDP regulations.",
    onpremHighlight: true,
    cloud: "Streams sent to external multi-tenant cloud servers with privacy exposure risks.",
  },
  {
    aspect: "Inference & Alert Latency",
    onprem: "Instantaneous (< 10ms). Triggers access gates or alarms immediately.",
    onpremHighlight: true,
    cloud: "Lagged by 1–5 seconds due to cloud round-trip transmission latency.",
  },
  {
    aspect: "Hardware Upgrade Requirement",
    onprem: "Works with existing cameras (standard ONVIF/RTSP compliant).",
    onpremHighlight: true,
    cloud: "Frequently forces purchases of costly proprietary cloud-locked cameras.",
  },
];
