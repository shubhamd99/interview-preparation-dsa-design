import "./styles.css";

// The Holy Grail layout is a famous CSS page layout that has traditionally been hard to implement.
// It consists of a header, footer, and three columns. The left column contains navigation items,
// the middle column contains the page contents, and the right column contains ads.

// Symantic HTML
// By adding semantic HTML tags to your pages, you provide additional information that helps define the roles
// and relative importance of the different parts of your page.
// Accessibility: For sighted users, it’s easy to identify the various parts of a webpage.
// SEO: Semantic HTML tags are important for SEO (search engine optimization) because they indicate the role of the content within the tags.

export default function App() {
  return (
    <>
      <header>Header</header>
      <div className="columns">
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
}
