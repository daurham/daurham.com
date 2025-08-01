import React from 'react';
import {
  Dialog,
  DialogContent
} from '@/components/ui/dialog';

interface ImageViewerDialogProps {
  imageSrc: string | null;
  onClose: () => void;
}

export const ImageViewerDialog: React.FC<ImageViewerDialogProps> = ({
  imageSrc,
  onClose
}) => {
  return (
    <Dialog open={!!imageSrc} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-4 overflow-auto">
        {imageSrc && (
          <div className="flex items-center justify-center">
            <img 
              src={imageSrc} 
              alt="Enlarged screenshot" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}; 