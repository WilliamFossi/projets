import React, { Component } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import "./css/profile_agency.css"

class ProfileAgency extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     offres:[],
  //     agency:null // initiaiser l'etat de l'agence
  //   };
  //   console.log(this.props.agency);
  // }
  // componentDidMount(){
  //   this.fetchAgencyProfile();

  //    // Effectuez une requête AJAX pour récupérer les données depuis votre API
  //    fetch("http://localhost:5000/offrespopulaire")
  //    .then((response) => {
  //      if (!response.ok) {
  //        throw new Error("la réponse du serveur n'est pas bonne");
  //      }
  //      return response.json();
  //    })
  //    .then((data) => {
  //     console.log(data);
  //     this.setState({ offres: data });

  //     // Mettre à jour l'état avec les données récupérées
  //   })
  //   .catch((error) => console.error(error));
  // console.log(this.state.offres);
  // }

  // async fetchAgencyProfile() {
  //   try {
  //     const agencyEmail = Cookies.get('agency_email');
  //     console.log("Agency mail from Cookie:", agencyEmail);
  //     const response = await axios.get(`http://localhost:5000/users/${agencyEmail}`);
  //     const agencyData = response.data;
  //     console.log("agencyData :",agencyData);
  //     console.log("Agency mail from Cookie:", Cookies.get('agency_email'));
  //     console.log("Agency Telephone from Cookie:", Cookies.get("agency_telephone"));

  //     // Stocker les informations de l'agence dans les cookies
  //     Cookies.set("user_nom", agencyData.nom);
  //     Cookies.set("user_prenom", agencyData.prenom);
  //     Cookies.set("user_email", agencyData.mail);
  //     Cookies.set("user_telephone", agencyData.tel);

  //     this.setState({ agency: agencyData });
  //   } catch (error) {
  //     console.error(
  //       "Erreur lors de la récupération des données de l'agence :",
  //       error
  //     );
  //   }
  // }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-12 p-0">
            <nav aria-label="breadcrumb ">
              <ol class="breadcrumb py-3 px-3">
                <li class="breadcrumb-item active" aria-current="page">
                  Official Profile Of St Louis Agency Corporation
                </li>
              </ol>
            </nav>
          </div>
          <div class="col-md-5">
            <div class="row">
              <div class="col-12 bg-white p-0 px-3 py-3 mb-3">
                <div class="d-flex flex-column align-items-center">
                  {/* <img
                    class="photo"
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.postermywall.com%2Findex.php%2Fart%2Ftemplate%2Faccace836cdf525328b7233de739e8d6%2Ftravel-logo%252Ctravel-agency-logo%252Ctravel-%2526-tour-design-template&psig=AOvVaw3L0yeomaeWQJNS6h-5yDxy&ust=1695218560244000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOiOy7LrtoEDFQAAAAAdAAAAABAE"
                    alt=""
                  /> */}
                  {/* <p class="fw-bold h4 mt-3">St Louis Agency Corporation</p> */}
                  <h1>St Louis Agency Corporation</h1>
                  <p class="text-muted">
                  St Louis Agency est la compagnie aérienne internationale
                    africaine, contrôlée à 100 % par l'Union Africaine. Elle a
                    été fondée en 1945 sous le nom de Travel Agence (TA)
                    et a adopté son nom actuel en 1965. Elle fait partie de
                    l'Association internationale du transport aérien depuis 1959
                    et de l'Association aérienne africaine depuis sa création en
                    1968.
                  </p>
                </div>
              </div>
              <div class="col-12 bg-white p-0 px-2 pb-3 mb-3">
                {
                  <div class="d-flex justify-content-between border-bottom py-2 px-3">
                    <p>
                      <span class="fas fa-globe me-2"></span>Site Web
                    </p>
                    <a href="#">https://StLouisAgency.com</a>
                  </div>
                }
                {
                  <div class="d-flex justify-content-between border-bottom py-2 px-3">
                    <p>
                      <span class="fab fa-twitter me-2"></span>Twitter
                    </p>
                    <a href="">https://twitter.com/StLouisAgency</a>
                  </div>
                }
                {
                  <div class="d-flex justify-content-between border-bottom py-2 px-3">
                    <p>
                      <span class="fab fa-instagram me-2"></span>Instagram
                    </p>
                    <a href="">www.instagram.com/StLouisAgency</a>
                  </div>
                }
                {
                  <div class="d-flex justify-content-between py-2 px-3">
                    <p>
                      <span class="fab fa-facebook-f me-2"></span>facebook
                    </p>
                    <a href="">www.facebook.com/StLouisAgency</a>
                  </div>
                }
              </div>
            </div>
          </div>
          <div class="col-md-7 ps-md-4">
            <div class="row">
              <div class="col-12 bg-white px-3 mb-3 pb-3">
                <div class="d-flex align-items-center justify-content-between border-bottom">
                  <p class="py-2">Nom complet</p>
                  <p class="py-2 text-muted">St Louis Agency Corporation</p>
                </div>
                <div class="d-flex align-items-center justify-content-between border-bottom">
                  <p class="py-2">Email</p>
                  <p class="py-2 text-muted">stLouisAgency@gmail.com</p>
                </div>
                <div class="d-flex align-items-center justify-content-between border-bottom">
                  <p class="py-2">Cellulaire</p>
                  <p class="py-2 text-muted">(438)816-9029</p>
                </div>
                <div class="d-flex align-items-center justify-content-between border-bottom">
                  <p class="py-2">Mobile</p>
                  <p class="py-2 text-muted">(514)380-4539</p>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <p class="py-2">Adresse</p>
                  <p class="py-2 text-muted">Montréal,Yaounde,Dakar,Lome,Rabat</p>
                </div>
              </div>
              <div class="col-12 bg-white px-3 pb-2">
                <h6 class="d-flex align-items-center mb-3 fw-bold py-3">
                  <i class="text-info me-2">Guide</i> Evaluatif des Compagnies
                  Aériennes Africaines
                </h6>
                <small>Ponctualité</small>
                <div class="progress mb-3" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Fiabilité</small>
                <div class="progress mb-3" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "92% " }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Tarifs privilgiés</small>
                <div class="progress mb-3" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Qualité de service</small>
                <div class="progress mb-3" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Service Client</small>
                <div class="progress mb-3" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileAgency;