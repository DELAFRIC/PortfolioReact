 import './pageAcceuil1.css'
import pto from '../assets/pto.gif'


 function CadreCouleur(){
    return <div className = "grandCarde" >
            <div className="parent">
                <div className='row'>
                        <div className='col-8'>
                            <div>
                                <div><h1> Mr.Delafric</h1></div>
                                <div><h2> Igenieur logiciel</h2></div>
                                <div><h3> consectetur adipisicing elit. Repellat  eligendi, autem illum odi</h3></div>
                                <div className='row'>
                                    <div className='col-6'><p>Téléchargement Cv</p></div>
                                    <div className='col-2'><p>wat</p></div>
                                    <div className='col-2'><p>tiktok</p></div>
                                    <div className='col-2'><p>Fb</p></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div>
                                <img src={pto} alt="image delafric" style ={{width:"70%"}}/>
                            </div>
                        </div>
                </div>
            </div>
                
    </div>
 }

 function Liste(){
    return <div>
        <div className='listParent'>
            <div>
                <ul>
                    <li>A propos</li>
                    <li>Services</li>
                    <li>Projets</li>
                    <li>Contact</li>
                </ul>
            </div>
           
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
        {/* <div> */}
            <Sorti/>
        {/* </div> */}

    </>
}