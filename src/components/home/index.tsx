import { useCallback, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { SECTION_TYPE } from "../tabs/constants"

import ScrollDownSvg from "@/assets/icon/scroll-down.svg"
import Image from "next/image"

import { MonotonFont } from "@/common/font"
import classNames from "classnames"
import styles from "./index.module.css"
import type { Language } from "@/app/page"

const threshold: number[] = []
for (let i = 0; i < 1; i = i + 0.025) {
  threshold.push(i)
}

const heroText = {
  zh: {
    first: "Personal",
    second: "Space",
    third: "by",
    name: "Su Junpeng",
    scroll: "Scroll Down"
  },
  en: {
    first: "Personal",
    second: "Space",
    third: "by",
    name: "Su Junpeng",
    scroll: "Scroll Down"
  }
}

type HomeProps = {
  language: Language
}

const Home = ({ language }: HomeProps) => {
  const text = heroText[language]
  const { ref, entry } = useInView({
    threshold
  })

  const lineOpacity = useCallback((threshold: number) => {
    if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1)  {
      return 1
    }
    return entry.intersectionRatio < threshold ? 0 : (entry.intersectionRatio - threshold) / (1 - threshold)
  }, [entry?.intersectionRatio])

  const lineTranslate = useCallback((threshold: number, translateX: number) => {
    if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1)  {
      return "translateX(0px)"
    }
    return `translateX(${entry.intersectionRatio < threshold ? translateX : (1 - (entry?.intersectionRatio -  threshold) / (1 - threshold)) * translateX}px)`
  }, [entry?.intersectionRatio])

  const scrollDownOpacity = useMemo(() => {
    if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1)  {
      return 1
    }
    return entry?.intersectionRatio < 0.5 ? 0 : (entry?.intersectionRatio - 0.5) / 0.5
  }, [entry?.intersectionRatio])

  return (
    <div id={SECTION_TYPE.HOME} ref={ref} className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <Image
        src="/profile_scene.jpg"
        alt="winter personal cover"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-80 dark:opacity-45"
      />
      <div className="absolute inset-0 bg-white/45 dark:bg-black/55" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white dark:to-[#3C3D37]" />
      <div
        className={classNames("relative z-[2] text-center break-all transition-all duration-200 drop-shadow-sm", styles.title, MonotonFont.className)}
        style={{
          opacity: lineOpacity(0.6),
          transform: lineTranslate(0.6, 100)
        }}
      >
        {text.first}
      </div>
      <div
        className={classNames("relative z-[2] text-8xl text-center break-all transition-all duration-200 mt-8 drop-shadow-sm", styles.title, MonotonFont.className)}
        style={{
          opacity: lineOpacity(0.5),
          transform: lineTranslate(0.5, -100)
        }}
      >
        {text.second}
      </div>
      <div
        className={classNames("relative z-[2] text-8xl text-center flex items-end justify-center break-all mt-8 transition-all duration-200 drop-shadow-sm", styles.title, MonotonFont.className)}
        style={{
          opacity: lineOpacity(0.4),
          transform: lineTranslate(0.4, 100)
        }}
      >
        <span>{text.third}</span>
        <div
          className="flex items-center border-dashed rounded-xl relative scale-90 ml-4 px-5 py-2"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 20px 0px"
          }}
        >
          <span className="relative z-[2] text-5xl leading-none whitespace-nowrap max-600:text-3xl">{text.name}</span>
          <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[1] rounded-xl">
          </div>
          <div className="w-full h-full absolute top-0 left-0 z-[0] bg-white opacity-60 rounded-xl dark:bg-black dark:opacity-70"></div>
        </div>
      </div>

      <div className="absolute bottom-10 z-[2] flex justify-center">
        <div
          className="flex flex-col items-center justify-center animate-bounce transition-all"
          style={{
            opacity: scrollDownOpacity
          }}
        >
          <div className="mb-1">{text.scroll}</div>
          <ScrollDownSvg />
        </div>
      </div>
    </div>
  )
}

export default Home
