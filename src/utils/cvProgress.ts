import type { CvJob, CvSkill } from '../types/cv';

export function getCvProgress(jobs: CvJob[], skills: CvSkill[]) {
  let score = 0;

  if (jobs.length > 0) score += 50;
  if (skills.length > 0) score += 30;
  if (jobs.some((job) => job.achievements.length > 0)) score += 20;

  return score;
}
