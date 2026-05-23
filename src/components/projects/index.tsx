import classNames from "classnames"
import { MonotonFont, BreeSerifFont } from "@/common/font"
import { SECTION_TYPE } from "../tabs/constants"
import Link from "../link"
import Image from "next/image"
import type { Language } from "@/app/page"

const projectList = {
  zh: [
    {
      img: "/projects/paint-board.png",
      title: "Literature Report PPT Builder",
      github: "https://github.com/fangyuanopus/literature-report-ppt-builder",
      desc: "一个用于生成中文文献汇报 PPT 的 Codex skill，覆盖资料阅读、图源整理、页面规划和 PPTX 输出流程。",
      notes: "我把它做成比较完整的工作流工具，适合课程汇报、文献汇报，以及需要稳定版式的展示场景。"
    },
    {
      img: "/projects/qingzhuo.png",
      title: "Qingzhuo",
      link: "https://71b9af58.qingzhuo.pages.dev/",
      github: "https://github.com/fangyuanopus/qingzhuo",
      desc: "精细化学品综合实验课程作业中的洗衣液宣传网站，用来展示我制作的茶皂素复配浓缩洗衣液。",
      notes: "它不只是一个静态展示页，也尝试补齐产品介绍、配方亮点、定价、评价、下单和后台管理等电商流程。"
    }
  ],
  en: [
    {
      img: "/projects/paint-board.png",
      title: "Literature Report PPT Builder",
      github: "https://github.com/fangyuanopus/literature-report-ppt-builder",
      desc: "A Codex skill for generating Chinese literature-report PPT decks, covering reading, figure tracking, page planning, and PPTX output.",
      notes: "I built it as a complete workflow tool for course presentations, literature reports, and slide decks that need stable structure."
    },
    {
      img: "/projects/qingzhuo.png",
      title: "Qingzhuo",
      link: "https://71b9af58.qingzhuo.pages.dev/",
      github: "https://github.com/fangyuanopus/qingzhuo",
      desc: "A product website built for a fine-chemicals laboratory course, presenting the tea-saponin compound concentrated laundry detergent I made.",
      notes: "Beyond a landing page, it explores product storytelling, formula highlights, pricing, reviews, ordering, and basic admin flows."
    }
  ]
}

type ProjectsProps = {
  language: Language
}

const Projects = ({ language }: ProjectsProps) => {
  const projects = projectList[language]

  return (
    <div id={SECTION_TYPE.PROJECTS} className="w-full mt-32 pt-40 relative">
      <div
        className={classNames("w-full text-center text-6xl", MonotonFont.className)}
      >
        Projects
      </div>

      <div className="relative w-full">
        <div
          className="w-[90%] max-w-[1040px] mt-20 mx-auto relative rounded-3xl"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 15px 0px"
          }}
        >
          <div className="relative z-[2]">
            {
              projects.map((project, index) => (
                <div
                  className="flex px-10 gap-x-4 relative py-12"
                  key={project.title}
                  style={{
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                    wordSpacing: "0.2rem"
                  }}
                >
                  <div className={classNames("w-1/2 flex-1", BreeSerifFont.className)}>
                    <div className="text-4xl text-center font-black">{project.title}</div>

                    <Image
                      src={project.img}
                      className="w-full h-auto rounded-xl my-5 mx-auto hidden max-600:block dark:opacity-80"
                      alt="projectImage"
                      width={200}
                      height={200}
                    />

                    {
                      project.link && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Link: </span>
                          <Link href={project.link} />
                        </div>
                      )
                    }
                    {
                      project.github && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Github: </span>
                          <Link href={project.github} />
                        </div>
                      )
                    }
                    <div className="text-base mt-2 flex">
                      <span className="font-semibold shrink-0 w-16">Desc: </span>
                      <span>
                        {project.desc}
                      </span>
                    </div>
                    <div className="text-base mt-2 flex">
                      <span className="font-semibold shrink-0 w-16">Notes: </span>
                      <span className="whitespace-pre-line">
                        {project.notes}
                      </span>
                    </div>
                  </div>

                  <div className="w-1/2 h-fit shrink-0 sticky top-20 justify-center flex max-600:hidden dark:opacity-80">
                    <Image
                      src={project.img}
                      width={200}
                      height={200}
                      className="w-full h-fit rounded-xl"
                      alt="projectImg"
                    />
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[0] rounded-3xl">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
