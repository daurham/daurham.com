import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle
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
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-black/95 border-0">
        <DialogTitle className="sr-only">Image Viewer</DialogTitle>
        {imageSrc && (
          <div className="flex items-center justify-center w-full h-full p-4">
            <img 
              src={imageSrc} 
              alt="Enlarged screenshot" 
              className="max-w-full max-h-full object-contain"
              style={{
                maxHeight: 'calc(95vh - 2rem)',
                maxWidth: 'calc(95vw - 2rem)',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}; 