import { BreeSerifFont } from "@/common/font"
import classNames from "classnames"
import FaceSVG from "@/assets/face.svg"
import type { Language } from "@/app/page"

const footerText = {
  zh: "谢谢你访问我的个人网站。如果你也对 AI 工具、编程、逆向分析、接口机制或有意思的小项目感兴趣，欢迎和我交流。",
  en: "Thank you for visiting my personal website. Feel free to reach out if you are interested in AI tools, coding, reverse analysis, interface behavior, or small practical projects."
}

type PageFooterProps = {
  language: Language
}

const PageFooter = ({ language }: PageFooterProps) => {
  return (
    <div
      className='flex flex-col pt-56 mx-auto items-center justify-center w-[90%] max-w-[840px]'
      style={{
        wordSpacing: "0.25rem"
      }}
    >
      <div className='relative'>
        <FaceSVG className={classNames("w-20 h-20 twinkle-display")} />
        <FaceSVG className={classNames("w-20 h-20 twinkle-style")} />
      </div>
      <span className={classNames("text-2xl mt-6", BreeSerifFont.className)}>
        {footerText[language]}
      </span>

      <div className="flex justify-center pt-32 pb-10">
        Built by <a className="font-bold cursor-pointer ml-2" href="https://github.com/fangyuanopus" target="_blank" >{"'fangyuanopus'"}</a>
      </div>
    </div>
  )
}

export default PageFooter
