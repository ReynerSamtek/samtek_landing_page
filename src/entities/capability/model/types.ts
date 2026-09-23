export type CapabilityCategory =
  | "security"
  | "safety"
  | "business"
  | "traffic";

export interface DetectionBox {
  label: string;
  confidence: string;
  top: string;
  left: string;
  width: string;
  height: string;
  color?: "green" | "red" | "blue" | "amber";
}

export interface AiCapability {
  id: string;
  slug: string;
  code: string;
  name: string;
  nameId: string;
  desc: string;
  descId: string;
  category: CapabilityCategory;
  iconName: string;
  featured?: boolean;
  image?: string;
  detectionBoxes?: DetectionBox[];
  useCaseDetails?: string[];
  recommendedCameras?: string;
}
