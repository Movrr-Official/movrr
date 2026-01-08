import { Button } from "@/components/ui/button";

export default function LoadMoreButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={onClick}
      disabled={disabled}
      className="rounded-none border-2 border-border hover:border-primary/50 uppercase tracking-wider font-bold text-sm"
    >
      Load More Articles
    </Button>
  );
}
