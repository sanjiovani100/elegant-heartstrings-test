export interface ModelImage {
  id: string;
  url: string;
  caption: string;
}

export interface ModelScheduleItem {
  time: string;
  event: string;
  description: string;
}

export interface ModelRequirement {
  category: string;
  items: string[];
}

export interface ModelApplication {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  portfolioLink?: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  feedback?: string;
}

export interface ModelFormData {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  portfolioLink?: string;
}