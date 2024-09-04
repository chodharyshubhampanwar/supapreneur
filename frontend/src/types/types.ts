export interface User {
  id: string;
  email: string;
  name: string | null;
}

export interface Profile {
  id: string;
  avatar: string;
  firebaseId: string;
  udername: string;
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
}

export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  error: string | null;
}

export interface Company {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  date_founded: string;
  logo: string;
  slug: string;
  created_at: string;
  updated_at: string;
  upvotes: number;
  location: string;
  region: string;
  sector: string;
  industry: string;
  stage: string;
  links: {
    website: string;
    linkedin: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  status: string;
  description: string;
  pitch_deck: string;
  product_images: string[];
  pitch_video: string;
  what: string;
  why: string;
  how: string;
  round_size: number;
  amount_raised: number;
  tech_stack: string[];
  isVoted: boolean;

  // id: string;
  // title: string;
  // tagline: string;
  // tags: string[];
  // dateFounded: string;
  // logo: string;
  // slug: string;
  // createdAt: string;
  // updatedAt: string;
  // upvotes: number;
  // location: string;
  // region: string;
  // sector: string;
  // industry: string;
  // stage: string;
  // links: {
  //   website: string;
  //   linkedin: string;
  // };
  // status: string;
  // description: string;
  // pitchDeck: string;
  // productImages: string[];
  // pitchVideo: string;
  // what: string;
  // why: string;
  // how: string;
  // roundSize: number;
  // amountRaised: number;
  // tech_stack: string[];
  // isVoted: boolean;
}

export interface NewsItem {
  title: string;
  description: string;
  link: string;
  id: string;
}

export interface NewsItemProps {
  newsItem: NewsItem;
  titleSize?: string;
  descriptionSize?: string;
  showConten?: string;
}

export interface MenuItem {
  text: string;
  icon: string;
}

export interface CompanyCardProps {
  companies: Company[];
}

export interface UpvoteButtonProps {
  company: Company;
}

export interface VoteResponse {
  action: "added" | "removed";
  companyId: string;
  message: string;
  voteCount: number;
}

export interface RouteObject {
  exact?: boolean;
  path: string;
  element: JSX.Element;
  children?: RouteObject[];
}
