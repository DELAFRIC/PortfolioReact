 import './pageAcceuil1.css'
import kevyn from '../assets/kevyn.webp'


 function CadreCouleur(){
    return <div className = "grandCarde" >
            <div className="conteneur">
                <div className='row'>
                        <div className='col-8'>
                            <div className='tout'>
                                <div className='Mr'><h1> Mr.Delafric</h1></div>
                                <div className='titre'><h2> Ingenieur logiciel</h2></div>
                                <div className='slogan'><h3> consectetur adipisicing elit. Repellat  eligendi, autem illum odi Repellat  eligendi, autem illum odi</h3></div>
                                <ul className='row conteneurCV'>
                                    <li className='col-6 cv'>Téléchargement Cv</li>
                                    <div className='row col-6 conteneurReseau'>
                                        <li className='col-4 wat'><i className="bi bi-whatsapp"></i></li>
                                        <li className='col-4 tiktok'><i className="bi bi-tiktok"></i></li>
                                        <li className='col-4 fb'><i className="bi bi-facebook"></i></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className='col-4 imagekevyn'>
                                <img src={kevyn} alt="image Kevyn"/>

                        </div>
                </div>
            </div>
                
    </div>
 }

 function Liste(){
    return <div>
        <div className='listParent '>          
                <ul className='row'>
                    <li className='col-3'>À propos</li>
                    <li className='col-3'>Services</li>
                    <li className='col-3'>Projets</li>
                    <li className='col-3'>Contact</li>
                </ul>   
        </div>
        {/* <nav className="navbar navbar-expand-md-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className=" row navbar-nav ">
                        <li className='col-3'>À propos</li>
                        <li className='col-3'>Services</li>
                        <li className='col-3'>Projets</li>
                        <li className='col-3'>Contact</li>
                    </ul>
                </div>
            </div>
        </nav> */}
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