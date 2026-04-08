import { motion } from "framer-motion";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
  className?: string;
}

export const MenuToggle = ({ toggle, className }: MenuToggleProps) => (
  <button
    onClick={toggle}
    className={className}
    style={{ WebkitTapHighlightColor: "transparent" }}
  >
    <svg width="18" height="18" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          opened: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          opened: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          opened: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
