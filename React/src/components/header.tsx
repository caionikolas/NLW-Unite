import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header() {
  return (
    <div>
      <img src={nlwUniteIcon} alt="" />

      <nav>
        <a href="#">Eventos</a>
        <a href="#">Participantes</a>
      </nav>
    </div>
  )
}