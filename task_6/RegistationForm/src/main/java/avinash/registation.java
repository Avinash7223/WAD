package avinash;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class registation
 */
public class registation extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public registation() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        PrintWriter out = response.getWriter();

        String fnam = request.getParameter("fnam");
        String lnam = request.getParameter("lnam");
        String email = request.getParameter("email");
        String pwd = request.getParameter("pwd");
        String epwd = request.getParameter("epwd");
        String phone = request.getParameter("phone");
        String gender = request.getParameter("gender");
        String dob = request.getParameter("dob");
        String addr = request.getParameter("addr");
       
     
        

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/avinash", "root",
                    "avinash7223");

            PreparedStatement ps = con.prepareStatement("insert into register values(?,?,?,?,?,?,?,?,?)");
            ps.setString(1, fnam);
            ps.setString(2, lnam);
            ps.setString(3, email);
            ps.setString(4, pwd);
            ps.setString(5, epwd);
            ps.setString(6, phone);
            ps.setString(7, gender);
            ps.setString(8, dob);
            ps.setString(9, addr);
            

            int count = ps.executeUpdate();

            if (count > 0) 
            {
                out.println("<h1 style='color:green'>User Registered Successfully</h1>");
            } 
            else 
            {
                out.println("<h1 style='color:red'>User Not Registered</h1>");             
            }

            con.close();
        } 
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            out.println("<h1 style='color:red'>User Not Registered</h1>");
            out.println("<h1 style='color:red'>Error in ClassNotFoundException</h1>");
        } 
        catch (SQLException e) {
            e.printStackTrace();
            out.println("<h1 style='color:red'>User Not Registered</h1>");
            out.println("<h1 style='color:black'>Data Already Exist</h1>");
            out.println("<p>Use Different mail</p>");
        }
    }

}
