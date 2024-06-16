export const SpotifyPlayer = () => {
  return (
    <iframe
      style={{ borderRadius: "12px", position: "relative", zIndex: 1 }}
      src="https://open.spotify.com/embed/artist/7gLXw7lLcnPbNVyv6JvAZQ?utm_source=generator&theme=0"
      width="100%"
      height="500"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};
