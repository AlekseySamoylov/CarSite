package com.alekseysamoylov.angularservlet.controller;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

/**
 * Created by Aleksey Samoylov on 29.12.2015.
 */

@WebServlet(urlPatterns = {"/one","/two"})
public class ShowSession extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession();
        boolean clear = request.getParameter("clear") !=null;
        if(clear){
            session.invalidate();
        } else {
            String name = request.getParameter("Name");
            String value = request.getParameter("Value");
            if (name!=null && value!=null){
                session.setAttribute(name, value);
            }
        }
        response.setContentType("text/html");
        PrintWriter writer = response.getWriter();
        writer.println("<html><head><title>Entry session</title></head><body>");
        if(clear) writer.println("<h1>Session has cleared</h1>");
        else {
            writer.println("<h1>In this session:</h1><ul>");
            Enumeration names = session.getAttributeNames();
            while(names.hasMoreElements()){
                String name = (String)names.nextElement();
                writer.println("<li>"+name+" = "+session.getAttribute(name)+"</li>");
            }

        }
        writer.println(
                "</ul><p><hr><h1>Add String</h1>"
                + "<form method=\"POST\" action=\""
                + request.getRequestURI() + "\">"
                + "Key: <input name=\"Name\" size=20><br>"
                + "Value: <input name=\"Value\" size=20<br>"
                + "<br><input type=\"submit\" value=\"Send\">"
                + "<input type=\"submit\" value=\"Clear\"></form>"
        );
    }
}
