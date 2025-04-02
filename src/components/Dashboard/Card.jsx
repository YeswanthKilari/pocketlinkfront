import { useEffect } from "react";

const getYouTubeEmbedUrl = (url) => {
  try {
    const urlObj = new URL(url);
    let videoId = urlObj.searchParams.get("v");

    if (!videoId && urlObj.hostname === "youtu.be") {
      videoId = urlObj.pathname.substring(1); 
    }

    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    console.log("Generated YouTube Embed URL:", embedUrl);
    return embedUrl;
  } catch (error) {
    console.error("Error parsing YouTube URL:", url, error);
    return url;
  }
};

const loadScript = (src, id, callback) => {
  if (!document.getElementById(id)) {
    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    script.async = true;
    script.onload = callback;
    document.body.appendChild(script);
  } else if (callback) {
    callback();
  }
};

export function Card({ title, link, type }) {
  console.log("Card Props - Title:", title); 
  console.log("Card Props - Link:", link); 
  console.log("Card Props - Type:", type); 

  const normalizedType = type?.toLowerCase();

  const formattedTwitterLink =
    typeof link === "string" ? link.replace("x.com", "twitter.com") : "";

  useEffect(() => {
    if (normalizedType === "twitter") {
      console.log("Loading Twitter embed script...");
      loadScript(
        "https://platform.twitter.com/widgets.js",
        "twitter-wjs",
        () => {
          if (window.twttr) {
            console.log("Initializing Twitter widgets...");
            window.twttr.widgets.load();
          } else {
            console.error("Twitter widgets not available.");
          }
        }
      );
    } else if (normalizedType === "instagram") {
      console.log("Loading Instagram embed script...");
      loadScript("https://www.instagram.com/embed.js", "instagram-wjs", () => {
        if (window.instgrm) {
          console.log("Initializing Instagram embeds...");
          window.instgrm.Embeds.process();
        }
      });
    } else if (normalizedType === "facebook") {
      console.log("Loading Facebook SDK...");
      loadScript(
        "https://connect.facebook.net/en_US/sdk.js",
        "facebook-jssdk",
        () => {
          if (window.FB) {
            console.log("Initializing Facebook embeds...");
            window.FB.XFBML.parse();
          }
        }
      );
    }
  }, [normalizedType]);

  let content;

  switch (normalizedType) {
    case "youtube":
      console.log("Rendering YouTube content");
      content = (
        <iframe
          className="w-full h-fit"
          style={{ aspectRatio: "16/9" }}
          draggable
          src={getYouTubeEmbedUrl(link)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      );
      break;
    case "twitter":
      console.log("Rendering Twitter content"); 
      console.log("Formatted Twitter Link:", formattedTwitterLink); 
      content = (
        <blockquote className="twitter-tweet">
          <a href={formattedTwitterLink}>{formattedTwitterLink}</a>
        </blockquote>
      );
      break;
    case "facebook":
      console.log("Rendering Facebook content");
      content = (
        <div className="fb-post" data-href={link} data-width="500"></div>
      );
      break;
    case "instagram":
      console.log("Rendering Instagram content"); 
      content = (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={link}
          data-instgrm-version="14"
        ></blockquote>
      );
      break;
    default:
      console.log("Unsupported content type:", normalizedType); 
      content = <p>Unsupported content type.</p>;
  }

  return (
    <div className="bg-white font-light border rounded-md w-[100%] shadow-md border-gray-200 break-inside-avoid h-fit ">
      <div className="p-2 flex justify-between items-center">
        <br />
        <div className="font-bold">{title.charAt(0).toUpperCase(0)+title.slice(1)}</div>
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            🔗
          </a>
        </div>
      </div>
      <div className="p-2 content">{content}</div>
    </div>
  );
}

export default Card;
