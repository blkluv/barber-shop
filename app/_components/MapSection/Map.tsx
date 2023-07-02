export const Map = () => {
  return (
    <iframe
      height="550"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      className="h-full min-h-140 w-full grow"
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsSF9mMb7ykARYnheKk3oCxo&key=${process.env.API_KEY}`}
    />
  );
};
