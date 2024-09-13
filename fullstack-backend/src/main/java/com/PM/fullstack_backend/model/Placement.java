package com.PM.fullstack_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Placement {
    @Id
    @GeneratedValue
    private Integer id;
    private String companyname;
    private String jobtitle;
    private LocalDate placementdate;
    private Integer studentid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCompanyname() {
        return companyname;
    }

    public void setCompanyname(String companyname) {
        this.companyname = companyname;
    }

    public String getJobtitle() {
        return jobtitle;
    }

    public void setJobtitle(String jobtitle) {
        this.jobtitle = jobtitle;
    }

    public LocalDate getPlacementdate() {
        return placementdate;
    }

    public void setPlacementdate(LocalDate placementdate) {
        this.placementdate = placementdate;
    }

    public Integer getStudentid() {
        return studentid;
    }

    public void setStudentid(Integer studentid) {
        this.studentid = studentid;
    }
}
