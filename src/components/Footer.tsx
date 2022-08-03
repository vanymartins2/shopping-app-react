import { Container } from 'react-bootstrap'

export function Footer() {
  return (
    <footer
      className="d-flex-column text-center mt-5"
      style={{ minHeight: '50px', height: '100%', backgroundColor: '#d3d3d3' }}
    >
      <Container className="p-4">
        <section>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.facebook.com"
            target="__blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.twitter.com"
            target="__blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.google.com"
            target="__blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/"
            target="__blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com"
            target="__blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.github.com/"
            target="__blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>

        <div
          className="d-flex justify-content-center text-dark p-3"
          style={{ backgroundColor: '0, 0, 0, 0.2', gap: '0.5rem' }}
        >
          © 2022 Copyright:
          <a href="/store" style={{ color: 'primary', textDecoration: 'none' }}>
            Shoppy Store ♥
          </a>
        </div>
      </Container>
    </footer>
  )
}
