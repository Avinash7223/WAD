import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
public class UsernamePassw extends HttpServlet 
{
    public void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {

        String first_name = request.getParameter("first_name");
        response.setContentType("text/html");
        PrintWriter pw = response.getWriter();
        pw.println("<B>Welcome :");
        pw.println(first_name);
        pw.close();
    }
}
