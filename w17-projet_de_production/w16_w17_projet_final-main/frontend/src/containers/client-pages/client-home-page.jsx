import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

import "./css/client-home-page.css";
import SearchBar from "../../components/search-bar";
import { Nav, Navbar, Container, Row, Col, Form } from "react-bootstrap";
import logoImage from "./img/easybk.png";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import Cookies from "js-cookie";
import { LanguageProvider } from "../languageContext";
import LangueComponent from "../../components/langue-component";
import TransparentFooter from "../../components/Footers/TransparentFooter";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "accueil",
      selectedLanguage: "fr",
      offres: [],
      // offers: [
      //   {
      //     id: 1,
      //     imageUrl:
      //       "https://silkroadexplore.com/wp-content/uploads/2018/12/0_11ac60_21e366ee_orig.jpg",
      //     publicationDate: "01/09/2023",
      //     description: "Baku, Azerbaijan",
      //     agencyName: "Agence 1",
      //   },
      //   {
      //     id: 2,
      //     imageUrl:
      //       "https://a.cdn-hotels.com/gdcs/production192/d307/5fe14a1a-edf9-4773-89fe-3455afa9d0dd.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      //     publicationDate: "01/09/2023",
      //     description: "Sydney, Australia",
      //     agencyName: "Agence 2",
      //   },
      //   {
      //     id: 3,
      //     imageUrl:
      //       "https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg",
      //     publicationDate: "01/09/2023",
      //     description: "Istanbul, Turkey",
      //     agencyName: "Agence 3",
      //   },
      //   {
      //     id: 4,
      //     imageUrl:
      //       "https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg",
      //     publicationDate: "01/09/2023",
      //     description: "New York, US",
      //     agencyName: "Agence 4",
      //   },
      //   {
      //     id: 5,
      //     imageUrl:
      //       "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
      //     publicationDate: "01/09/2023",
      //     description: "Paris, France",
      //     agencyName: "Agence 5",
      //   },
      //   {
      //     id: 6,
      //     imageUrl:
      //       "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
      //     publicationDate: "01/09/2023",
      //     description: "Male, Maldives",
      //     agencyName: "Agence 6",
      //   },
      //   // {
      //   //   id: 7,
      //   //   imageUrl:
      //   //     "https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2339009.jpg&fm=jpg",
      //   //   publicationDate: "01/09/2023",
      //   //   description: "Tokyo, Japan",
      //   //   agencyName: "Agence 7",
      //   // },
      //   // {
      //   //   id: 8,
      //   //   imageUrl:
      //   //     "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/msnbc/Components/Photo/_new/080821-tripoli-hmed-410p.jpg",
      //   //   publicationDate: "01/09/2023",
      //   //   description: "Dakar, Senegal",
      //   //   agencyName: "Agence 8",
      //   // },
      //   // {
      //   //   id: 9,
      //   //   imageUrl:
      //   //     "https://lp-cms-production.imgix.net/features/2017/09/dubai-marina-skyline-2c8f1708f2a1.jpg?auto=compress&fit=crop&format=auto&q=50&w=1200&h=800",
      //   //   publicationDate: "01/09/2023",
      //   //   description: "Dubai, UAE",
      //   //   agencyName: "Agence 9",
      //   // },
      //   // {
      //   //   id: 10,
      //   //   imageUrl:
      //   //     "https://d3h95ubkn73ryw.cloudfront.net/wp-content/uploads/2014/12/london1.jpg?x23611",
      //   //   publicationDate: "01/09/2023",
      //   //   description: "London, UK",
      //   //   agencyName: "Agence 10",
      //   // },
      // ],
      searchQuery: "",
      user: null, // Initialiser l'état de l'utilisateur à null
      newPassword: "", // État pour le nouveau mot de passe
      passwordChangeSuccess: false, // État pour le message de succès
      passwordChangeError: false, // État pour le message d'erreur
    };
    console.log(this.props.user);
  }

  componentDidMount() {
    this.fetchUserProfile();
    // Effectuez une requête AJAX pour récupérer les données depuis votre API
    fetch("http://localhost:5000/offrespopulaire")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ offres: data });

        // Mettez à jour l'état avec les données récupérées
      })
      .catch((error) => console.error(error));
    console.log(this.state.offres);
  }

  // renderOffresPopulaires() {
  //   console.log("Offres dans l'état :", this.state.offres);

  //   // Filtrer les offres populaires
  //   const offresPopulaires = this.state.offres.filter(
  //     (offre) => offre.populaire
  //   );

  //   return offresPopulaires.map((offre) => (
  //     <div key={offre.id}>
  //       <h2>Nom de l'offre : {offre.nom_offre}</h2>
  //       <p>Description : {offre.description}</p>
  //       <p>Prix : {offre.prix} EUR</p>
  //     </div>
  //   ));
  // }

  renderOffresPopulaires = () => {
    // Filtrer les offres populaires
    const offresPopulaires = this.state.offres.filter(
      (offre) => offre.populaire
    );
    return offresPopulaires.map((offre) => (
      <div className="offer">
        <img src={offre.image} className="offer-image" alt={offre.nom_offre} />
        <div className="offer-description">
          <h5 className="desc">{offre.nom_offre}</h5>
          <p>Prix: {offre.total_price}</p>
        </div>
        <button className="btn-primary">Réserver</button>
      </div>
    ));
  };

  // Fonction pour récupérer les informations de l'utilisateur depuis votre API
  async fetchUserProfile() {
    try {
      const userEmail = Cookies.get('user_email');
      console.log("User Email from Cookie:", userEmail);
      const response = await axios.get(`http://localhost:5000/users/${userEmail}`);
      const userData = response.data;
      console.log("userDataa :",userData);
      console.log("User Email from Cookie:", Cookies.get('user_email'));
      console.log("User Telephone from Cookie:", Cookies.get("user_telephone"));

      // Stockez les informations de l'utilisateur dans les cookies
      Cookies.set("user_nom", userData.nom);
      Cookies.set("user_prenom", userData.prenom);
      Cookies.set("user_email", userData.mail);
      Cookies.set("user_telephone", userData.tel);

      this.setState({ user: userData });
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'utilisateur :",
        error
      );
    }
  }

  handleTabChange = async (tab) => {
    console.log("Activation de l'onglet :", tab);
    this.setState({ activeTab: tab });

    if (tab === "profil") {
      try {
        // Code pour gérer l'onglet "Profil"
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur :",
          error
        );
      }
    }
  };

  handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    this.setState({ selectedLanguage });
  };

  handleChangePassword = async () => {
    const { newPassword } = this.state;

    try {
      const response = await axios.post(
        "http://localhost:5000/changepassword",
        {
          newPassword,
        }
      );

      if (response.status === 200) {
        // Changement de mot de passe réussi
        this.setState({
          passwordChangeSuccess: true,
          passwordChangeError: false,
          newPassword: "", // Réinitialisez le champ du nouveau mot de passe
        });
      } else {
        // Gérez les erreurs ici
        this.setState({
          passwordChangeSuccess: false,
          passwordChangeError: true,
        });
      }
    } catch (error) {
      // Gérez les erreurs réseau ici
      console.error("Erreur lors du changement de mot de passe :", error);
      this.setState({
        passwordChangeSuccess: false,
        passwordChangeError: true,
      });
    }
  };

  // Fonction pour gérer la recherche
  handleSearchChange = (event) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery }, () => {
      console.log("Recherche en cours :", this.state.searchQuery);
    });
  };
  handleLogout = () => {
    // Supprimer les cookies de l'utilisateur
    Cookies.remove("user_nom");
    Cookies.remove("user_prenom");
    Cookies.remove("user_email");
    Cookies.remove("user_telephone");

    window.location.href = "/login";
  };

  renderNavBar = () => {
    return (
      <Navbar className="transparent-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#accueil">
            <img
              src={logoImage}
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="Votre Logo"
              onClick={() => this.handleTabChange("accueil")}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                href="#accueil"
                onClick={() => this.handleTabChange("accueil")}
                className="nav-link-icon"
              >
                <i className="fa fa-home"></i>{" "}
                <span className="nav-link-text">Accueil</span>
              </Nav.Link>
              <Nav.Link
                href="#recherche"
                onClick={() => this.handleTabChange("recherche")}
                className="nav-link-icon"
              >
                <i className="fa fa-search"></i>{" "}
                <span className="nav-link-text">Recherche</span>
              </Nav.Link>
              <Nav.Link
                href="#profil"
                onClick={() => this.handleTabChange("profil")}
                className="nav-link-icon"
              >
                <i className="fa fa-user"></i>{" "}
                <span className="nav-link-text">Profil Client</span>
              </Nav.Link>
              <Nav.Link
                href="#logout"
                onClick={this.handleLogout}
                className="nav-link-icon"
              >
                <i className="fa fa-sign-out"></i>{" "}
                <span className="nav-link-text">Déconnexion</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

  renderClientInfoForm = () => {
    const { user } = this.state;
    if (!user) {
      return (
        <Form className="mx-auto">
          <Form.Group controlId="formNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" value="" readOnly />
          </Form.Group>
          <Form.Group controlId="formPrenom">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text" value="" readOnly />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value="" readOnly />
          </Form.Group>
          <Form.Group controlId="formTelephone">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control type="text" value="" readOnly />
          </Form.Group>
        </Form>
      );
    }
    
    return (
      <Form className="mx-auto">
        <Form.Group controlId="formNom">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" value={user.nom} readOnly />
        </Form.Group>
        <Form.Group controlId="formPrenom">
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="text" value={user.prenom} readOnly />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={user.mail} readOnly />
        </Form.Group>
        <Form.Group controlId="formTelephone">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control type="text" value={user.tel} readOnly />
        </Form.Group>
      </Form>
    );
  }

  render() {
    return (
      <Router>
        <LanguageProvider>
          {this.state.activeTab === "accueil" && (
            <div className="containerAccueil">
              <Container className="mt-5">
                {/* Add top margin to create space */}
                {/* Offers Section */}
                <div className="banner">
                  {/* Navigation Bar */}
                  {this.renderNavBar()}
                </div>
                <div className="sliderContainer">
                  <div className="slides">
                    <div className="slide">
                      <img
                        src="https://www.bestjobersblog.com/wp-content/uploads/2018/07/CHECK-LIST-VACANCES-2.jpg"
                        alt="3"
                      />
                    </div>
                    <div className="slide">
                      <img
                        src="https://www.ravage.fr/wp-content/uploads/2017/11/Voyages-Vacances-e1509741169115-1.jpg"
                        alt="1"
                      />
                    </div>
                    <div className="slide">
                      <img
                        src="https://api.ellequebec.com/app/uploads/2022/04/Destinations-europe-2022.jpg"
                        alt="2"
                      />
                    </div>
                  </div>
                </div>
                <div className="designTitle">
                  <p>Le plus beau voyage, c'est celui qu'on</p>
                  <p>n'a pas encore fait.</p>
                  <h6>Loïck Peyron</h6>
                </div>

                <Row>{this.renderOffresPopulaires()}</Row>
                <div className="fh">
                  <div className="flights">
                    <img
                      src="https://wallpapers.com/images/hd/flight-zgveis6o1hmvkhcy.jpg"
                      alt="flights"
                    />
                    <h2>Flights</h2>
                    <p>Voyager pour le plaisir de voyager.</p>
                  </div>
                  <div className="hotels">
                    <img
                      src="https://media.istockphoto.com/id/472899538/photo/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab.jpg?s=612x612&w=0&k=20&c=rz-WSe_6gKfkID6EL9yxCdN_UIMkXUBsr67884j-X9o="
                      alt="flights"
                    />
                    <h2>Hotels</h2>
                    <p>Jusqu'à ce que demain vienne!!</p>
                  </div>
                </div>

                <p>
                  « Personne ne réalise à quel point il est agréable de voyager
                  jusqu'à ce que l'on rentre chez soi et que l'on pose sa tête
                  sur son vieil oreiller familier. » - Lin Yutang
                </p>
                <h2>Reviews</h2>
                <div className="Fit">
                  <div className="hotel1">
                    <h2>Dubai,UAE</h2>
                    <p>$$$$</p>
                    <button>Book Now</button>
                  </div>
                  <div className="hotel2">
                    <h2>Paris,FRA</h2>
                    <p>$$$$</p>
                    <button>Book Now</button>
                  </div>
                  <div className="hotel3">
                    <h2>Sydney,AUS</h2>
                    <p>$$$$</p>
                    <button>Book Now</button>
                  </div>
                  <div className="hotel4">
                    <h2>London.UK </h2>
                    <p>$$$$</p>
                    <button>Book Now</button>
                  </div>
                </div>
                <TransparentFooter />
              </Container>
            </div>
          )}

          {this.state.activeTab === "recherche" && (
            <div>
              <Container>
                <Row>
                  <h1>Voici la recherche</h1>
                </Row>

                <Row className="mt-4">
                  <Col>
                    <SearchBar
                      searchQuery={this.state.searchQuery}
                      onSearchChange={this.handleSearchChange}
                    />
                    {this.state.searchQuery && (
                      <p>Vous recherchez : {this.state.searchQuery}</p>
                    )}
                  </Col>
                </Row>
              </Container>
            </div>
          )}
{this.state.activeTab === "profil" && (
  <div className="bodyProfil">
    <div className="navBar">
    {this.renderNavBar()}
    </div>
    <div className="contentWrapper">
    <div className="profil">
      <div className="card-block text-center text-white">
        <div className="m-b-25">
          <img
            src="https://img.icons8.com/bubbles/100/000000/user.png"
            className="img-radius"
            alt={`${this.state.user.prenom} ${this.state.user.nom}`}
          />
        </div>
        <p className="f-w-600">
          {this.state.user.prenom} {this.state.user.nom}
        </p>
        <p>Client</p>
      </div>
    </div>
    <div className="clientInfoForm">
      {this.renderClientInfoForm()}
    </div>
   </div> 
  </div>
)}
        </LanguageProvider>
      </Router>
    );
  }
}

export default HomePage;
