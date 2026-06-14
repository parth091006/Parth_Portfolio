export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category:
    | "Artificial Intelligence"
    | "Machine Learning"
    | "Computer Vision"
    | "Robotics"
    | "Programming"
    | "Cloud"
    | "Other";
  skills: string[];
  image: string;
  verificationUrl: string;
  credentialId?: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Applications of Autonomous Mobile Robots in Defence",
    issuer: "IFIM Institutions & Viksit Bharat",
    issueDate: "2026",
    category: "Robotics",
    skills: ["Autonomous Mobile Robots", "Defense Technologies", "Systems Presentation"],
    image: "/certificates/19.png",
    verificationUrl: "https://www.linkedin.com/in/parthbhirwandekar/",
    credentialId: "IFIM-VKB-2026-019"
  }
];