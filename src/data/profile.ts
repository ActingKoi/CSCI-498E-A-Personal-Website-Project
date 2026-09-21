// Who you are. Used by the sidebar and the About section.
export const profile = {
  name: 'Daniel Hoang',
  tagline: 'Computer science student and food enthusiast',
  blurb: 'Senior at Colorado School of Mines. I love trying new food and reading.',
  // Each string becomes one paragraph in the About section.
  about: [
    "Hey, I'm Daniel! I'm a computer science senior at Colorado School of Mines (graduating May 2027) who spends the day wrangling data and the evening hunting for the next great meal.",
    'This summer I built data pipelines at Xcel Energy that help predict icing on wind turbines. On my own time I made Hungry, an app that lets you swipe your way to dinner.',
    "Away from the keyboard you'll find me snowboarding, at the gym, lost in a book or a video game, or stuck deciding between sushi, KBBQ, and a seafood boil (no wrong answers). Say hi if you have a restaurant rec.",
  ],

  // Profile photos. Put files in public/images/profile/ and list them here.
  // Clicking the avatar cycles through them in this order.
  // Example: { src: 'profile/me1.jpg', alt: 'Daniel smiling at the summit' }
  photos: [
    { src: 'profile/profile_professional.jpg', alt: 'Daniel in business suit'},
    { src: 'profile/profile_mario.jpg', alt: 'Daniel at Universal Studios Japan' },
    { src: 'profile/profile_ghibli.jpg', alt: 'Daniel at Studio Ghibli' }
  ] as { src: string; alt: string }[],
  // Shown at the bottom of the sidebar. Add or remove entries freely.
  links: [
    { label: 'GitHub', href: 'https://github.com/ActingKoi' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhoang-mines' },
    { label: 'Email', href: 'mailto:danny.hoang.denver@gmail.com' },
  ],
}
