import React, { useState, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import avatar from '../assets/img/avatar.png';
import useChatbot from '../hooks/useChatbot'


const ContactForm = props => {
  return (
    <form>
      <input name='email' />
      <button type='submit' >Submit</button>
      
    </form>
  );
};



const ParamMessage = (props) => {   
  const { msj,vars, steps } = props; 
  const [newMessage, setNewMessage]  = useState(msj);  
  useEffect(()=>{    
    let tempMsj=newMessage;
    vars.forEach((one, index) =>{      
      tempMsj= tempMsj.replace("{" + index + "}", steps[one].message);     
    }); 
    setNewMessage(tempMsj);
  }, [])
  
  return newMessage;  
}
// const ParamMessage = (props) => {   
//   const { msj,vars, steps } = props;   
//   let tempMsj =msj;
//     vars.forEach((one, index) =>{    
//        tempMsj= tempMsj.replace("{" + index + "}", steps[one].message);    
//     }); 
//   return tempMsj;  
// }
const CustomChatbot =  (props) => {
  const steps = useChatbot(); 
  const config = { 
    width: "100%",
    height: "600px",
    floating: false,
    hideHeader: true,
    hideUserAvatar: true,
    style:{'box-shadow': 'none'},
    botAvatar: avatar,
    avatarStyle: {'width': '40px',
    'margin': '16px',
    'border-radius': '0 0 0 0',
    'height': 'auto',
    'padding': '0'}
  };

  const theme = {
    background: "none",
    fontFamily: "CamptonW05-Book", 
    fontSize: '1rem',
    headerFontSize: "25px",
    botBubbleColor: "#fff",
    botFontColor: "#02162b",
    userBubbleColor: "#73d7f1",
    userFontColor: "#02162b"
  };


  // const steps = [
  //   {
  //     id: "Greet",
  //     message: "Hi there, first time here?",
  //    trigger: "First Time Options"
      
      
  //   },
  //   {
  //     id: "First Time Options",
  //     options: [
  //       {
  //         value: "Yes",
  //         label: "Yes",
  //         trigger: "First Time 1"
  //       },
  //       { value: "No", label: "No", trigger: "Done" }
  //     ]
  //   },
  //   {
  //     id: "First Time 1",
  //     message:  "Not to worry I’m happy to help you find out more.",  
  //     trigger: "First Time 2"
  //   },
  //   {
  //     id: "First Time 2",
  //     message: "I’m Neela, welcome to my page.",
  //     trigger: "First Time 3"
  //   },
  //   {
  //     id: "First Time 3",
  //     message: "Will you tell me your name?",
  //     trigger: "name"
  //   },
  //   {
  //     id: "name",
  //     user: true,
  //     trigger: "Introduction 1"
  //   },
  //   {
  //     id: "Introduction 1",
  //     message: "Nice to meet you {previousValue}.",
  //     trigger: "Introduction 2"
  //   },
  //   {
  //     id: "Introduction 2",
  //     message: 'Let me tell you a little bit about myself…',   
  //     trigger: "Introduction 3"
  //   },
  //   {
  //     id: "Introduction 3",
  //     message: "…actually hang on, it might be a bit clearer if I show you.",
  //     trigger: "Introduction 4"
  //   },
  //   {
  //     id: "Introduction 4",      
  //     component: (
  //      <iframe width='300' height='150' src='https://www.youtube.com/embed/N8Vk6cTbZdI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
  //     ),
  //     asMessage: true,
  //     trigger: "Introduction 5"
  //   },
  //   {
  //     id: "Introduction 5",
  //     message: "I hope you can see that I’ll be able to offer a lot of value. Would you like to keep chatting or would you prefer for me to get one of my colleagues to get in contact?",
  //     trigger: "Displaying options keep chatting"
  //   },
  //   {
  //     id: "Displaying options keep chatting",
  //     options: [
  //       {
  //         value: "keep",
  //         label: "I’d like to keep chatting",
  //         trigger: "Talk about 1"
  //       },
  //       { value: "contact", label: "I’d like someone to contact me", trigger: "Contact 1" }
  //     ]
  //   },
  //   {
  //     id: "Contact 1",
  //     message:
  //       "Can you please fill in your details below.",
  //     trigger: "Contact 2"
  //   },
  //   {
  //     id: "Contact 2",
  //     message:
  //       "You’ll need to agree to some legal things before I’m allowed to send them.",
  //     trigger: "Contact form"
  //   },
  //   {
  //     id: "Contact form",
  //     component: <ContactForm />,
  //     asMessage: true,
  //     trigger: "Talk about 3"
  //   },
  //   {
  //     id: "Talk about 1",
  //     message:
  //       "Great!",
  //     trigger: "Talk about 2"
  //   },
  //   {
  //     id: "Talk about 2",
  //     component: <ParamMessage msj={'There’s a lot of things we can talk about, what interests you the most {0}?'} vars={['name']} />,
  //     asMessage: true,
  //     trigger: "Talk about 3"
  //   },
  //   {
  //     id: "Talk about 3",
  //     options: [
  //       { value: "Claims", label: "Claims Management", trigger: "Claims Management 1" },
  //       { value: "Contract", label: "Contract Management", trigger: "Contracts Management 1" },
  //       { value: "Financial", label: "Financial Management", trigger: "Financial Management 1" }
  //     ]
  //   },
  //   {
  //     id: "Claims Management 1",
  //     message: "Right now I’m learning a lot about repair requests.",
  //     trigger: "Claims Management 2"
  //   },
  //   {
  //     id: "Claims Management 2",
  //     message: "It involves things like understanding what the issue is and who to send to resolve it.",
  //     trigger: "Claims Management 3"
  //   },
  //   {
  //     id: "Claims Management 3",
  //     message: "It takes a lot of organising, but that’s the kind thing I’m really good at. Take a look.",
  //     trigger: "Claims Management 4"
  //   },
  //   {
  //     id: "Claims Management 4",      
  //     component: (
  //      <iframe width='300' height='150' src='https://www.youtube.com/embed/qWr05D16t7c' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
  //     ),
  //     asMessage: true,
  //     trigger: "Others ways to help"
  //   },
  //   {
  //     id: "Others ways to help",
  //     message: "Would you like to see other ways I’ll be able to help?",
  //     trigger: "Displaying options other ways help"
  //   },
  //   {
  //     id: "Displaying options other ways help",
  //     options: [
  //       {
  //         value: "yes",
  //         label: "Yes",
  //         trigger: "To see this time"
  //       },
  //       { value: "no", label: "No", trigger: "Done" }
  //     ]
  //   },

  //   {
  //     id: "To see this time",
  //     message: "No problem, what would you like to see this time?",
  //     trigger: "Talk about 3"
  //   },

  //   {
  //     id: "Contracts Management 1",
  //     message: "I’m really interested in learning more about contract management.",
  //     trigger: "Contracts Management 2"
  //   },
  //   {
  //     id: "Contracts Management 2",
  //     message: "It involves so many different things like answering tenant questions and securely managing important documents.",
  //     trigger: "Contracts Management 3"
  //   },   
  //   {
  //     id: "Contracts Management 3",      
  //     component: (
  //      <iframe width='300' height='150' src='https://www.youtube.com/embed/5Mxmw-gymxw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
  //     ),
  //     asMessage: true,
  //     trigger: "Others ways to help"
  //   },
   
  //   {
  //     id: "Financial Management 1",
  //     message: "Okay, this is a topic that always grabs attention, I have to confess it really interests me too.",
  //     trigger: "Financial Management 2"
  //   },
  //   {
  //     id: "Financial Management 2",
  //     message: "I’m learning that it’s so much more than just answering rent enquiries, it also involves outstanding balances and helping the tenants get up to date.",
  //     trigger: "Financial Management 3"
  //   },   
  //   {
  //     id: "Financial Management 3",      
  //     component: (
  //      <iframe width='300' height='150' src='https://www.youtube.com/embed/dCB71INequw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
  //     ),
  //     asMessage: true,
  //     trigger: "Others ways to help"
  //   },    
  //   {
  //     id: "Done",
  //     message: "Have a great day !!",
  //     end: true
  //   }
  // ];

  useEffect(()=>{    
  //  console.log(JSON.stringify(steps));
  }, [])
  

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default CustomChatbot;
