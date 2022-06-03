import refs from "./refs";

export default function burgerMenuHandler() {
    refs.burgerToggler.classList.toggle('active');
    refs.body.classList.toggle('backdrop-active');
    refs.backdrop.classList.toggle('active');
    refs.burgerMenu.classList.toggle('active');
}