package com.alekseysamoylov.angularservlet.controller;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by Aleksey Samoylov on 29.12.2015.
 */

@WebServlet(urlPatterns={"/hello"})
public class HelloClient extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
//        response.setContentType("text/html");
//        PrintWriter writer = response.getWriter();
//        writer.write("<h1>Hello</h1>");
        response.sendRedirect("http://www.google.com");

    }
}
