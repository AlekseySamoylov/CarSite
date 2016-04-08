package com.alekseysamoylov.angularservlet.controller;

import com.alekseysamoylov.angularservlet.model.PersonData;
import com.google.gson.Gson;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Aleksey Samoylov on 29.12.2015.
 */
public class AngularJsServlet extends HttpServlet{
    private static final long serialVersionUID = 1L;

    public AngularJsServlet() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PersonData personData = new PersonData();
        personData.setFirstName("Vasya");
        personData.setLastName("Ivanov");

        String json = new Gson().toJson(personData);
        response.setContentType("application/json");
        response.getWriter().write(json);
    }

}
