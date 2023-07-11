import Header from '../components/header';

function WrongPage():JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section>
          <div className="container" style={{ marginTop: 100, marginBottom: 50}}>
            <h1 className="offer__name">
              404! There is no such page, sorry!
            </h1>
          </div>
        </section>
      </main>
    </div>);
}

export default WrongPage;
