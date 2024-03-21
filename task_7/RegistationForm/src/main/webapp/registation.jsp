
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Registation</title>
</head>
<body>
  <div class="box">
  
  	<div align="center">
        <h1>Register Form</h1>
    </div>
  <div align="center">
    <form action="registation" method="post">      
      <table >
        <tr>
          <td> First Name :</td>
          <td>
            <input type="text" name="fnam" maxlength="20" size="15" required/>
          </td>
        </tr>
        <tr>
          <td> Last Name :</td>
          <td>
            <input type="text" name="lnam" maxlength="20" size="15" />
          </td>
        </tr>
        <tr>
          <td>Email :</td>
          <td>
            <input type="email" name="email" maxlength="20" size="15" required/>
          </td>
        </tr>
        <tr>
          <td> Password :</td>
          <td>
            <input type="password" name="pwd" maxlength="20" size="15" required/>
          </td>
        </tr>
        <tr>
          <td>Re-Enter Password :</td>
          <td>
            <input type="password" name="epwd" maxlength="20" size="15" required/>
          </td>
        </tr>
        <tr>
          <td>Phone :</td>
          <td>
            <input type="number" name="phone" maxlength="10" size="15" required/>
          </td>
        </tr>
        <tr>
          <td> Gender :</td>
          <td>
            <input type="radio" name="gender" value="Male" />Male
            <input type="radio" name="gender" value="Female" />Female
          </td>
        </tr>
        <tr>
			<td>DOB:</td>
			<td><input type="date" name="dob" required ></td>
		</tr>
        <tr>
          <td> Address :</td>
          <td>
            <textarea name="addr" rows="5" cols="15" required></textarea>
          </td>
        </tr>
        
		<tr>
			<td>Submit</td>
			<td><input type="submit" value="register"></td>
		</tr>

      </table>
    </form>
  </div>
  </div>
</body>
</html>