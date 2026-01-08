"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";

const dataSources = [
  {
    name: "Centraal Bureau voor de Statistiek (CBS)",
    description:
      "Official government statistics on mobility, including daily cycling trips and commuter behavior in major Dutch cities.",
    url: "https://www.cbs.nl/nl-nl/dossier/verkeer-en-vervoer",
    category: "Mobility Data",
  },
  {
    name: "Outreach | The Out of Home Masters",
    description:
      "Industry benchmarks for Out-of-Home (OOH) advertising costs (CPM), reach, and effectiveness in the Dutch market.",
    url: "https://www.outreach.nl/",
    category: "Advertising Benchmarks",
  },
  {
    name: "Kennisinstituut voor Mobiliteitsbeleid (KiM)",
    description:
      "Research from the Netherlands Institute for Transport Policy Analysis on urban mobility trends, modal split, and travel patterns.",
    url: "https://www.kimnet.nl/",
    category: "Mobility Research",
  },
  {
    name: "TU Delft - Transport & Planning",
    description:
      "Academic studies on the effectiveness of dynamic and mobile advertising mediums versus static billboards, and research into urban logistics.",
    url: "https://www.tudelft.nl/citg/over-faculteit/afdelingen/transport-planning",
    category: "Academic Research",
  },
  {
    name: "SWOV",
    description:
      "Data on road safety and infrastructure, which informs our understanding of high-traffic and high-visibility cycling routes.",
    url: "https://www.swov.nl/",
    category: "Infrastructure Data",
  },
];

interface DataSourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DataSourcesModal({ isOpen, onClose }: DataSourcesModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Our Data Sources
          </DialogTitle>
          <DialogDescription>
            Our projections are built upon credible, publicly available data.
            Here are the primary sources we use to inform our models.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 max-h-[60vh] overflow-y-auto pr-2">
          <div className="space-y-6">
            {dataSources.map((source) => (
              <div key={source.name} className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-base">{source.name}</h4>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full whitespace-nowrap">
                      {source.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 mb-2">
                    {source.description}
                  </p>
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="p-0 h-auto"
                  >
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Source
                      <ExternalLink className="ml-1.5 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
