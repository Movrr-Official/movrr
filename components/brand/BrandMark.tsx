import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  variant?: "white" | "green";
  size?: number;
  className?: string;
  priority?: boolean;
};

const iconSrc = {
  white: "/logo/icon-no-bg-white.png",
  green: "/logo/icon-no-bg-green.png",
} as const;

// Usage:
// <BrandMark variant="white" size={30} className="h-[1.7rem] w-[1.7rem]" />
// <BrandMark variant="green" size={30} priority />
export function BrandMark({
  variant = "white",
  size = 30,
  className,
  priority = false,
}: BrandMarkProps) {
  return (
    <Image
      src={iconSrc[variant]}
      alt="MOVRR icon"
      width={size}
      height={size}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
