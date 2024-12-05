"use client"

const Error = ({error,reset}) => {

    // console.log(error,reset)

  return (
    <div className="flex flex-col gap-5 my-20 items-center">
        <h1>HATA OLUŞTU!!!</h1>
        <p>{error.message}</p>
        <button onClick={reset}>Tekrar Dene</button>
    </div>
  )
}

export default Error