const wordpressAssetBase = (slug: string) => `https://ps.w.org/${slug}/assets`;

// WordPress.org plugin authors use different official icon formats. The UI tries
// these directory-standard assets in order, so each card displays the real icon
// rather than a generated placeholder.
export function getOfficialPluginIconSources(slug: string) {
  const base = wordpressAssetBase(slug);
  return [
    `${base}/icon.svg`,
    `${base}/icon-256x256.gif`,
    `${base}/icon-256x256.png`,
    `${base}/icon-128x128.gif`,
    `${base}/icon-128x128.png`,
  ];
}

export function getOfficialPluginIcon(slug: string) {
  return getOfficialPluginIconSources(slug)[0];
}
