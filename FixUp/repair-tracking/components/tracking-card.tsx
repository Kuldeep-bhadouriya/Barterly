"use client"

import { Check, Clipboard, Home, Package, Truck } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface TrackingCardProps {
  orderNumber: string
  trackingNumber: string
  expectedDate: string
  currentStep: number
}

export default function TrackingCard({
  orderNumber = "Y34XDHR",
  trackingNumber = "234094567242423422898",
  expectedDate = "01/12/19",
  currentStep = 3,
}: TrackingCardProps) {
  const [animatedStep, setAnimatedStep] = useState(0)

  useEffect(() => {
    // Animate the progress steps one by one
    const timer = setTimeout(() => {
      if (animatedStep < currentStep) {
        setAnimatedStep((prev) => prev + 1)
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [animatedStep, currentStep])

  const steps = [
    {
      title: "Order Processed",
      icon: Clipboard,
    },
    {
      title: "Order Shipped",
      icon: Package,
    },
    {
      title: "Order En Route",
      icon: Truck,
    },
    {
      title: "Order Arrived",
      icon: Home,
    },
  ]

  return (
    <div className="min-h-screen bg-black p-4 flex items-center justify-center antialiased">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 space-y-8">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-600">ORDER</p>
            <p className="font-bold text-xl">#{orderNumber}</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-sm text-gray-600">Expected Arrival {expectedDate}</p>
            <p className="text-sm">USPS {trackingNumber}</p>
          </div>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
            <div
              className="absolute top-0 left-0 h-full bg-black transition-all duration-500 ease-in-out"
              style={{ width: `${(animatedStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isCompleted = index <= animatedStep
              const isActive = index === animatedStep

              return (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                      isCompleted ? "bg-black" : "bg-gray-200",
                      isActive && "scale-110",
                    )}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5 text-white" />
                    ) : (
                      <Icon className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <p
                    className={cn(
                      "text-sm font-medium transition-colors duration-500",
                      isCompleted ? "text-black" : "text-gray-400",
                    )}
                  >
                    {step.title}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

