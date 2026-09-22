import type { SocialLink } from '../components/SocialLinks'
import { publicUrl } from '../assets'

// Who you are. Used by the sidebar and the About section.
export const profile = {
  name: 'Daniel Hoang',
  // Each string becomes one paragraph in the About section.
  about: [
    "Hey, I'm Daniel! I'm a computer science student at Colorado School of Mines interested in software development and AI. Below are what I've worked on and my favorite hobbies, music, and food!"
  ],

  // Profile photos. Put files in public/images/profile/ and list them here.
  // Clicking the avatar cycles through them in this order.
  // Example: { src: 'profile/me1.jpg', alt: 'Daniel smiling at the summit' }
  photos: [
    { src: 'profile/profile_professional.jpg', alt: 'Daniel in business suit'},
    { src: 'profile/profile_mario.jpg', alt: 'Daniel at Universal Studios Japan' },
    { src: 'profile/profile_ghibli.jpg', alt: 'Daniel at Studio Ghibli' }
  ] as { src: string; alt: string }[],
  // Round icon buttons under your name. Add, remove or reorder freely.
  // icon must be one of: 'github' | 'linkedin' | 'resume' | 'email'
  links: [
    { label: 'GitHub', href: 'https://github.com/ActingKoi', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhoang-mines', icon: 'linkedin' },
    { label: 'Resume', href: publicUrl('resume.pdf'), icon: 'resume' },
    // { label: 'Email', href: 'mailto:danny.hoang.denver@gmail.com', icon: 'email' },
  ] as SocialLink[],
}
