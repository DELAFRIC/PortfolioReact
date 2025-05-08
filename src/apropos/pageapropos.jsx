import './pageApropos.css'
import { BrowserRouter as Router, Routes, Route,Link,Outlet } from "react-router-dom";

function Navigation(){
    return <>
        {/* listParent */}
        <div className ="row">
            <div className="col-6" >
                <h1>Mr.Delafric</h1>
            </div>
            <div className="col-6">
                <nav >
                    <ul className="row">
                        <li className='col-3'><Link to="/">Accueil</Link></li>
                        {/* <li className='col-3'><Link to="/apropos/pageapropos">À propos</Link></li> */}
                        <li className='col-3'><Link to="/service/pageService">Service</Link></li>
                        <li className='col-3'><Link to="/projet/pageProjet">Projets</Link></li>
                        <li className='col-3'><Link to="/contact/pageContact">Contact</Link></li>
                    </ul>
                </nav>
            </div>

        </div>
        
    </>
}

function Presentation(){
 return <div>
     <h4 id="list-item-1">Item 1</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
            
 </div>
}
function Formation(){
    return <div>
         <h4 id="list-item-1">Item 2</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
            
    </div>
}
function Experience(){
    return <div>
    <h4 id="list-item-1">Item 3</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
       
</div>
}
function Competence(){
    return <div>
    <h4 id="list-item-1">Item 4</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet rem sequi exercitationem repellat error maxime aut aliquid numquam sunt! Quidem modi similique autem quo repudiandae aperiam fuga nulla nostrum.</p>
       
</div>
}

// Layout avec le menu et Outlet
function Layout() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="presentation">Présentation</Link></li>
            <li><Link to="formation">Formation</Link></li>
            <li><Link to="experience">Expérience</Link></li>
            <li><Link to="competence">Compétence</Link></li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>
    );
  }
  
  export default function Apropos() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Presentation />} />
            <Route path="presentation" element={<Presentation />} />
            <Route path="formation" element={<Formation />} />
            <Route path="experience" element={<Experience />} />
            <Route path="competence" element={<Competence />} />
          </Route>
        </Routes>
      </Router>
    );
  }