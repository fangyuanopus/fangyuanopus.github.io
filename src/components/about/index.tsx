import { useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { SECTION_TYPE } from "../tabs/constants"

import GithubSVG from "@/assets/icon/github.svg"
import GmailSVG from "@/assets/icon/gmail.svg"
import Image from "next/image"

import { BreeSerifFont } from "@/common/font"
import classNames from "classnames"
import type { Language } from "@/app/page"

const contactList = [
  {
    icon: GithubSVG,
    link: "https://github.com/fangyuanopus"
  },
  {
    icon: GmailSVG,
    email: "mailto:jpengsu@163.com"
  },
]

const aboutText = {
  zh: {
    intro: "你好，我是苏俊朋，也常用 fangyuanopus 这个 ID。这里是我的个人网站。",
    first: "我平时喜欢使用 Claude Code、Codex 等 AI 开发工具辅助学习、办公、写代码和整理想法，也会做一些小型 Web 应用、自动化流程和 PPT/文档工具。未来希望进一步研究并构建更适合自己学习和工作场景的开发 agent。",
    second: "我对接口机制、逆向分析、API 适配和工具链也比较感兴趣。这个网站主要放一些公开项目、兴趣方向，以及我最近在折腾什么。"
  },
  en: {
    intro: "Hi, I'm Su Junpeng, also known online as fangyuanopus. Welcome to my personal space.",
    first: "I often use AI development tools such as Claude Code and Codex to support learning, office work, coding, and idea organization. I also build small web apps, automation workflows, and document or slide tools, and hope to further study and build development agents that better fit my own study and work scenarios.",
    second: "I am interested in interface behavior, reverse engineering, API adaptation, and practical toolchains. This site keeps the public parts of what I build and what I am exploring."
  }
}

const threshold: number[] = []
for (let i = 0; i < 1; i = i + 0.025) {
  threshold.push(i)
}

type AboutProps = {
  language: Language
}

const About = ({ language }: AboutProps) => {
  const text = aboutText[language]
  const { ref, entry } = useInView({
    threshold
  })

  const profileRadius = useMemo(() => {
    if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1) {
      return "50%"
    }
    const radius = entry.intersectionRatio * 50
    return `${radius < 10 ? 10 : radius}%`
  }, [entry?.intersectionRatio])

  return (
    <div
      ref={ref}
      id={SECTION_TYPE.ABOUT}
      className="flex flex-col items-center justify-center pt-28 w-[90%] max-w-[840px] mx-auto"
    >
      <div
        className={classNames("relative cursor-pointer w-64 h-64 group")}
      >
        <Image
          src="/profile_avatar.jpg"
          alt="profile"
          width={100}
          height={100}
          className="w-full h-full absolute top-0 left-0 z-[1] transition-all duration-300 group-hover:rotate-y-180 object-cover"
          style={{
            borderRadius: profileRadius,
            backfaceVisibility: "hidden",
          }}
        />
        <Image
          src="/profile_scene.jpg"
          alt="profile scene"
          width={100}
          height={100}
          className="w-full h-full absolute top-0 left-0 transition-all duration-300 group-hover:rotate-y-180 object-cover"
          style={{
            borderRadius: profileRadius
          }}
        />
      </div>

      <div
        className={classNames("text-2xl spacing-word-1", BreeSerifFont.className)}
        style={{
          wordSpacing: "0.25rem"
        }}
      >
        <div className="flex items-center justify-center gap-x-3 mt-16 mb-10">
          {
            contactList.map((item, index) => (
              <a
                href={item.email || item.link}
                target="_blank"
                className="p-1 border-black rounded-lg border-2 cursor-pointer hover:scale-110 transition-all dark:border-white"
                key={index}
              >
                <item.icon className="w-7 h-7" />
              </a>
            ))
          }
        </div>

        {text.intro}

        <div className="mt-6">
          {text.first}
        </div>

        <div className="mt-6">
          {text.second}
        </div>

      </div>
    </div>
  )
}

export default About
