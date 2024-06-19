export interface Company {
  links: { [key: string]: string };
  isVerified: boolean;
  _id: string;
  name: string;
  upvotes: number;
  tags: string[];
  logo: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  tagline: string;
  stage?: string;
  teamSize?: string;
  founded?: string;
  images?: string[];
  video?: string;
  amount?: string;
  pricing?: string;
  businessModel?: string;
  status?: string;
  slug?: string;
  website?: string;
  __v?: number;
}

export interface CompanyCardProps {
  companies: Company[];
}

export interface UpvoteButtonProps {
  company: Company;
}

export interface UserProfile {
  id: string;
  name: string;
  headline: string;
  location: string;
  image: string;
  bio: string;
  links: string[];
  role: string;
  interests: string[];
  skills: string[];
  education: string[];
  experience: string[];
  projects: string[];
  isVerified: boolean;
  collaborating: boolean;
  criteria: string[];
}


export interface Profile {
  _id: string;
  name: string;
  headline: string;
  location: string;
  bio: string;
  links: string[];
  role: string;
  interests: string[];
  skills: string[];
  education: string[];
  experience: string[];
  projects: string[];
  isVerified: boolean;
  collaborating: boolean;
  criteria: string[];
  uid: string;
  avatar: string;
  username: string;
}