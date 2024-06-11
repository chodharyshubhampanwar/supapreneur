export interface SocialLinks {
  twitter: string;
  facebook: string;
  instagram: string;
  linkedin: string;
}

export interface Company {
  social: SocialLinks;
  _id: string;
  name: string;
  description: string;
  upvotes: number;
  tags: string[];
  website: string;
  logo: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface UpvoteButtonProps {
  upvoted: boolean;
}
