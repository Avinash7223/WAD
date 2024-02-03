<?xml version="1.0"?> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html> 
      <head>
      <style>
      body  {
        background-image: url("https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-1024x756.jpg");

      }
      table{
        margin:auto;
        font-size:25px;
      }
      </style> 
      </head> 
      <body>
        <table border="1"> 
          <tr> 
            <th bgcolor="pink">languange</th> 
            <th bgcolor="pink">inventor</th> 
            <th bgcolor="pink">year</th> 
            <th bgcolor="pink">place</th> 
          </tr> 
          <xsl:for-each select="langtypes/lang"> 
            <tr> 
              <td bgcolor="green"> 
                <b><xsl:value-of select="language"/></b> 
              </td> 
              <td bgcolor="red"> 
                <b><xsl:value-of select="inventor"/></b> 
              </td> 
              <td bgcolor="lightblue"> 
                <b><xsl:value-of select="year"/></b> 
              </td> 
              <td bgcolor="grey"> 
                <b><xsl:value-of select="place"/></b> 
              </td> 
            </tr> 
          </xsl:for-each> 
        </table> 
             
      
      </body> 
    </html> 
  </xsl:template> 
</xsl:stylesheet>
