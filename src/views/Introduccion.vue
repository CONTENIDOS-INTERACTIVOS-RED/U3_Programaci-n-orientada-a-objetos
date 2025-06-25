<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-amarillo.p-4.d-flex(data-aos='fade-up')
        span La programación orientada a objetos ha transformado profundamente el desarrollo de software, permitiendo la creación de aplicaciones más modulares, reutilizables y fáciles de mantener. No obstante, incluso el código mejor diseñado puede enfrentarse a situaciones inesperadas durante su ejecución. En este contexto, el manejo de excepciones y eventos se convierte en una herramienta clave: un conjunto de técnicas y mecanismos que permiten responder de forma estructurada y robusta ante errores y sucesos imprevistos en los programas.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-azul.p-4.d-flex(data-aos='fade-up')
        span Esta unidad tiene como objetivo que el estudiante implemente correctamente dichas técnicas, con el fin de mejorar la robustez y el control de los programas orientados a objetos. Para ello, se abordarán los distintos tipos de excepciones, el manejo de eventos en interfaces gráficas de usuario (GUI), y las prácticas necesarias para realizar pruebas y depuración de excepciones. Estas competencias resultan fundamentales para desarrollar software confiable, eficiente y resistente a fallos.

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-2.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.px-4.mb-0.text-white Además, el dominio del manejo de excepciones y eventos tiene un impacto directo en la experiencia del usuario final. Un mal tratamiento de errores puede derivar en bloqueos, pérdida de datos o desconfianza en la aplicación, como en el caso de un fallo bancario o de un editor de texto. Por ello, se estudiarán herramientas y buenas prácticas que permitan evitar estos escenarios, a través de una programación profesional y orientada a la calidad del <i>software</i>.

    p
</template>
