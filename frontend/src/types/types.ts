
export interface Company {
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

export interface CompanyCardProps {
  companies: Company[];
}

export interface UpvoteButtonProps {
  company: Company;
}