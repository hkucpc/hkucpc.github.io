const base = import.meta.env.BASE_URL;
const external = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i;

/**
 * Prefix an internal path with Astro's configured base path.
 * Use for every internal link and public asset so the site works
 * both at a domain root and under /<repository>/ on GitHub Pages.
 */
export function href(path = ''): string {
  if (external.test(path)) return path;
  const clean = path.replace(/^\/+/, '');
  return `${base}${clean}`;
}

export function activePath(pathname: string): string {
  const withoutBase = pathname.startsWith(base)
    ? pathname.slice(base.length)
    : pathname;
  return `/${withoutBase.replace(/^\/+|\/+$/g, '')}`;
}
