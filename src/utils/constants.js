export const APIkey = '56822669fb83466192573775bdaebcaf';

export const BASE_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';

export const NEWS_API_URL = 'https://newsapi.org/v2/everything';

export function formatDate(dateString) {
  if (!dateString) return 'Article release date';

  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getGreeting() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 1 && hour < 12) {
    return 'Good Morning';
  } else if (hour >= 12 && hour < 17) {
    return 'Good Afternoon';
  } else if (hour >= 17 && hour < 24) {
    return 'Good Evening';
  } else {
    return 'Hello';
  }
}
