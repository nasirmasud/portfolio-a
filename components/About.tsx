import portfolio01 from "@/public/assets/Project01.png";
import portfolio02 from "@/public/assets/Project02.png";
import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { Progress } from "./ui/progress";

export default function About() {
  return (
    <section id='about' className='text-white p-8'>
      <h2 className='text-6xl font-bold mb-8'>
        About <span className='text-purple-300'>Me</span>
      </h2>
      <div className='grid md:grid-cols-3 gap-8'>
        <div className='border border-white/20 rounded-lg p-6'>
          <h3 className='font-bold text-2xl mb-2'>01. Background</h3>
          <p className='text-white/50 mb-6'>
            I'm a self-learned passionate React & Next.js developer with a
            strong foundation of HTML, CSS, Javascript & love to creating
            innovative web solutions. My journey in tech started with curiosity
            and has grown into a career of continuous learning and building
            impactful projects.
          </p>
          <div className='rounded-lg p-4 mb-4 border border-white'>
            <code className='text-purple-200/50'>
              const skills = [<br />
              &nbsp;&nbsp;'Javascript',
              <br />
              &nbsp;&nbsp;'React',
              <br />
              &nbsp;&nbsp;'Next.js',
              <br />
              &nbsp;&nbsp;'Typescript',
              <br />
              &nbsp;&nbsp;'PostgreSQL',
              <br />
              &nbsp;&nbsp;'MongoDB',
              <br />
              ];
            </code>
          </div>
        </div>

        <div className='border border-white/20 rounded-lg p-6'>
          <h3 className='font-bold text-2xl mb-2'>02. Expertise</h3>
          <p className='text-white/50'>
            I specialize in building robust and scalable web applications using
            modern technologies. My expertise lies in creating seamless user
            experiences, optimizing performance, and delivering high-quality
            code.
          </p>
          <div className='mt-4 relative border-white/20 rounded-lg p-4 h-[220px] overflow-hidden'>
            <Image
              src={portfolio01}
              alt='Project 1'
              fill
              className='rounded-lg'
            />
          </div>
        </div>

        <div className='border border-white/20 rounded-lg p-6'>
          <h3 className='font-bold text-2xl mb-2'>03. Skills</h3>
          <p className='mb-4 text-white/50'>
            I'm proficient in a wide range of technologies and constantly
            expanding my skills to stay updated with the latest advancements in
            web development.
          </p>
          <div className='border border-white/20 rounded-lg p-3'>
            <h4 className='mb-2 text-purple-300 font-medium'>Frontend</h4>
            <ul className='text-white/50 space-x-1 text-sm'>
              <li>React</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>ShadCN</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div className='border border-white/20 rounded-lg p-3 mt-4'>
            <h4 className='mb-2 text-purple-300 font-medium'>Backend</h4>
            <ul className='text-white/50 space-x-1 text-sm'>
              <li>Next.js</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='grid-cols-3 md:grid-cols-2 gap-8 rounded-lg flex mt-8'>
        <div className='border border-white/20 rounded-lg p-6'>
          <h3 className='font-bold text-2xl mb-2'>04. Approach</h3>
          <p className='mb-4 text-white/50'>
            I believe in writing clean, maintainable, and efficient code. My
            approach is centered around understanding the problem, planning the
            solution, and executing it with precision. I prioritize readability,
            scalability, and performance in every project I undertake.
          </p>

          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <div>
                <div className='flex gap-1 items-center'>
                  <RiHtml5Fill size={30} />
                  <Progress
                    value={85}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <div>
                <div className='flex gap-1 items-center'>
                  <RiCss3Fill size={30} />
                  <Progress
                    value={65}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <div>
                <div className='flex gap-1 items-center'>
                  <RiJavascriptFill size={30} />
                  <Progress
                    value={90}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <div>
                <div className='flex gap-1 items-center'>
                  <RiTailwindCssFill size={30} />
                  <Progress
                    value={70}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <div>
                <div className='flex gap-1 items-center'>
                  <RiReactjsFill size={30} />
                  <Progress
                    value={75}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <div>
                <div className='flex gap-1 items-center'>
                  <RiNextjsFill size={30} />
                  <Progress
                    value={80}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='border border-white/5 rounded-lg p-2'>
            <div className='space-y-4'>
              <div>
                <div className='flex gap-1 items-center'>
                  <BiLogoTypescript size={30} />
                  <Progress
                    value={50}
                    className='bg-purple-300/20 [&>div]:bg-purple-100/80'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' border border-white/20 rounded-lg p-6'>
          <div>
            <h3 className='font-bold text-2xl mb-2'>05. Goals</h3>
            <p className='mb-4 text-white/50'>
              I follow a structured approach to problem-solving, starting with
              understanding the requirements and breaking them into smaller,
              manageable tasks. I emphasize collaboration, testing, and
              iteration to ensure the final product meets expectations and
              delivers value.
            </p>
          </div>
          <div className='h-[200px] overflow-hidden p-4 border border-white/20 relative'>
            <Image
              src={portfolio02}
              alt='Project 2'
              fill
              className='object-cover rounded-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
