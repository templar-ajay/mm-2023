import styled from "styled-components";

export default function Video({ link }) {
  const getEmbedUrl = (url) => {
    if (url.includes("embed")) return url;
    const urlObject = new URL(url);
    return urlObject.origin + "/embed/" + urlObject.searchParams.get("v");
  };

  return (
    <>
      <VideoContainer>
        <iframe
          src={getEmbedUrl(link) + "?autoplay=1"}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
          }}
          title="PISANO (Medical Marketing)V2.mp4"
        ></iframe>
      </VideoContainer>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}

const VideoContainer = styled.div`
  position: relative;
  height: 432px;
  width: 768px;
`;
