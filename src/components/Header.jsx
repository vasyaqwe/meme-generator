import trollFace from '../assets/troll-face.png'
export default function Header() {
    return (
        <header>
            <img src={trollFace} alt="" />
            <span className='fw-700 header__title'>Meme Generator</span>
        </header>
    )
}