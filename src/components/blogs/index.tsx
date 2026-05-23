import Image from "next/image"
import NavSvg from "@/assets/icon/navigation.svg"
import { SECTION_TYPE } from "../tabs/constants"
import { MonotonFont, BreeSerifFont } from "@/common/font"
import classNames from "classnames"
import type { Language } from "@/app/page"

const recordList = {
  zh: [
    {
      img: "/projects/work.svg",
      title: "用 Claude Code、Codex 等 AI 开发工具辅助学习、写作、编程和文档整理，并探索适合个人场景的开发 agent 工作流",
      date: "AI Tools / Development Agent"
    },
    {
      img: "/projects/work.svg",
      title: "接口行为、逆向分析和 API 适配的学习记录",
      date: "Reverse / API"
    },
    {
      img: "/projects/qingzhuo.png",
      title: "把实验课里的洗衣液做成一个完整的产品展示网站",
      date: "Course Project"
    }
  ],
  en: [
    {
      img: "/projects/work.svg",
      title: "Using AI development tools such as Claude Code and Codex for learning, writing, coding, and document work while exploring personal development-agent workflows",
      date: "AI Tools / Development Agent"
    },
    {
      img: "/projects/work.svg",
      title: "Notes on interface behavior, reverse analysis, and API adaptation",
      date: "Reverse / API"
    },
    {
      img: "/projects/qingzhuo.png",
      title: "Turning a laboratory detergent project into a complete product website",
      date: "Course Project"
    }
  ]
}

const moreText = {
  zh: "View GitHub",
  en: "View GitHub"
}

type BlogsProps = {
  language: Language
}

const Blogs = ({ language }: BlogsProps) => {
  const records = recordList[language]

  return (
    <div id={SECTION_TYPE.BLOGS} className="mt-32 pt-40 w-[90%] max-w-[1040px] mx-auto">
      <div className={classNames("w-full text-center text-6xl", MonotonFont.className)}>
        Records
      </div>

      <div
        className="w-full mx-auto flex justify-center items-center mt-24 relative rounded-3xl"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 15px 0px"
        }}
      >
        <div className="w-full px-12 py-6 relative z-[1]">
          {
            records.map((record) => (
              <div
                key={record.title}
                className="flex py-10 border-b-[1px] border-solid border-black/30 gap-x-8 dark:border-white/30"
              >
                <Image
                  src={record.img}
                  alt="record cover"
                  className="shrink-0 w-40 h-fit max-w-[40%]"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col justify-center" >
                  <div className={classNames("text-lg", BreeSerifFont.className)}>{record.date}</div>
                  <div className={classNames("text-2xl mt-2 break-all", BreeSerifFont.className)}>{record.title}</div>
                </div>
              </div>
            ))
          }

          <div className="flex justify-center w-full">
            <a href="https://github.com/fangyuanopus" target="_blank" className="inline-flex items-center px-5 py-2 rounded-3xl mt-8 mx-auto cursor-pointer hover:scale-105 transition-all bg-black">
              <span className={classNames("text-white mr-4", BreeSerifFont.className)}>{moreText[language]}</span>
              <NavSvg className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[0] rounded-3xl">
        </div>
      </div>
    </div>
  )
}

export default Blogs
