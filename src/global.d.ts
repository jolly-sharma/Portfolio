interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | undefined;
}

interface Window {
  gtag: (command: 'config' | 'event' | 'set', name: string, params?: GtagEventParams) => void;
}
