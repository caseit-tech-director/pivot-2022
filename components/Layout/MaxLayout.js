export default function MaxLayout({ children }) {
    return (
      <>
        <section className="max--layout grid--container flex">
          <div>{children}</div>
        </section>
      </>
    );
  }
