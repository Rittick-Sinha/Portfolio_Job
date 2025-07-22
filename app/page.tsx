import CodeSnippet from "@/components/code-snippet";
import { PageActions } from "@/components/page-header";
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PageHeader } from "@/components/page-header";
import Pager from "@/components/pager";
import { Button } from "@/components/ui/button";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Greetings,  My name is Rittick Sinha.</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
        By day, I'm a coder, and at night, I solve problems!
        </PageHeaderHeading>
        <PageHeaderDescription>
        I'm a full-stack developer with 3+ years of experience building scalable MERN applications, with a strong focus on clean architecture, performance, and user experience. I’m proficient in C++, JavaScript, and Python, and have solved over 250 problems on LeetCode with a 120+ day streak—sharpening my skills in data structures and algorithms. I enjoy tackling real-world problems through thoughtful, efficient code and continuously push myself to grow as an engineer.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <CodeSnippet title="welcome.ts" code={code.welcome} />

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
