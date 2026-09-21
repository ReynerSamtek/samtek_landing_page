import { StepItem } from "./types";

export const howItWorksSteps: StepItem[] = [
  {
    num: "01",
    step: "Step 1",
    title: "Connect Existing Cameras",
    desc: "Hook up any analog cameras (via encoder) or IP cameras using RTSP or ONVIF protocols. No camera replacement needed.",
    badge: "Plug & Play",
  },
  {
    num: "02",
    step: "Step 2",
    title: "Local Edge Computing",
    desc: "Video streams are processed entirely on SAMTEK's local on-premise edge hardware. Zero internet bandwidth consumed.",
    badge: "100% On-Premise",
  },
  {
    num: "03",
    step: "Step 3",
    title: "Automated AI Detection",
    desc: "Activate specific vision models per stream: instant recognition of faces, license plates, PPE safety gear, or intruders.",
    badge: "Sub-10ms Latency",
  },
  {
    num: "04",
    step: "Step 4",
    title: "Instant Alerts & Trigger Actions",
    desc: "Receive real-time notifications via WhatsApp, email, webhook, automatic boom-gate triggers, or facility sirens.",
    badge: "Real-Time Action",
  },
];
