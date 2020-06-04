import React from 'react';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import avatar from '../assets/img/avatar.png';
import loader from '../assets/img/loader.gif';
import alert from '../assets/img/anim/calm---alert.gif';
import check from '../assets/img/anim/calm---check.gif';
import curious from '../assets/img/anim/calm---curious.gif';
import heart from '../assets/img/anim/calm---heart.gif';
import listening from '../assets/img/anim/calm---listening.gif';
import positiv from '../assets/img/anim/calm---positiv.gif';
import question from '../assets/img/anim/calm---question.gif';
import sad from '../assets/img/anim/calm---sad.gif';
import CustomChatbot from '../components/customChatbot';


const ImagenBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {

    
    



    // choise_img = (nameimg) => {
    //     switch(nameimg) {
    //       case 'alert':
    //         return this.setState({alert: "dblock",check: "dnone",curious: "dnone",heart: "dnone",listening: "dnone",positiv: "dnone",question: "dnone",sad: "dnone"});
    //       case 'check':
    //         return this.setState({alert: "dnone",check: "dblock",curious: "dnone",heart: "dnone",listening: "dnone",positiv: "dnone",question: "dnone",sad: "dnone"});
    //       case 'curious':
    //         return this.setState({alert: "dnone",check: "dnone",curious: "dblock",heart: "dnone",listening: "dnone",positiv: "dnone",question: "dnone",sad: "dnone"});
    //       case 'heart':
    //         return this.setState({alert: "dnone",check: "dnone",curious: "dnone",heart: "dblock",listening: "dnone",positiv: "dnone",question: "dnone",sad: "dnone"});
    //       case 'listening':
    //         return this.setState({alert: "dnone",check: "dnone",curious: "dnone",heart: "dnone",listening: "dblock",positiv: "dnone",question: "dnone",sad: "dnone"});
    //       case 'positiv':
    //         return this.setState({alert: "dnone",check: "dnone",curious: "dnone",heart: "dnone",listening: "dnone",positiv: "dblock",question: "dnone",sad: "dnone"});
    //       case 'question':
    //         return this.setState({alert: "dnone",check: "dnone",curious: "dnone",heart: "dnone",listening: "dnone",positiv: "dnone",question: "dblock",sad: "dnone"});
    //       case 'sad':
    //         return this.setState({alert: "dnone",check: "dnone",curious: "dnone",heart: "dnone",listening: "dnone",positiv: "dnone",question: "dnone",sad: "dblock"});
    //       default:
    //         return null;
    //     }
    // }
    
    // useEffect(()=> { 
    //   const el = document.querySelector('figure');
    //   this.setState({top: el.offsetTop, height: el.offsetHeight});
    //   window.addEventListener('scroll', this.handleScroll);
    //   this.choise_img("alert");
    //   setTimeout(() => {
    //     this.setState({styledsc: "dblock",loader:"d-none"});
    // }, 2000);
    // setTimeout(() => {
    //   this.setState({stylebtn: "dblock"});
    // }, 3000);
    // },[]);


    return ( 
        <Layout>
         
         <section className="pb-5" style={{paddingTop:'190px',minHeight:'1000px'}}>
    <h2 className="mt-3 mb-3">Hi, I’m Neela,<br/>Aareon’s Virtual Assistant.</h2>
    <div className="figure">
    <figure className={"d-flex justify-content-center"}>
          <img src={alert} alt="alert" width="300" style={{position:'absolute'}} className={"d-none"} />
          <img src={check} alt="check" width="300" style={{position:'absolute'}} className={"d-none"} />
          <img src={curious} alt="curious" width="300" style={{position:'absolute'}} className={"dblock"}  />
          <img src={heart} alt="heart" width="300" style={{position:'absolute'}} className={"d-none"}  />
          <img src={listening} alt="listening" width="300" style={{position:'absolute'}} className={"d-none"}  />
          <img src={positiv} alt="positiv" width="300" style={{position:'absolute'}} className={"d-none"} />
          <img src={sad} alt="sad" width="300" style={{position:'absolute'}} className={"d-none"}  />
          <img src={question} alt="question" width="300" style={{position:'absolute'}} className={"d-none"}  />
            </figure>
            </div>    
            <div className="container">
    <div className="row">
        <div className="col-lg-12 col-md-12 text-center mt-5 pfull-div">
            <CustomChatbot />
            </div>
            </div>
            </div>
            </section>

        </Layout>
        
     );
}
 
export default Index;