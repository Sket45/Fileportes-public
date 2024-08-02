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


 const RespondEmail = (
  tdear,
  firstName,
  tthanks,
  twait1,
  twait2,
  tpreview,
  tbtn,
  tfooter,
  tregards,
  tteam
  ) => {



  return (

  <Html>
    <Head/>
    <Preview>{tpreview}</Preview>
    <Body style={main}>
     <Container> 
      <table width="100%">
        <tbody>

          <tr>
            <td align="center" valign="top">
              <img
                src="https://i.ibb.co/3kY2BR9/Logo.png"
                width="300"
                height="105"
                alt="FilePortes"
              />
            </td>
          </tr>
          <tr>
            <Hr style={hr} />
          </tr>
          <Container style={wrapper}>
          <tr>
            <td align="center" valign="top" style={greeting} >
             <br></br><br></br>{tdear} {firstName},
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style={thanks}>
              {tthanks}<br></br>&nbsp;
            </td>
          </tr>
          <tr>
            <td align="center" valign="top">
              <img
                style={svg}
                src="https://i.ibb.co/54b9QVy/delivery-truck-deliver-svgrepo-com.png"
                width="200px"
                height="200px"
                alt="Van Logo"
              />
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style={inform}>
                &nbsp;<br></br>{twait1}<br></br>{twait2}<br></br><br></br>&nbsp;
            </td>
          </tr>
          </Container>
            <Text style={paragraph}>{tregards}<br></br>{tteam}</Text>
          <tr>
            <td align="center" valign="top" style={buttonWrapper}>
                <Button style={button} href="https://www.fileportes.com/services">
                    {tbtn}
                </Button>
            </td>
          </tr>
            <tr>
                <td align="center" valign="top" style={{}}>
                    <Hr style={hr} />
                    <Text style={footer}>
                        {tfooter}
                    </Text>
                </td>
            </tr>
 
 

        </tbody>
      </table>



      </Container>
    </Body>
  </Html>
)};

export default RespondEmail;

const wrapper = {
    background : 'linear-gradient(310deg, #13547a 0%, #80d0c7 100%)',
    width: '100% !important',
    height: 'fit-content',
    backgroundColor: '#4991A0',
    fontWeight: '500',
    color: 'white',
    
}
const main = {
    backgroundColor: "#f6f9fc !important",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  };

const hr = {
    borderColor: "#17587D",
    margin: "20px 0",
  };
  

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

  const svg = {
    width: 'fit-content',
    margin: '1.5vh auto'
  }
  const inform = {
    width: '70%',
    margin: '4vh auto',
    textAlign: 'center',
    fontSize: '16px',

  }

  const paragraph = {
    color: "#525f7f",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left"
  };

  const buttonWrapper = {
    backgroundColor: "#17597D",
    borderRadius: "5px",
    color: "#fff !important",
    fontSize: "15px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    width: "100%",
    padding: "10px 0",
    cursor: 'pointer'
  };

  const button = {
    textAlign: "center",
    width: "100%",
    color: 'white !important'
    
  }

  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: 'center',
    width: '90%',
    margin: 'auto'
  };
