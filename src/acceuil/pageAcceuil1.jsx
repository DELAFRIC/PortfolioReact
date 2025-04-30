import './pageAcceuil1.css'
import kevyn from '../assets/kevyn.webp'
// import cvmax from '../public/cvmax.pdf'



function CadreCouleur() {
    function handleWat() {
        let encodedMessage = " "
        const url = `https://wa.me/2250150152166?text=${encodedMessage}`;
        window.open(url, "_blank");
    }
      function handleCv(){
        const link = document.createElement("a");
        link.href ="/cvmax.pdf";
        link.download = "Kevyn-Delafric-CV.pdf";
        link.click();
      }
    return <div className="grandCarde" >
        <div className="conteneur">
            <div className='row conteneur1'>
                <div className='col-8 '>
                    <div className='tout'>
                        <div className='Mr'><h1> Mr.Delafric</h1></div>
                        <div className='titre'><h2> Ingenieur logiciel</h2></div>
                        <div className='slogan'><h3> consectetur adipisicing elit. Repellat  eligendi, autem illum odi Repellat  eligendi, autem illum odi</h3></div>
                        <div className='row conteneurCV'>
                            <button className='col-6 cv' onClick={handleCv}>Téléchargement Cv</button>
                            <div className='row col-6 conteneurReseau'>
                                <button className='col-4 wat' onClick={handleWat}><i className="bi bi-whatsapp"></i></button>
                                <button className='col-4 tiktok' ><i className="bi bi-tiktok"></i></button>
                                <button className='col-4 fb'><i className="bi bi-facebook"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4 imagekevyn'>
                    <img src={kevyn} alt="image Kevyn" />

                </div>
            </div>
        </div>

    </div>
}


function Liste() {
    return <div>
        <div className='listParent '>
            <ul className='row'>
                <li className='col-3'>À propos</li>
                <li className='col-3'>Services</li>
                <li className='col-3'>Projets</li>
                <li className='col-3'>Contact</li>
            </ul>
        </div>
    </div>
}

function Sorti() {
    return <>
        <div>
            <CadreCouleur />
            <Liste />
        </div>

    </>
}



export default function AppPageAcceuil1() {
    return <>
        <Sorti />
    </>
}