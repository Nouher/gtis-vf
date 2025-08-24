"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Globe, Award, Users,Building2 } from "lucide-react"
import { useLanguage } from "../app/context/language-context"

interface CounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

function Counter({ end, duration = 2000, prefix = "", suffix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(end * easeOutQuart)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function PowerfulStats() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: <Building2 className="h-16 w-16 text-[#4682B4]" />,
      number: 50,
      suffix: "+",
      title: t("stats.projects"),
      description: t("stats.projects.desc"),
    },
    {
      icon: <Globe className="h-16 w-16 text-[#4682B4]" />,
      number: 10,
      suffix: "+",
      title: t("stats.countries"),
      description: t("stats.countries.desc"),
    },
    {
      icon: <Award className="h-16 w-16 text-[#4682B4]" />,
      number: 8,
      suffix: "+",
      title: t("stats.years"),
      description: t("stats.years.desc"),
    },
    {
      icon: <Users className="h-16 w-16 text-[#4682B4]" />,
      number: 150,
      suffix: "+",
      title: t("stats.professionals"),
      description: t("stats.professionals.desc"),
    },
  ]

  return (
    <section className="pb-22 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Technical Industry Services</h2> */}
              {/* <div className="w-60 h-1 mt-6 bg-blue-300 mx-auto"></div> */}

          {/* <p className="text-xl text-gray-500 font-light tracking-wide uppercase">RELIABLE INDUSTRIAL SERVICES</p> */}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="flex justify-center mb-6">{stat.icon}</div>

              {/* Number */}
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold text-gray-900">
                  <Counter end={stat.number} suffix={stat.suffix} duration={2000} />
                </span>
                <span className="text-2xl md:text-3xl font-bold text-gray-900 ml-1">{stat.title}</span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
