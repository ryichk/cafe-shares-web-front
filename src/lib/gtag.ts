export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const pageView = (url: URL): void => {
  if (!GA_TRACKING_ID || !window) return;

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

interface GTagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const event = ({ action, category, label, value }: GTagEvent): void => {
  if (!GA_TRACKING_ID || !window) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
