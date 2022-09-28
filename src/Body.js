import Group from './Group 77.png'
import Star from './Star 1.svg'
import athlete from './image 12.png'
import mountain from './mountain-bike 1.png'
import wedding from './wedding-photography 1.png'
import './Body.css'

export default function Body(){
    return (
        <div className='content'>
        <img src={Group} className='group-image' alt='wel'/>
        <section>
            <h1 className='paragraph'>Online Experiences</h1>
            <p className='paragraph'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            <div className='image-grid'>
            <div className='one image1' id='image1'>
        <img src={athlete} className='images'
        alt='wel'/>
                <div className='details'>
                <div className='detail'>
        <img src={Star} className='svg' alt='wel'/>
        <p>5.0</p>
        <p className='grey'>(6)</p>
        <p className='grey'>•</p>
        <p className='grey'>USA</p>
                </div>
                <p className='p'>Life lessons with Katie Zaferes</p>
                <p className='p'><strong>From $136 /</strong> person
</p>
                </div>
            </div>
            <div className='one image2'  id='image2'>
        <img src={wedding} className='images' alt='wel'/>
        <div className='details'>
                <div className='detail'>
        <img src={Star} className='svg' alt='wel'/>
        <p>5.0</p>
        <p className='grey'>(30)</p>
        <p className='grey'>•</p>
        <p className='grey'>USA</p>
                </div>
                <p className='p'>Learn wedding photography</p>
                <p className='p'><strong>From $125 /</strong> person
</p>
                </div>
            </div>
            <div className='one imagee3'>
        <img src={mountain} className='images image3' alt='wel'/>
        <div className='details'>
                <div className='detail detail3'>
        <img src={Star} className='svg' alt='wel'/>
        <p>4.8</p>
        <p className='grey'>(2)</p>
        <p className='grey'>•</p>
        <p className='grey'>USA</p>
                </div>
                <p className='p bikin'>Group Mountain Biking</p>
                <p className='p bikin'><strong>From $50 /</strong> person
</p>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
}