// Inline resume summary plus an optional PDF download.
export const resume = {
  // Put your PDF at public/resume.pdf, then set this to 'resume.pdf'.
  // While it is undefined, no download button is shown.
  pdf: undefined as string | undefined,
  education: [
    {
      school: 'Colorado School of Mines',
      detail: 'B.S. Computer Science',
      dates: 'TODO: start - expected graduation',
    },
  ],
  experience: [
    {
      role: 'TODO: role',
      org: 'TODO: company or org',
      dates: 'TODO: dates',
      bullets: ['TODO: one concrete thing you did or achieved.'],
    },
  ],
}
