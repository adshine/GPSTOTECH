interface CookieOptions {
  expires?: Date | number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}

const COOKIE_PREFERENCES_KEY = 'gpstotech_cookie_preferences';

export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {}
): void {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (options.expires) {
    if (typeof options.expires === 'number') {
      const date = new Date();
      date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
      options.expires = date;
    }
    cookieString += `; expires=${options.expires.toUTCString()}`;
  }

  if (options.path) cookieString += `; path=${options.path}`;
  if (options.domain) cookieString += `; domain=${options.domain}`;
  if (options.secure) cookieString += '; secure';
  if (options.sameSite) cookieString += `; samesite=${options.sameSite}`;

  document.cookie = cookieString;
}

export function getCookie(name: string): string | null {
  const nameEQ = encodeURIComponent(name) + '=';
  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }

  return null;
}

export function deleteCookie(name: string, options: CookieOptions = {}): void {
  setCookie(name, '', { ...options, expires: new Date(0) });
}

export function setSecureCookie(
  name: string,
  value: string,
  options: Omit<CookieOptions, 'secure' | 'sameSite'> = {}
): void {
  setCookie(name, value, {
    ...options,
    secure: true,
    sameSite: 'Lax',
    path: '/',
    expires: 365 // 1 year
  });
}

export function setCookiePreferences(preferences: Record<string, boolean>): void {
  // Store preferences in localStorage
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));

  // Set individual cookies based on preferences
  Object.entries(preferences).forEach(([key, enabled]) => {
    if (enabled) {
      setSecureCookie(`gpstotech_${key}`, 'true');
    } else {
      deleteCookie(`gpstotech_${key}`, { path: '/' });
    }
  });
}

export function getCookiePreferences(): Record<string, boolean> {
  try {
    // First try to get from localStorage
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (savedPreferences) {
      return JSON.parse(savedPreferences);
    }

    // If not in localStorage, check cookies
    const cookieTypes = ['necessary', 'analytics', 'marketing', 'functional'];
    const preferences: Record<string, boolean> = {};
    
    cookieTypes.forEach(type => {
      preferences[type] = getCookie(`gpstotech_${type}`) === 'true';
    });

    // If any preferences are found in cookies, save them to localStorage
    if (Object.values(preferences).some(value => value)) {
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
      return preferences;
    }

    // Return empty object if no preferences found
    return {};
  } catch (error) {
    console.error('Error getting cookie preferences:', error);
    return {};
  }
} 