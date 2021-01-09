import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Container>
          {children}
        </Container>
      </main>

      <Footer />
    </div>
  )
}
