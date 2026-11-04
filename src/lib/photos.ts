// Free Pexels photos (Pexels licence: free for commercial use, no attribution required).
// Replace any entry with your own school photo; an empty string falls back to a gradient.
export const px = (id: number, w = 1000) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
export const photos = {
  hero: { main: px(8617845, 1100), side: px(8923536, 640) }, // science class, reading
  programs: [px(40378006), px(8923536), px(5665500), px(34526421)], // early years, primary, middle, high school
  banner: px(34526421, 1600), // students studying outside
  facilities: [px(8471855), px(8419263), px(40287353), px(5665500)], // labs, library, sports, technology
  campus: [px(8471855), px(8419263), px(40287353), px(5665500), px(34526421)], // classrooms & labs, library, sports, technology, activity areas
  galleryIds: [8471855, 8419263, 40287353, 5665500, 8617845, 34526421, 40378006, 14111037, 8923536],
  student: [px(14111037), px(8923536), px(40378006)], // sports, arts (stand-in photo), events
  life: [px(14111037), px(8923536), px(8617845), px(40378006)], // sports, arts (stand-in photo), clubs, events
};
