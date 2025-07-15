export default function ImageDiv({ src, alt = "" }) {
  return (
    <div align="center">
      <img src={src} alt={alt} />
    </div>
  );
}
