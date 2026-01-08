"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
}

export function TeamMember({ name, role, bio, image }: TeamMemberProps) {
  return (
    <motion.div
      className="group bg-background p-8 lg:p-10 border-r border-b border-border last:border-r-0 hover:bg-card/30 transition-colors duration-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-64 border-2 border-border bg-card overflow-hidden mb-6">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-2xl font-black tracking-tight mb-2">{name}</h3>
      <p className="text-sm font-bold text-primary uppercase tracking-[0.1em] mb-4">{role}</p>
      <p className="text-base text-muted-foreground leading-relaxed">{bio}</p>
    </motion.div>
  )
}
