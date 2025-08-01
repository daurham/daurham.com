# Project Card Components

This directory contains modular, reusable components for displaying project cards in different contexts.

## Components

### ProjectCard
The main component that handles all project card variations. It's highly configurable and can adapt to different use cases.

**Props:**
- `project`: Project data object
- `className`: Additional CSS classes
- `onImageClick`: Callback for image clicks
- `onDemoOpen`: Callback for demo dialog opens
- `openDesc`: State for collapsible descriptions
- `onDescToggle`: Callback for description toggle
- `renderContent`: Custom content renderer function
- `renderFooter`: Custom footer renderer function

**Features:**
- Automatic content detection (screenshots, carousel, interactive components)
- Collapsible descriptions
- Technology badges
- Flexible button rendering
- Responsive design

### InteractiveDemoDialog
Handles interactive demo dialogs with iframe or component rendering.

### ImageViewerDialog
Simple image viewer for enlarged screenshots.

## Usage Examples

### Basic Usage
```tsx
import { ProjectCard } from '@/components/project-cards';

<ProjectCard project={projectData} />
```

### With Custom Footer
```tsx
<ProjectCard
  project={projectData}
  renderFooter={(project) => (
    <>
      <Button onClick={() => window.open(project.liveUrl)}>Live</Button>
      <Button onClick={() => window.open(project.githubUrl)}>GitHub</Button>
    </>
  )}
/>
```

### With Image Click Handler
```tsx
const [selectedImage, setSelectedImage] = useState<string | null>(null);

<ProjectCard
  project={projectData}
  onImageClick={setSelectedImage}
/>
```

### With Demo Dialog
```tsx
const [openDemo, setOpenDemo] = useState<string | null>(null);

<ProjectCard
  project={projectData}
  onDemoOpen={setOpenDemo}
/>

{openDemo && (
  <InteractiveDemoDialog
    project={projectData}
    open={!!openDemo}
    onOpenChange={(open) => setOpenDemo(open ? openDemo : null)}
  />
)}
```

## Project Data Structure

The project object should have this structure:

```typescript
interface Project {
  title: string;
  description: string;
  technologies: string[];
  isLive?: boolean;
  isGithub?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  interactiveDemo?: boolean;
  interactiveComponent?: boolean;
  interactiveComponentDemo?: boolean;
  component?: React.ComponentType;
  screenshots?: string[];
  carousel?: boolean;
}
```

## Benefits

1. **Reusable**: One component handles all project card variations
2. **Maintainable**: Clean separation of concerns
3. **Flexible**: Custom renderers for content and footer
4. **Consistent**: Unified styling and behavior
5. **Type-safe**: Full TypeScript support 