export interface CarouselProps {
    items: React.ReactNode[];
    autoPlay?: boolean;
    interval?: number;
    showControls?: boolean;
    showIndicators?: boolean;
  }

  export interface CardProps {
    name: string;
    title: string;
    bgClass: string; // The class for background color (e.g., "bg-pink")
  }