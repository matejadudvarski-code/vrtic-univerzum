const VideoTour = () => (
  <section className="container py-5" >
    <div className="card shadow mx-auto">
      <div className="card-body text-center">
        <h2 className="card-title mb-3">Naš prostor</h2>
        <video controls style={{ height: "80%", borderRadius: "12px" }}>
          <source src="/videos/snimak hola.mp4" type="video/mp4" />
          Vaš pretraživač ne podržava video.
        </video>
      </div>
    </div>
  </section>
);
export default VideoTour;