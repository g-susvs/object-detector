import { FC, useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { CountState } from "./types";
import { getCountChips } from "./helpers/getCountChips";

export const App: FC = () => {

  const [countState, setCountState] = useState<CountState>('nothing')

  const firstMessage = 'Has click en los botones para identificar cuantos fichas de cada tipo hay 😁'
  const [resultState, setResultState] = useState(firstMessage)
  const [isLoading, setIsLoading] = useState(false)

  const handleCountBlackChips = () => {
    setCountState("BLACK")
    setIsLoading(true)
  }
  const handleCountWhiteChips = () => {
    setCountState("WHITE")
    setIsLoading(true)
  }

  useEffect(() => {

    if (isLoading === true) {
      getCountChips(countState)
        .then(data => {
          setIsLoading(false)
          let message = ''
          if (data.type === 'BLACK') message = 'fichas de color negro ⚫'
          if (data.type === 'WHITE') message = 'fichas de color blanco ⚪'

          setResultState(`Hay ${data.count} ${message}`)
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])


  return <div className="container">
    <header className="header">
      <h1>Cuenta las fichas</h1>
    </header>
    <main className="main">
      {
        (isLoading === true)
          ? <div className="loaderContainer">
            <Loader />
          </div>
          : <div className="imageContainer">

            <img className="imageContainer__img" src="./assets/juego-fichas.jpg" alt="juego fichas" />
          </div>
      }

      <section className="info">
        {countState === 'WHITE' && <p>{resultState}</p>}
        {countState === 'BLACK' && <p>{resultState}</p>}
        {countState === 'nothing' && <p>{resultState}</p>}
      </section>

      <section className="buttonsContainer">
        <button className="button" disabled={isLoading} onClick={handleCountBlackChips}>Contar fichas negras</button>
        <button className="button" disabled={isLoading} onClick={handleCountWhiteChips}>Contar fichas blancas</button>
      </section>
    </main>
  </div>;
};
