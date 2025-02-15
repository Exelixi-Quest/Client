import type React from "react"

interface MacWindowProps {
  title: string
  children: React.ReactNode
}

export const MacWindow: React.FC<MacWindowProps> = ({ title, children }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="bg-gray-900 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-sm text-gray-400">{title}</div>
      </div>
      <div className="p-4 bg-black">{children}</div>
    </div>
  )
} 