import { MonotonFont } from "@/common/font"
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud"
import classNames from "classnames"
import { useEffect } from "react"
import { SECTION_TYPE } from "../tabs/constants"
import type { Language } from "@/app/page"

const stackList = {
  zh: [
  "Claude Code",
  "Codex",
  "AI Agent",
  "Development Agent",
  "AI Workflow",
  "RAG",
  "Automation",
  "办公自动化",
  "PPT",
  "文档整理",
  "逆向分析",
  "接口研究",
  "API 适配",
  "Workflow",
  "Prompt",
  "Python",
  "TypeScript",
  "React",
  "Vite",
  "TailwindCSS",
  "FastAPI",
  "Express",
  "PostgreSQL",
  "Cloudflare",
  "Docker",
  "Git",
  "GitHub",
  "Vercel",
  "Writing",
  "Reading",
  "Markdown"
  ],
  en: [
  "Claude Code",
  "Codex",
  "AI Agent",
  "Development Agent",
  "AI Workflow",
  "RAG",
  "Automation",
  "Office Automation",
  "PPT",
  "Document Tools",
  "Reverse Analysis",
  "Interface Research",
  "API Adaptation",
  "Workflow",
  "Prompt",
  "Python",
  "TypeScript",
  "React",
  "Vite",
  "TailwindCSS",
  "FastAPI",
  "Express",
  "PostgreSQL",
  "Cloudflare",
  "Docker",
  "Git",
  "GitHub",
  "Vercel",
  "Writing",
  "Reading",
  "Markdown"
  ]
}

type StackProps = {
  language: Language
}

const Stack = ({ language }: StackProps) => {
  useEffect(() => {
    const elList = document.getElementsByClassName("tagcloud--item")
    if (elList.length) {
      Array.from(elList).forEach((el) => {
        ;(el as HTMLSpanElement).style.fontSize = "25px"
        ;(el as HTMLSpanElement).style.fontFamily = "'__Bree_Serif_22a902', '__Bree_Serif_Fallback_22a902'"
      })
    }
  }, [])

  return (
    <div id={SECTION_TYPE.STACK} className="mt-32 pt-40 w-[90%] max-w-[1040px] mx-auto">
      <div className={classNames("w-full text-center text-6xl", MonotonFont.className)}>
        My Toolbox
      </div>

      <div
        className="w-full aspect-square mx-auto flex justify-center items-center mt-24 relative rounded-3xl"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 15px 0px"
        }}
      >
        <TagCloud
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: (w.innerWidth * 0.9  > 920 ? 920 : w.innerWidth * 0.9) * 0.5,
            maxSpeed: "normal",
          })}
          onClickOptions={{ passive: true }}
        >
          {stackList[language]}
        </TagCloud>
        <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[0] rounded-3xl">
        </div>
      </div>
    </div>
  )
}

export default Stack
