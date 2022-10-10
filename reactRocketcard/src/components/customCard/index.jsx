import '../../style/components/customCard.sass'

export function CustomCard(){
  return(
    <div className='container_custom'>
      <div className="input_git">
        <input
          type="text"
          placeholder='Digite seu usuario do github'
        />
        <button className='btn_submit'>Enviar</button>
      </div>
      <h2>Customizar Rocketcard</h2>
      <button className='btn_generate_bg'>Gerar background</button>
    </div>
  )
}
