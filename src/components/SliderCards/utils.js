
import styles from "./CarouselCard.module.scss";


export const GoToNext = () =>{
    const productContainers = [...document.querySelectorAll(`.${styles.cardContainer}`)];
    productContainers.forEach((item) => {
        item.scrollLeft += 314;
    })
}

export const GoToLeft = () =>{
    const productContainers = [...document.querySelectorAll(`.${styles.cardContainer}`)];
    productContainers.forEach((item) => {
        item.scrollLeft -= 314;
    })
}