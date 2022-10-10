function match(candidate, job) {
  if(!candidate.minSalary || !job.maxSalary) throw 'error';
  return (candidate.minSalary * 0.9 <= job.maxSalary) ? true : false;
}
