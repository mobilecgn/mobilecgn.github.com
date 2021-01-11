import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Content>
        <main className="flex-grow">
          <Container>
            {children}
          </Container>
        </main>
      </Content>

      <Footer />
    </div>
  )
}
