export default function Video({ link }) {
  const getEmbedUrl = (url) => {
    if (url.includes("embed")) return url;

    const urlObject = new URL(url);
    return urlObject.origin + "/embed/" + urlObject.searchParams.get("v");
  };

  return (
    <>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src={getEmbedUrl(link) + "?autoplay=1"}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
          }}
          title="PISANO (Medical Marketing)V2.mp4"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}
