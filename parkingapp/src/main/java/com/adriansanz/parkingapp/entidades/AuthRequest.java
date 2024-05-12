package com.adriansanz.parkingapp.entidades;

public class AuthRequest {
    private String matricula;
    private String password;

    public AuthRequest() {
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}