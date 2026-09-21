import fs from "fs";
import path from "path";

export function getPrivacyPolicyHtml(): string {
  try {
    const filePath = path.join(process.cwd(), "src/shared/lib/privacy_policy.html");
    return fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading privacy policy HTML:", error);
    return "<p>Privacy policy content is currently unavailable.</p>";
  }
}

export function getTermsConditionsHtml(): string {
  try {
    const filePath = path.join(process.cwd(), "src/shared/lib/terms_conditions.html");
    return fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading terms and conditions HTML:", error);
    return "<p>Syarat dan ketentuan sedang tidak tersedia.</p>";
  }
}
