import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface InteractiveDemoDialogProps {
  project: {
    title: string;
    description: string;
    demoUrl?: string;
    component?: React.ComponentType;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger?: React.ReactNode;
}

export const InteractiveDemoDialog: React.FC<InteractiveDemoDialogProps> = ({
  project,
  open,
  onOpenChange,
  trigger
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-w-3xl w-full h-[70vh] p-0 overflow-hidden">
        <DialogHeader>
          <DialogTitle>{project.title} – Interactive Demo</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="w-full h-full flex items-center justify-center bg-black/80">
          {project.demoUrl ? (
            <iframe
              src={project.demoUrl}
              title={`${project.title} Demo`}
              className="w-full h-[50vh] rounded-lg border-none shadow-lg"
              allow="autoplay; fullscreen"
            />
          ) : project.component ? (
            <div className="w-full h-full flex items-center justify-center p-4">
              <project.component />
            </div>
          ) : (
            <div className="text-white">No demo available</div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}; 