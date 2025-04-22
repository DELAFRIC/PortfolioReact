 import './pageAcceuil1.css'
import kevyn from '../assets/kevyn.webp'


 function CadreCouleur(){
    return <div className = "grandCarde" >
            <div className="conteneur">
                <div className='row'>
                        <div className='col-8'>
                            <div>
                                <div className='Mr'><h1> Mr.Delafric</h1></div>
                                <div className='titre'><h2> Ingenieur logiciel</h2></div>
                                <div className='slogan'><h3> consectetur adipisicing elit. Repellat  eligendi, autem illum odi Repellat  eligendi, autem illum odi</h3></div>
                                <ul className='row conteneurCV'>
                                    <li className='col-6 cv'>Téléchargement Cv</li>
                                    <li className='col-2 wat'><i className="bi bi-whatsapp"></i></li>
                                    <li className='col-2 tiktok'><i className="bi bi-tiktok"></i></li>
                                    <li className='col-2 fb'><i className="bi bi-facebook"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-4 imagekevyn'>
                            <div>
                                <img src={kevyn} alt="image Kevyn"/>
                            </div>
                        </div>
                </div>
            </div>
                
    </div>
 }

 function Liste(){
    return <div>
        <div className='listParent'>          
                <ul className='row'>
                    <li className='col-3'>À propos</li>
                    <li className='col-3'>Services</li>
                    <li className='col-3'>Projets</li>
                    <li className='col-3'>Contact</li>
                </ul>   
        </div>
    </div>
 }

 function Sorti(){
    return <>
        <div>
            <CadreCouleur/>
            <Liste/>
        </div>
    
    </>
 }



export default function AppPageAcceuil1(){
    return <>
            <Sorti/>
    </>
}