import type { CvJob, CvSkill } from '../types/cv';

export const sampleJobs: CvJob[] = [
  {
    id: 'job-1',
    title: 'Office Administrator',
    organisation: 'Sample Employer',
    startDate: '2022-01',
    current: true,
    responsibilities: ['Handled filing and daily office support'],
    achievements: ['Improved document turnaround time']
  }
];

export const sampleSkills: CvSkill[] = [
  { id: 'skill-1', name: 'Microsoft Excel', level: 'good' },
  { id: 'skill-2', name: 'Data capture', level: 'strong' }
];
