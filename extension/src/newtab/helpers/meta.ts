// function to get metadata from url
export const getMetadata = async (url: string) => {
  const response = await fetch(url);
  const html = await response.text();
  const doc = new DOMParser().parseFromString(html, "text/html");
  const title = doc.querySelector("title")?.textContent;
  const description = doc.querySelector("meta[name='description']")?.getAttribute("content");
  const image = doc.querySelector("meta[property='og:image']")?.getAttribute("content");
  return {
    title,
    description,
    image,
  };
};