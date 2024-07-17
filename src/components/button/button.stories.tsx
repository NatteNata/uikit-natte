import {Button} from "./button";
import {type Meta} from "@storybook/react";

const meta = {
    component: Button,
    title: "Components/Button",
    tags: ["autodocs"],

} satisfies Meta<typeof Button>;

export default meta;



const createBtnStory = (children, variant, pseudo = {}, disabled = false) => ({
    args: {
        children,
        variant,
        disabled
    },
    parameters: {
        pseudo
    }
})

export const PrimaryBtn = {
    args: {
        children: "Default button",
        variant: 'primary',
    },
};

export const PrimaryBtnActive = createBtnStory("Primary button Active", 'primary', {active: true})
export const PrimaryBtnHover = createBtnStory("Primary button Hover", 'primary', {hover: true})
export const PrimaryBtnFocus = createBtnStory("Primary button Focus", 'primary', {focus: true})
export const PrimaryBtnDisabled = createBtnStory("Primary button Disabled", 'primary', {}, true)

export const OutlinedBtn = {
    args: {
        children: "Outlined button",
        variant: 'outlined'
    },
    parameters: {
        pseudo: {
            hover: true
        }
    }
};

export const AlertOnClick = {
    args: {
        children: "Alert!",
        onClick: () => alert("Button clicked"),
    },
};

export const ButtonAsLink = {
    args: {
        children: "This is a link",
        as: "a",
        href: "https://google.com",
        target: "_blank",
    },
};
