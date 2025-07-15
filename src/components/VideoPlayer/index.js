export default function VideoPlayer({
  src,
  width = "100%",
  height = "600",
  autoPlay = true,
  controls = true,
  loop = true,
}) {
  return (
    <video
      controls={controls}
      width={width}
      height={height}
      autoPlay={autoPlay}
      loop={loop}
    >
      <source src={src} />
    </video>
  );
}
