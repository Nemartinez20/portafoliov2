import Card_Habilidades from "./Card_Habilidades";

export default function Habilidades() {
  return (
    <section className="container_habilidades">
      <Card_Habilidades
        nombreH={"HTML"}
        url={"https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"}
      />

      <Card_Habilidades
        nombreH={"CSS"}
        url={"https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg"}
      />
      <Card_Habilidades
        nombreH={"JavaScript"}
        url={"https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"}
      />
      <Card_Habilidades
        nombreH={"Astro"}
        url={"https://svgl.app/library/astro.svg"}
      />
      <Card_Habilidades
        nombreH={"React"}
        url={"https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"}
      />
      <Card_Habilidades
        nombreH={"PHP"}
        url={"https://www.vectorlogo.zone/logos/php/php-icon.svg"}
      />
      <Card_Habilidades
        nombreH={"laravel"}
        url={"https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg"}
      />
      <Card_Habilidades
        nombreH={"Boostrap"}
        url={
          "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
        }
      />
      <Card_Habilidades
        nombreH={"Tailwind"}
        url={
          "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        }
      />
      <Card_Habilidades
        nombreH={"Mysql"}
        url={"https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"}
      />
      <Card_Habilidades
        nombreH={"TypeScript"}
        url={
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
        }
      />
      <Card_Habilidades
        nombreH={"Git"}
        url={"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"}
      />
      <Card_Habilidades
        nombreH={"Postman"}
        url={"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"}
      />
    </section>
  );
}
