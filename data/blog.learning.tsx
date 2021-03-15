export interface IData {
  title: string;
  image: string;
  href: string;
  subtitle: string;
  description?: string;
  technology?: JSX.Element;
  numberImage?: number;
  images?: Array<string>;
  tags?: Array<string>;
  heading?: Array<string>;
  program?: string;
  courseLink?: string;
  contentImgLink?: string;
  numberContentImage?: number;
}

const data = [
  {
    image: 'gg_project_management_week_1',
    href: 'gg_project_management_week_1',
    title: 'Week 1: Overview project management',
    program: 'Google Project Management Professional Certificate',
    courseLink:
      'https://www.coursera.org/professional-certificates/google-project-management',
    subtitle:
      'Project managers are natural problem-solvers. They set the plan and guide teammates, and manage changes, risks, and stakeholders.',
    description:
      'The application of knowledge, skills, tools, and techniques to meet the project requirements and achieve the desired outcome. Valuable to businesses because it helps ensure that a project delivers the expected outcomes.',
    tags: ['certificate', 'project management', 'lifelong learner'],
    heading: ['Definition', 'career ladder'],
    contentImgLink: 'gg_project_management_week_1/content',
    numberContentImage: 5,
    numberImage: 1,
  },
  // {
  //   image: 'gg_project_management',
  //   href: 'blog.learning/gg_project_management_week_2',
  //   title: 'Foundations of Project Management',
  //   program: 'Google Project Management Professional Certificate',
  //   subtitle:
  //     'Project managers are natural problem-solvers. They set the plan and guide teammates, and manage changes, risks, and stakeholders.',
  //   description:
  //     'The application of knowledge, skills, tools, and techniques to meet the project requirements and achieve the desired outcome.Valuable to businesses because it helps ensure that a project delivers the expected outcomess For examples: The students can now interact with the doctor  through a tablet, smartphone, a computer while they’re at school. Implementing this technology into the school’s procedures is the project.',
  //   technology: (
  //     <ul>
  //       <li>TypeScript</li>
  //       <li>NextJS</li>
  //       <li>Scss</li>
  //     </ul>
  //   ),
  //   tags: ['daily life'],
  //   heading: ['Definition', 'career ladder'],
  //   numberImage: 1,
  // },
];
export default data;
