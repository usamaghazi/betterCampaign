import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import Header from '../Header/Header';
import HeaderBottom from './HeaderBottom';
import Button from '../Button/Button';
import Footer from './Footer/Footer';
import  './Webdesign';

const Webdesign = () => {
return (
    <>
    <Header/>
    <HeaderBottom />
    <div className="container mb-3" >
    <div className="row p-1">
        <div className="col-lg-6">
        <h2 className="PreHeader">
               Website ontwikkeling
        </h2> 
        <h3 className="EntityHeader">
        Maak van je website een ware lead machine.
        </h3>
        <p className="Paragraph">
        Hoe maak je indruk met je bedrijf in een overvol online landschap? Het hebben van een website is allang niet meer voldoende om klanten te overtuigen. Daar is toch echt meer voor nodig! 
        </p>
        <p className="Paragraph">
        Wij helpen je met het ontwikkelen van een ijzersterke website waarmee je indruk maakt. Op basis van een sterke online strategie als fundament, ontwikkelen we een website die perfect inspeelt op de behoeften van je doelgroep. We zorgen ook voor optimale condities voor betere vindbaarheid in Google!
        </p>
        <p className="Paragraph">
        Benieuwd wat wij voor jou kunnen regelen? Stuur ons een bericht.
        </p>
        <span>
                <Button btnType="MainPageButton">
                  Ontvang vrijblijvend advise
                </Button>
              </span>
        </div>
        <div className="col-lg-6 SecondDiv">
        {/* <ul className="fa-ul">
        <li><span className="fa-li"><i className="far fa-square"></i></span>in lists</li>
        </ul> */}
        <ul className="UnOrderList">
          <li className="ListStyle"><FontAwesomeIcon icon={faSquare} className="ListIconStyle" /><h6 className="ListText">Een professionele website waarmee je indruk maakt;</h6></li>
          <li className="ListStyle"><FontAwesomeIcon icon={faSquare} className="ListIconStyle" /><h6 className="ListText">Ingericht voor optimale conversie, meer leads en sales;</h6></li>
          <li className="ListStyle"><FontAwesomeIcon icon={faSquare} className="ListIconStyle" /><h6 className="ListText">Beter vindbaar dankzij zoekmachine optimalisatie (SEO);</h6></li>
          <li className="ListStyle"><FontAwesomeIcon icon={faSquare} className="ListIconStyle" /><h6 className="ListText">Vergroot het onderscheidend vermogen van je merk;</h6></li>
          <li className="ListStyle"><FontAwesomeIcon icon={faSquare} className="ListIconStyle" /><h6 className="ListText">Een website ontwerp op maat, uniek voor jouw bedrijf</h6></li>
          <li className="ListStyle"><FontAwesomeIcon icon={faSquare} className="ListIconStyle" /><h6 className="ListText">Responsive ontwerp, dus perfect op alle devices;</h6></li>
          <li className="ListStyle"><FontAwesomeIcon icon={faSquare} className="ListIconStyle" /><h6 className="ListText">100% toewijding en support bij oplevering;</h6></li>
        </ul>
        </div>
    </div>

    </div>
    {/*Third Portion */}
    <div className="container NoticeBoxContainer">
      <div className="row ">
        <div className="col-12 NoticeBox">
        <p className="NoticeBoxHeading">
        Ontvang een gratis website APK 
          </p>
          <p className="SecondPara">
          Wat kan er beter aan je huidige website? En wat is misschien al helemaal goed? Wij checken je website op 27 punten die belangrijk zijn voor vindbaarheid, conversie en gebruiksvriendelijkheid. Vul de korte vragenlijst in en ontvang een rapport met vrijblijvend advies van een professional.
          </p>
          <span>
                <Button btnType="MainPageButton">
                  Start minjin website APK
                </Button>
              </span>
        </div>
      </div>
    </div>
    {/*Fourth Portion */}
    <div className="container ItemsContainer">
      <div className="row">
        <div className="col-12">
        <h2 className="PreHeader">
              Portfolio
        </h2>
        <h3 className="ProtfolioHeader">
        Laat je inspireren door <br/>een aantal van onze<br/> websites.
        </h3> 
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-2">
        <img src="https://gatsby.bettercampaign.nl/wp-content/uploads/2021/11/Better-Campaign-portfolio-flexstay-website-ontwikkeling-1024x717.jpg"
         alt="pic"
         className="img-responsive"/>
        </div>
        <div className="col-md-6 p-2">
        <img src="https://gatsby.bettercampaign.nl/wp-content/uploads/2021/11/Better-Campaign-portfolio-iris-haaksma-website-ontwikkeling-1024x717.jpg"
         alt="pic"
         className="img-responsive"/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 p-2">
        <img src="https://gatsby.bettercampaign.nl/wp-content/uploads/2021/11/Better-Campaign-portfolio-booiman-tuinen-website-ontwikkeling-1024x717.jpg"
         alt="pic"
         className="img-responsive"/>
        </div>
        <div className="col-md-6 p-2">
        <img src="https://gatsby.bettercampaign.nl/wp-content/uploads/2021/11/Better-Campaign-portfolio-ruimtehouders-website-ontwikkeling-1024x717.jpg"
         alt="pic"
         className="img-responsive"/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 p-2">
        <img src="https://gatsby.bettercampaign.nl/wp-content/uploads/2021/11/Better-Campaign-portfolio-la-calma-diving-website-laten-maken-homepage-1024x717.jpg"
         alt="pic"
         className="img-responsive"/>
        </div>
        <div className="col-md-6 p-2">
        <img src="https://gatsby.bettercampaign.nl/wp-content/uploads/2021/11/Better-Campaign-portfolio-sealane-website-ontwikkeling-1024x717.jpg"
         alt="pic"
         className="img-responsive"/>
        </div>
      </div>
    </div>
    {/*Zo Gaan*/}
    <div className="container">
      <div className="row">
        <div className="col-12 p-5 text-center">
        <h3 className="ProtfolioHeader p-1">
        Zo gaan wij te werk
        </h3>
        <p className="SecondParagraph">
        Stel, je wilt door ons een WordPress website laten maken. Wat kun je dan verwachten? Dit zijn de stappen die we doorlopen om jouw website perfect te maken.
        </p>
        </div>
      </div>
      </div>
      {/*Four Boxes */}
      <div className="container">
        <div className="row">
        <div className="col-md-6 p-0">
          <div className="p-5 m-1 BoxSize" style={{ backgroundColor: '#F2F5F7'}}>
           <p className="Number">
             01
           </p> 
           <h3 className="BoxHeading">
              Strategic
           </h3>
           <p className="BoxDescription">
           Dit is de basis voor een goed presterende nieuwe website. De oude website wordt doorgenomen, we bekijken de doelen, 
           KPI’s en persona’s in de kickoff meeting.
           </p>
           </div>
          </div>
          <div className="col-md-6 p-0">
          <div className="p-5 m-1 BoxSize" style={{ backgroundColor: '#F2F5F7' }}>
           <p className="Number">
           02
           </p> 
           <h3 className="BoxHeading">
           Ontwerp & Ontwikkeling
           </h3>
           <p className="BoxDescription">
           We maken eerst conceptontwerpen voor de website en doen een voorstel voor de structuur die werkt voor vindbaarheid én bezoekers. 
           Akkoord? Dan starten we met de ontwikkeling.
           </p>
           </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-6 p-0">
          <div className="p-5 m-1 BoxSize" style={{ backgroundColor: '#F2F5F7' }}>
           <p className="Number">
           03
           </p> 
           <h3 className="BoxHeading">
           Testen
           </h3>
           <p className="BoxDescription">
           Na de ontwikkeling wordt er getest door ons, maar ook door jullie. De content kan bovendien gevuld worden.
           </p>
           </div>
          </div>
          <div className="col-md-6 p-0">
          <div className="p-5 m-1 BoxSize" style={{ backgroundColor: '#F2F5F7' }}>
           <p className="Number">
           04
           </p> 
           <h3 className="BoxHeading">
           Oplevering
           </h3>
           <p className="BoxDescription">
           Klaar voor lancering? We zetten de website live én stellen alle benodigde tools in om data te verzamelen. Ook geven we je een training om zelf je website te kunnen onderhouden.
           </p>
           </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
)

}

export default Webdesign


 