// Inline resume summary plus an optional PDF download.
export const resume = {
  // The PDF lives at public/resume.pdf. Set this to undefined to hide the
  // download button (for example if the file is missing).
  pdf: 'resume.pdf' as string | undefined,
  education: [
    {
      school: 'Colorado School of Mines',
      detail: 'B.S. Computer Science · GPA 3.5/4.0',
      dates: 'Expected graduation May 2027',
    },
  ],
  experience: [
    {
      role: 'R.O.C. Data Analyst Intern',
      org: 'Xcel Energy, Golden, CO',
      dates: 'June - August 2026',
      bullets: [
        'Built a Python/PySpark feature-engineering pipeline that identifies turbine alarms predictive of icing conditions across 23 wind farm sites, feeding a downstream ML prediction model and writing results to Delta Lake on Databricks.',
        'Automated multi-site SCADA alarm data ingestion via REST API integration, standardizing alarm naming across different turbine manufacturers into one consistent schema for fleet-wide analysis.',
        'Designed and shipped a scheduled Databricks ETL pipeline that replaced a manual monthly reporting process, computing fleet-wide KPIs for leadership review and validating outputs against legacy reports.',
      ],
    },
    {
      role: 'Engineering Intern',
      org: 'Namaste Solar, Denver, CO',
      dates: 'January - May 2023',
      bullets: [
        'Designed 5+ solar panel models using AutoCAD, reducing design iteration time by 20% and improving installation efficiency for clients.',
        'Updated and maintained existing solar panel models, ensuring compliance with company and customer standards.',
      ],
    },
  ],
  activities: 'Gates Scholar, SASE Media Chair & festival volunteer, GameDev Club member, ACM member',
}
