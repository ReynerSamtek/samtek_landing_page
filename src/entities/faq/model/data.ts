import { FaqItem } from "./types";

export const faqData: FaqItem[] = [
  {
    id: "faq-01",
    question: "Does the SAMTEK system require an internet connection to function?",
    answer:
      "Not at all. All computer vision inference (facial recognition, license plates, PPE safety compliance, anomaly detection) and local storage operate 100% locally on your facility edge server. Even during internet outages, surveillance continues without disruption. An internet connection is strictly optional if you wish to receive push notifications on mobile devices outside the building.",
  },
  {
    id: "faq-02",
    question: "Do we need to replace our currently installed CCTV cameras?",
    answer:
      "No camera replacements are required. SAMTEK seamlessly integrates with any camera brand you already own (Hikvision, Dahua, Axis, Uniview, Bosch, etc.) as long as it supports industry-standard RTSP or ONVIF protocols, saving substantial capital expenditure.",
  },
  {
    id: "faq-03",
    question: "How many AI models can run concurrently on a single stream?",
    answer:
      "It depends on the hardware capacity of the installed edge server. You have complete flexibility to assign different models per stream according to location needs — for example, entrance cameras can run license plate & face recognition, while factory floor cameras run PPE hardhat & fire detection.",
  },
  {
    id: "faq-04",
    question: "How does SAMTEK's licensing and cost model work?",
    answer:
      "SAMTEK's pricing model is completely transparent and OPEX-optimized: licensing is calculated per camera channel and activated module, free of recurring cloud fees and bandwidth surcharges.",
  },
  {
    id: "faq-05",
    question: "Is our video footage protected against third-party leaks?",
    answer:
      "Yes, completely. Video data is never uploaded to any public multi-tenant cloud. The platform features AES-256 encryption, strict Role-Based Access Control (RBAC), and immutable digital forensic audit logs recording all operator activities.",
  },
  {
    id: "faq-06",
    question: "Do you provide on-site installation support and operator training?",
    answer:
      "Yes. PT Safanah Alvan Maksima's technical team provides comprehensive deployment services: from assessing your current CCTV network, deploying edge server hardware, and tuning AI detection rules to hands-on training for your security operators and IT team.",
  },
];
