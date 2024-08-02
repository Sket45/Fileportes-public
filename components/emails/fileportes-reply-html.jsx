const RespondEmail = (
    dear,
    firstName,
    thanks,
    wait1,
    wait2,
    preview,
    btn,
    footer,
    regards,
    team
  ) => {
  
   
    
        return (
    
        <html>
          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style={maxWidthStyle}>
            <tbody>
              <tr style={{ width: '100%' }}>
                <td>
                  <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style={{ margin: 0 }}>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            alt="FilePortes"
                            height="105"
                            src="https://i.ibb.co/3kY2BR9/Logo.png"
                            width="300"
                            style={{
                              display: 'block',
                              outline: 'none',
                              border: 'none',
                              textDecoration: 'none',
                              margin: 'auto',
                              padding: '20px 0px',
                            }}
                          />
                          <hr style={hrStyle} />
                          <table
                            align="center"
                            width="100%"
                            border="0"
                            cellPadding="0"
                            cellSpacing="0"
                            role="presentation"
                            style={linearGradientStyle}
                          >
                            <tbody>
                              <tr style={{ width: '100%' }}>
                                <td>
                                  <p style={{ fontSize: '16px', lineHeight: '24px', margin: '4vh auto 0 auto', width: 'fit-content' }}>
                                    {dear} {firstName},
                                  </p>
                                  <p style={{ fontSize: '16px', lineHeight: '24px', margin: '0px auto', width: 'fit-content', textAlign: 'center' }}>
                                    {thanks}
                                  </p>
                                  <img
                                    alt="Van Logo"
                                    height="130px"
                                    src="https://i.ibb.co/54b9QVy/delivery-truck-deliver-svgrepo-com.png"
                                    width="130px"
                                    style={{
                                      display: 'block',
                                      outline: 'none',
                                      border: 'none',
                                      textDecoration: 'none',
                                      width: 'fit-content',
                                      margin: '3vh auto',
                                    }}
                                  />
                                  <p style={{ fontSize: '16px', lineHeight: '24px', margin: '4vh auto', width: '70%', textAlign: 'center' }}>
                                    {wait1}
                                    <br></br>
                                    {wait2}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p style={{ fontSize: '16px', lineHeight: '24px', margin: '16px 0px', color: 'rgb(82, 95, 127)', textAlign: 'left' }}>
                            {regards}
                            <br></br>
                            {team}
                          </p>
                          <a href="https://www.fileportes.com/services" target="_blank" style={aStyle}>
                            <span>
                              <i style={{ letterSpacing: '10px', msoFontWidth: '-100%', msoTextRaise: '15' }} hidden>
                                &nbsp;
                              </i>
                            </span>
                            <span style={{ maxWidth: '100%', display: 'inline-block', lineHeight: '120%' }}>{btn}</span>
                            <span>
                              <i style={{ letterSpacing: '10px', msoFontWidth: '-100%' }} hidden>
                                &nbsp;
                              </i>
                            </span>
                          </a>
                          <hr style={hrStyle} />
                          <p style={{ fontSize: '12px', lineHeight: '16px', margin: 'auto', color: 'rgb(136, 152, 170)', textAlign: 'center', width: '90%' }}>
                            {footer}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </html>
    
    
        )};
    
    export default RespondEmail;
      
    
      const maxWidthStyle = {
        maxWidth: "37.5em"
      }
    
      const hrStyle = {
        width:" 100%",
        borderTop: "1px solid rgb(23, 88, 125)",
        borderRight: "none rgb(23, 88, 125)",
        borderBottom: "none rgb(23, 88, 125)",
        borderLeft: "none rgb(23, 88, 125)",
        borderImage: "initial",
        margin: "20px 0px",
      }
    
      const linearGradientStyle = {
        background: "linear-gradient(310deg, rgb(19, 84, 122) 0%, rgb(128, 208, 199) 100%)",
        fontWeight: "500",
        color: "white",
        marginBottom: "20px",
      }
    
      const aStyle = {
        lineHeight: "100%",
        textDecoration: "none",
        display: "block",
        maxWidth: "100%",
        backgroundColor: "rgb(23, 89, 125)",
        borderRadius: "5px",
        color:" rgb(255, 255, 255)",
        fontSize: "15px",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        padding:"10px",
      }
    
    