import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CategoryFilter({
  categories,
  selected,
  onChange,
}: {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
}) {
  return (
    <section className="w-full bg-card border-y-2 border-border py-8">
      {/* OUTFRONT-style full-width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === selected ? "default" : "outline"}
                size="sm"
                onClick={() => onChange(cat)}
                className={cn(
                  "rounded-none border-2 uppercase tracking-wider font-bold text-xs",
                  cat === selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary/50"
                )}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
