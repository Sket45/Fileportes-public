import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Heading,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
//   const baseUrl = process.env.VERCEL_URL
//     ? `https://${process.env.VERCEL_URL}`
//     : "";
  
  export const RespondEmail = (firstName) => (
    <Html>
      <Head />
      <Preview>Thank you for your quote request with FilePortes!</Preview>
      <Body style={main}>
        <Container>
          <Section style={container}>
            <Img
              style={logo}
              src={`https://i.ibb.co/3kY2BR9/Logo.png`}
              width="300"
              height="105"
              alt="FilePortes"
            />
            <Hr style={hr} />
            <Container style={wrapper}>
                <Text style={greeting}>
                    Dear {firstName},
                </Text>
                <Text style={thanks}>
                  Thank you for using our services!
                </Text>
                <Img
                    style={svg}
                    src={'https://i.ibb.co/54b9QVy/delivery-truck-deliver-svgrepo-com.png'}
                    width='130px'
                    height='130px'
                    alt="Van Logo"
                />
                 <Text style={inform}>
                     Sit back and relax, one of our movers will be in touch within 24 hours.
                </Text>
            </Container>


            {/* <Hr style={hr} />
            <Text style={services}>

            </Text> */}


            <Text style={paragraph}>Kind Regards,<br></br><br></br>— The FilePortes team</Text>
            <Button style={button} href="https://www.fileportes.com/services">
              View our Services
            </Button>
            <Hr style={hr} />
            <Text style={footer}>
                This is an automatically generated message. You cannot reply to this e-mail. Do you need help or would you like to change anything in your request? Please let us know and we will reach out to you as soon as possible.
            </Text>
            
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default RespondEmail;


  const wrapper = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 'fit-content',
    background : 'linear-gradient(310deg, #13547a 0%, #80d0c7 100%)',
    fontWeight: '500',
    color: 'white',
    marginBottom: '20px'
  }
  
  const container = {
    margin: '0'
  }

  const greeting = {
    width: 'fit-content',
    margin: '4vh auto',
    fontSize: '16px'


  }
  const thanks = {
    width: 'fit-content',
    margin: '0 auto',
    fontSize: '16px',
    textAlign: 'center'
  }

  const inform = {
    width: '70%',
    margin: '4vh auto',
    textAlign: 'center',
    fontSize: '16px',

  }
  const svg = {
    width: 'fit-content',
    margin: '3vh auto'
  }

  
  const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  };

  const logo = {
    margin: 'auto',
    padding: '20px 0'
  }

  
  const hr = {
    borderColor: "#17587D",
    margin: "20px 0",
  };
  
  const paragraph = {
    color: "#525f7f",
  
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left"
  };

  const services = {
    color: "#525f7f",
  
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center"
  }
  
  const button = {
    backgroundColor: "#17597D",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    width: "100%",
    padding: "10px",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: 'center',
    width: '90%',
    margin: 'auto'
  };
  