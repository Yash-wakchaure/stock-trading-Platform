import React from "react";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero";

//test suite for Hero component
describe("Hero Component", () => {
    test("render hero image", () => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
    test("render sign up button", () => {
        render(<Hero/>);
        const signupbtn = screen.getAllByRole("button", {name: "SignUp Now"});
        expect(signupbtn).toBeInTheDocument();
        expect(signupbtn).toHaveClass("p-2 btn btn-primary fs-6 mb-5");
    });
});

