import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Myself</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Let's go deeper than just a title!
        </PageHeaderHeading>
        <PageHeaderDescription>
        I’m Rittick Sinha, a passionate Software Developer with a strong foundation in building full-stack web applications. My journey into tech began with a drive to solve real-world problems through code and evolved into a commitment to developing efficient, impactful systems.
        </PageHeaderDescription>

        <PageHeaderDescription>
        With over three years of experience using the MERN stack, I focus on crafting scalable, secure, and responsive applications. I’m proficient in C++, JavaScript, and Python, and have solved over 250 problems on LeetCode with an ongoing 120+ day streak—continuously sharpening my skills in data structures and algorithms. I’m also expanding my system-level understanding by learning Unix-based development and command-line tools.
        </PageHeaderDescription>

        <PageHeaderDescription>
        Outside of coding, I enjoy working in collaborative environments and tackling complex challenges with a creative mindset. I'm driven to build solutions that are not only functional but also meaningful to the people who use them.
        </PageHeaderDescription>
      </PageHeader>

      <CodeSnippet title="aboutMe.ts" code={code.aboutMe} />

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
