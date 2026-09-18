export type CapabilityCategory =
  | "security"
  | "safety"
  | "business"
  | "traffic";

export interface AiCapability {
  id: string;
  code: string;
  name: string;
  nameId: string; // Indonesian title
  desc: string;
  descId: string; // Indonesian description
  category: CapabilityCategory;
  iconName: string;
  featured?: boolean;
}
