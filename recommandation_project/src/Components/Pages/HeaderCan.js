import React from "react";
import notif from "../../assets/icons/noti.png";
import message from "../../assets/icons/message.png"
import agenda from "../../assets/icons/agenda.png"
const HeaderCan = () =>{
    return (
        <div>
<header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink/></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">  
          <div className="iconmesg"><img src={message} width='22' height='22'/></div>
          <div className="iconnotif"><img src={notif} width='22' height='22'/></div>
          <div className="iconagenda"><img src={agenda} width='22' height='22'/></div>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Menu</a></li>
            <li><a class="dropdown-item" href="#">Aide </a></li>
            <li><a class="dropdown-item" href="#">Votre Avis</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Déconnexion</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  </div>
  );
  }
  
  export default HeaderCan;