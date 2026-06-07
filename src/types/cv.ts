export type CvJob = {
  id: string;
  title: string;
  organisation: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  responsibilities: string[];
  achievements: string[];
};

export type CvEducation = {
  id: string;
  institution: string;
  name: string;
  year?: string;
};

export type CvSkill = {
  id: string;
  name: string;
  level?: 'basic' | 'good' | 'strong';
  proofLink?: string;
};

export type CvDocument = {
  id: string;
  name: string;
  phone