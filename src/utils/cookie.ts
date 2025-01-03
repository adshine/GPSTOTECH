interface CookieOptions {
  expires?: Date | number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}

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
    sameSite: 'Strict',
    path: '/',
    expires: 365 // 1 year
  });
}

export function setCookiePreferences(preferences: Record<string, boolean>): void {
  // Store preferences in localStorage
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences));

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
  const savedPreferences = localStorage.getItem('cookiePreferences');
  if (savedPreferences) {
    return JSON.parse(savedPreferences);
  }
  return {
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  };
} 